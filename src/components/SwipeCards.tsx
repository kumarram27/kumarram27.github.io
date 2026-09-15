"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SwipeCardsProps {
  className?: string;
}

interface Card {
  id: number;
  url: string;
  alt: string;
}

const cardData: Card[] = [
  {
    id: 0,
    url: "/img/0.jpg",
    alt: "Kumar Satya Sri Ram",
  },
  {
    id: 1,
    url: "/img/1.jpg",
    alt: "Kumar Satya Sri Ram",
  },
];

const AUTO_SWIPE_DELAY = 8000;

const SwipeCards = ({ className }: SwipeCardsProps) => {
  const [cards, setCards] = useState<Card[]>(cardData);

  // Ref so the timer can trigger the current front card
  const frontCardRef = useRef<number | null>(null);

  const resetCards = () => {
    setCards(cardData);
  };

  useEffect(() => {
    frontCardRef.current = cards[cards.length - 1]?.id ?? null;
  }, [cards]);

  return (
    <div
      className={cn(
        "relative grid h-[280px] w-[210px] place-items-center sm:h-[320px] sm:w-[240px]",
        className,
      )}
    >
      {cards.map((card, index) => {
        const depth = cards.length - 1 - index;

        return (
          <CardItem
            key={card.id}
            cards={cards}
            setCards={setCards}
            depth={depth}
            {...card}
          />
        );
      })}
    </div>
  );
};

const CardItem = ({
  id,
  url,
  alt,
  setCards,
  cards,
  depth,
}: {
  id: number;
  url: string;
  alt: string;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  cards: Card[];
  depth: number;
}) => {
  const x = useMotionValue(0);

  const [isAutoSwiping, setIsAutoSwiping] = useState(false);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  /*
   * Move the current card to the back.
   */
  const moveToBack = () => {
    setCards((pv) => {
      const front = pv[pv.length - 1];

      if (!front) return pv;

      return [front, ...pv.slice(0, -1)];
    });

    x.set(0);
    setIsAutoSwiping(false);
  };

  /*
   * Manual swipe
   */
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    if (Math.abs(info.offset.x) > 100) {
      const direction = info.offset.x > 0 ? 1 : -1;

      animate(x, direction * 180, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }).then(moveToBack);
    } else {
      animate(x, 0, {
        type: "spring",
        stiffness: 400,
        damping: 40,
      });
    }
  };

  /*
   * Automatic swipe.
   */
  useEffect(() => {
    if (!isFront) return;

    const timer = setTimeout(() => {
      setIsAutoSwiping(true);

      animate(x, 180, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }).then(moveToBack);
    }, AUTO_SWIPE_DELAY);

    return () => clearTimeout(timer);
  }, [isFront, x]);

  return (
    <motion.div
      className="group absolute h-[280px] w-[210px] origin-bottom overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg transition-colors hover:cursor-grab active:cursor-grabbing sm:h-[320px] sm:w-[240px] dark:border-white/20 dark:bg-zinc-900"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        boxShadow: isFront
          ? "0 20px 35px -5px rgb(0 0 0 / 0.25), 0 8px 12px -4px rgb(0 0 0 / 0.15)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : Math.max(0.88, 0.95 - depth * 0.05),
      }}
      drag={isFront && !isAutoSwiping ? "x" : false}
      dragConstraints={{
        left: -150,
        right: 150,
        top: 0,
        bottom: 0,
      }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
    >
      <Image
        src={url}
        alt={alt}
        fill
        sizes="(max-width: 640px) 210px, 240px"
        quality={85}
        loading={isFront ? "eager" : "lazy"}
        draggable={false}
        className="pointer-events-none select-none object-cover"
      />
    </motion.div>
  );
};

export default SwipeCards;
