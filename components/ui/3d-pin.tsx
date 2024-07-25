"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const PinContainer = ({
  children,
  title,
  githubLink,
  liveLink,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  githubLink?: string;
  liveLink?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative", className)}>{children}</div>
        </div>
      </div>
      {
        <PinPerspective
          title={title}
          githubLink={githubLink}
          liveLink={liveLink}
        />
      }
    </div>
  );
};

export const PinPerspective = ({
  title,
  githubLink,
  liveLink,
}: {
  title?: string;
  githubLink?: string;
  liveLink?: string;
}) => {
  return (
    <motion.div className=" w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute  inset-x-0 flex justify-center">
          <span className="   bg-gradient-to-r from-emerald-400/0 via-blue-400/90  transition-opacity duration-500 group-hover/btn:opacity-40">
            <a
              href={githubLink}
              target={"_blank"}
              className="relative flex space-x-2 items-center z-10 py-0.5 px-4"
            >
              <button className="inline-flex h-12 px-10 py-2.5 gap-2 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-500-2">
                <Image
                  src="/git.svg"
                  height="24"
                  width="24"
                  className="h-full w-full group-hover/card:shadow-xl"
                  alt="Code"
                />
                <h1>Code</h1>
              </button>
            </a>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
