"use client";
import { projects } from "@/Data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LinkPreview } from "./ui/link-preview";
import Link from "next/link";

const RecentProjects = ({ limit }: { limit?: number }) => {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="py-20" id="projects">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-purple">
            Selected work
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Recent projects
          </h1>
        </div>
        {limit && (
          <Link
            href="/projects"
            className="text-sm text-white-100 transition-colors hover:text-purple"
          >
            View all projects <span aria-hidden="true">-&gt;</span>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {visibleProjects.map((item) => (
          <div
            className="sm:h-[35rem] h-[30rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <div className="relative flex h-full w-full max-w-[570px] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0d1024] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.25)] sm:p-6">
              <div className="relative flex items-center justify-center overflow-hidden sm:h-[30vh] h-[23vh] mb-10">
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#13162D]">
                  {item.video ? (
                    <video
                      src={item.video}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      preload="false"
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt={`${item.title} cover`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  )}
                </div>
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
                      className="lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt="icon" className="p-1 h-8" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-4">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white transition-colors hover:text-purple"
                  >
                    <FaGithub aria-hidden="true" />
                    Source code
                  </a>
                  <div className="flex items-center text-sm text-white transition-colors hover:text-purple">
                  <LinkPreview url={item.liveLink}>
                    <span className="flex  text-sm text-purple">
                      Live Site
                    </span>
                  </LinkPreview>
                  <FaLocationArrow className="ms-1" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
