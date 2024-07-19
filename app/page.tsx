import Card from "@/components/Card";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/Data";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <TracingBeam className="px-3">
        <div className="max-w-8xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <RecentProjects />
        </div>
      </TracingBeam>
    </main>
  );
}
