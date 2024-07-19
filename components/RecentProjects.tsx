"use client";

import { projects } from "@/Data";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { LinkPreview } from "./ui/link-preview";
import { motion } from "framer-motion";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import { AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

const RecentProjects = () => {
  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({});

  const handleClick = (id: string) => {
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[35rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[560px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className=" lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt="icon5" className="p-1" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <LinkPreview
                    url={item.link}
                    onClick={() => handleClick(item.id.toString())}
                    style={
                      clickCounts[item.id] >= 2
                        ? { transform: "translate(-50%,-50%) rotateX(-40deg)" }
                        : {}
                    }
                  >
                    <span className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </span>
                  </LinkPreview>

                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
