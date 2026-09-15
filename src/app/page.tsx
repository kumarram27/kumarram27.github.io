import Experience from "@/components/Experience";
import GithubSnake from "@/components/GithubSnake";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import PostsSkeleton from "@/components/PostsSkeleton";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import SwipeCards from "@/components/SwipeCards";
import ContributionShooter from "@/components/ContributionShooter";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  // ArrowDown,
  // ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import homeContent from "@/data/home.json";

const LIMIT = 2; // show 2 featured projects on main page

/*
async function RecentPosts() {
  const posts = (await getPosts())
    .filter((post) => !post.draft)
    .slice(0, 2);
  if (posts.length === 0) return null;
  return <Posts posts={posts} />;
}
*/

export default function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <SwipeCards className="md:mr-8" />

        <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="title text-balance text-4xl sm:text-5xl">
            {homeContent.introduction.greeting}
          </h1>

          <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
            {homeContent.introduction.role} from{" "}
            {homeContent.introduction.location}
          </p>

          <p className="mt-4 max-w-md text-balance text-sm leading-relaxed sm:text-base">
            {homeContent.introduction.description}
          </p>

          {/* 
          Chat prompt (commented out). To re-enable, see CHATBOT_AGENT_SETUP.md
          <div className="mt-6 flex items-center gap-1 text-muted-foreground">
            <p className="text-balance text-sm font-semibold sm:text-base">
              {homeContent.introduction.chatPrompt}
            </p>
            <ArrowDownRight className="hidden size-5 animate-bounce sm:block" />
            <ArrowDown className="block size-5 animate-bounce sm:hidden" />
          </div>
          */}

          <p className="mt-1 text-xs font-light">
            {homeContent.introduction.escalation.text}&nbsp;
            <Link
              href={homeContent.escalationLink.href}
              target="_blank"
              className="link font-semibold underline"
              title={homeContent.escalationLink.title}
            >
              {homeContent.introduction.escalation.linkText}
            </Link>
            &nbsp;
            {homeContent.introduction.escalation.suffix}
          </p>

          <section className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/Resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Skills & Technologies Section */}
      <Skills />

      {/* Featured Projects Section (3D Tilt Cards) */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Hover over cards for 3D depth perspective.
            </p>
          </div>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Interactive Contribution Arcade</h2>
        <p className="text-center text-zinc-400 text-sm">
          Blast through real commit history. Press Enter to play!
        </p>
        <ContributionShooter username="kumarram27" />
      </section>

      {/* GitHub Snake Contribution Activity */}
      {/* <GithubSnake /> */}

      {/* Recent Posts Section */}
      <Suspense fallback={<PostsSkeleton rows={2} />}>
        <RecentPostsWrapper />
      </Suspense>
    </article>
  );
}

async function RecentPostsWrapper() {
  const posts = (await getPosts()).filter((post) => !post.draft);
  if (posts.length === 0) return null;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="title text-2xl sm:text-3xl">recent posts</h2>
        <LinkWithIcon
          href="/blog"
          position="right"
          icon={<ArrowRightIcon className="size-5" />}
          text="view more"
        />
      </div>
      <Posts posts={posts.slice(0, 2)} />
    </section>
  );
}
