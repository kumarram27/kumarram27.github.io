"use client";

import { Badge } from "@/components/ui/Badge";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project } from "@/lib/schemas";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";
import ImageWithSkeleton from "./ImageWithSkeleton";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, video, tags, links } = project;

  return (
    <CardContainer containerClassName="w-full py-2" className="w-full h-full">
      <CardBody className="group/card relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-card/95 dark:hover:border-white/20 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <div>
          {/* Media Header (Video or Image) */}
          <CardItem translateZ={50} className="w-full">
            {video ? (
              <div className="relative h-44 w-full overflow-hidden rounded-xl bg-muted/40 dark:bg-zinc-900">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>
            ) : image ? (
              <Link href={href || image} target="_blank" className="block w-full">
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-muted/40">
                  <ImageWithSkeleton
                    src={image}
                    alt={name}
                    width={500}
                    height={300}
                    sizes="(max-width: 640px) calc(100vw - 4rem), 344px"
                    quality={80}
                    containerClassName="h-full w-full"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                  />
                </div>
              </Link>
            ) : null}
          </CardItem>

          {/* Title & Description */}
          <div className="mt-4 flex flex-col gap-2">
            <CardItem
              translateZ={40}
              className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover/card:text-primary"
            >
              {name}
            </CardItem>

            <CardItem translateZ={30} className="w-full">
              <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                {description}
              </Markdown>
            </CardItem>
          </div>
        </div>

        {/* Footer: Tags & Action Links */}
        <div className="mt-6 flex flex-col gap-4">
          {tags && tags.length > 0 && (
            <CardItem translateZ={35} className="flex w-full flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="px-1.5 py-0.5 text-[10px] font-medium transition-colors"
                  variant="secondary"
                >
                  {tag}
                </Badge>
              ))}
            </CardItem>
          )}

          {links && links.length > 0 && (
            <CardItem
              translateZ={50}
              className="flex w-full flex-row flex-wrap items-center gap-2 border-t border-border/50 pt-3 dark:border-white/5"
            >
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge
                    className="flex cursor-pointer items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium transition-all hover:scale-105"
                    variant="outline"
                  >
                    <Icon name={link.icon} className="size-3.5" />
                    {link.name}
                  </Badge>
                </Link>
              ))}
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
