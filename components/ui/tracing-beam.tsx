"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full mx-auto", className)}
    >
      <motion.div className="relative w-full">
        {/* Beam */}
        <div className="absolute -left-3 md:-left-7 top-2 hidden md:block">
          <motion.div
            style={{
              opacity: useTransform(opacity, [0, 0.01], [1, 0]),
            }}
          >
            <motion.div
              style={{ opacity }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </motion.div>

          <svg
            viewBox={`0 0 40 ${svgHeight}`}
            width="40"
            height={svgHeight}
            className="ml-1.5"
            aria-hidden
          >
            <motion.path
              d={`M 19 0V ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1.25"
            />
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>

        <div ref={contentRef}>{children}</div>
      </motion.div>
    </div>
  );
};
