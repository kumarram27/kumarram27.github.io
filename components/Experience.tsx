import { experiences } from "@/Data";
import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id="experience" className="px-2 py-20 sm:px-4">
      <h1 className="heading">
        My professional <span className="text-purple">experience</span>
      </h1>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-purple via-blue-400/60 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="relative grid grid-cols-[2rem_1fr] gap-5 sm:grid-cols-2 sm:gap-16"
            >
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-purple/60 bg-black-100 text-purple sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <FaBriefcase className="text-xs" aria-hidden="true" />
              </div>

              <div
                className={`col-start-2 rounded-2xl border border-white/[0.1] bg-black-200 p-5 shadow-[0_8px_24px_rgb(0_0_0/0.2)] sm:col-span-1 sm:w-full sm:p-6 ${
                  index % 2 === 0
                    ? "sm:col-start-1 sm:text-right"
                    : "sm:col-start-2"
                }`}
              >
                <p className="text-sm font-medium text-purple">
                  {experience.period}
                </p>
                <h2 className="mt-2 text-xl font-bold text-white">
                  {experience.role}
                </h2>
                <p className="mt-1 text-sm text-blue-100">
                  {experience.company}
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm leading-6 text-white-100">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-4 before:absolute before:left-0 before:top-3 before:h-1 before:w-1 before:rounded-full before:bg-purple"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
