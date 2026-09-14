"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { RefreshCw } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

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
  }
];

const SwipeCards = ({ className }: SwipeCardsProps) => {
  const [cards, setCards] = useState<Card[]>(cardData);

  const resetCards = () => {
    setCards(cardData);
  };

  return (
    <div
      className={cn(
        "relative grid h-[280px] w-[210px] place-items-center sm:h-[320px] sm:w-[240px]",
        className,
      )}
    >
      {cards.length === 0 && (
        <div style={{ gridRow: 1, gridColumn: 1 }} className="z-20">
          <Button onClick={resetCards} variant="outline" size="sm">
            <RefreshCw className="mr-1.5 size-3.5" />
            Again
          </Button>
        </div>
      )}
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
  setCards: Dispatch<SetStateAction<Card[]>>;
  cards: Card[];
  depth: number;
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = (_event: any, info: { offset: { x: number } }) => {
    if (Math.abs(info.offset.x) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    } else {
      animate(x, 0, {
        type: "spring",
        stiffness: 400,
        damping: 40,
      });
    }
  };

  return (
    <motion.div
      className="group absolute h-[280px] w-[210px] origin-bottom overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg transition-colors hover:cursor-grab active:cursor-grabbing dark:border-white/20 dark:bg-zinc-900 sm:h-[320px] sm:w-[240px]"
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
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: -150,
        right: 150,
        top: 0,
        bottom: 0,
      }}
      onDragEnd={handleDragEnd}
    >
      {/* Pure full-bleed photo */}
      <Image
        src={url}
        alt={alt}
        fill
        sizes="(max-width: 640px) 210px, 240px"
        quality={85}
        draggable={false}
        className="pointer-events-none select-none object-cover"
        priority={isFront}
      />
    </motion.div>
  );
};

export default SwipeCards;
