"use client";
import { projects } from "@/Data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { LinkPreview } from "./ui/link-preview";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[35rem] h-[30rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              githubLink={item.githubLink}
              liveLink={item.liveLink}
            >
              <div className="relative flex items-center justify-center sm:w-[460px] w-[75vw] overflow-hidden sm:h-[30vh] h-full  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden  lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                > 
                <img src="/bg.png"   alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className=" absolute bottom-0  "
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-l text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-l lg:font-normal font-light text-sm line-clamp-2"
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
                      <img src={icon}  alt="icon" className="p-1 h-8" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <LinkPreview url={item.liveLink}>
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
