"use client";

import LinkWithIcon from "@/components/LinkWithIcon";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

export default function GithubSnake() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="title text-2xl sm:text-3xl">contributions</h2>
        </div>
        <LinkWithIcon
          href="https://github.com/kumarram27"
          position="right"
          icon={<ArrowRightIcon className="size-5" />}
          text="github profile"
        />
      </div>

      <div className="relative flex w-full items-center justify-center overflow-x-auto rounded-2xl border border-border/80 bg-card p-3 sm:p-6 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 dark:border-white/10 dark:bg-card/90 dark:hover:border-white/20">
        {/* Dark Mode Snake Animation */}
        <img
          src="https://raw.githubusercontent.com/kumarram27/kumarram27/output/snake-dark.svg"
          alt="GitHub Contribution Snake Animation (Dark Mode)"
          className="hidden h-auto w-full min-w-[320px] max-w-full select-none object-contain dark:block"
          loading="lazy"
        />
        {/* Light Mode Snake Animation */}
        <img
          src="https://raw.githubusercontent.com/kumarram27/kumarram27/output/snake-light.svg"
          alt="GitHub Contribution Snake Animation (Light Mode)"
          className="block h-auto w-full min-w-[320px] max-w-full select-none object-contain dark:hidden"
          loading="lazy"
        />
      </div>
    </section>
  );
}
