"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Network,
  Radio,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import React from "react";

interface SkillItem {
  name: string;
  image?: string;
  lucideIcon?: React.ReactNode;
  category:
  | "Languages"
  | "Frontend"
  | "Backend & APIs"
  | "Data & Storage"
  | "Infrastructure & Tools";
}

const skillsData: SkillItem[] = [
  // Languages
  { name: "Python", image: "/python.svg", category: "Languages" },
  { name: "TypeScript", image: "/ts.png", category: "Languages" },
  { name: "JavaScript", image: "/js.png", category: "Languages" },
  {
    name: "SQL",
    lucideIcon: <Database className="size-4 text-sky-500" />,
    category: "Languages",
  },

  // Frontend
  { name: "React.js", image: "/react.png", category: "Frontend" },
  { name: "Next.js", image: "/next.png", category: "Frontend" },
  { name: "Tailwind CSS", image: "/tailwind.png", category: "Frontend" },

  // Backend & APIs
  { name: "FastAPI", image: "/fastapi.png", category: "Backend & APIs" },
  { name: "Node.js", image: "/node-js.png", category: "Backend & APIs" },
  {
    name: "REST APIs",
    lucideIcon: <Globe className="size-4 text-emerald-500" />,
    category: "Backend & APIs",
  },
  {
    name: "WebSockets",
    lucideIcon: <Radio className="size-4 text-amber-500" />,
    category: "Backend & APIs",
  },
  {
    name: "Microservices",
    lucideIcon: <Layers className="size-4 text-indigo-500" />,
    category: "Backend & APIs",
  },
  {
    name: "Kong Gateway",
    lucideIcon: <Network className="size-4 text-cyan-500" />,
    category: "Backend & APIs",
  },

  // Data & Storage
  { name: "PostgreSQL", image: "/postger.png", category: "Data & Storage" },
  { name: "Redis", image: "/redis.svg", category: "Data & Storage" },
  { name: "MongoDB", image: "/mongodb.png", category: "Data & Storage" },
  { name: "MySQL", image: "/mysql.png", category: "Data & Storage" },
  {
    name: "Elasticsearch",
    lucideIcon: <Database className="size-4 text-yellow-500" />,
    category: "Data & Storage",
  },

  // Infrastructure & Tools
  { name: "Docker", image: "/docker.webp", category: "Infrastructure & Tools" },
  { name: "Git", image: "/git.svg", category: "Infrastructure & Tools" },
  {
    name: "Nginx",
    lucideIcon: <Server className="size-4 text-green-500" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Fluent Bit",
    lucideIcon: <Workflow className="size-4 text-blue-400" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "ADB / WDA",
    lucideIcon: <Cpu className="size-4 text-orange-400" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Appium",
    lucideIcon: <Terminal className="size-4 text-purple-400" />,
    category: "Infrastructure & Tools",
  },
];

const categories = [
  "Languages",
  "Frontend",
  "Backend & APIs",
  "Data & Storage",
  "Infrastructure & Tools",
] as const;

export default function Skills() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="title text-2xl sm:text-3xl">skills & technologies</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Languages, frameworks, databases, and infrastructure tools I work with
          daily.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {categories.map((category, catIndex) => {
          const categorySkills = skillsData.filter(
            (s) => s.category === category,
          );
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.08 + index * 0.03,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/80 px-3 py-2 text-xs font-medium text-foreground shadow-xs backdrop-blur-xs transition-colors hover:border-primary/40 hover:bg-accent/50 dark:border-white/10 dark:bg-card/90 dark:hover:border-white/25 dark:hover:bg-accent/40"
                  >
                    <div className="relative flex size-5 items-center justify-center">
                      {skill.image ? (
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="size-5 object-contain transition-transform group-hover:scale-110"
                        />
                      ) : (
                        skill.lucideIcon || (
                          <Code2 className="size-4 text-muted-foreground" />
                        )
                      )}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
