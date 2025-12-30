import Card from "@/components/Card";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" bg-black-100 flex justify-center items-center select-none flex-col mx-auto sm:px-10 px-5">
      <TracingBeam className="px-3">
        <div className="max-w-8xl w-full relative">
          <Hero />
          <Skills />
          <RecentProjects />
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
