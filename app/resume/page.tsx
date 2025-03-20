import { Spotlight } from "@/components/ui/Spotlight";

export default function Resume() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center select-none flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="relative pb-20 pt-36 h-screen w-full flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white" />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <iframe
          src="/Resume.pdf"
          className="w-full max-w-4xl h-[90vh] border border-gray-300 rounded-lg shadow-lg"
        ></iframe>
      </div>
      <a
        href="/Resume.pdf"
        download
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </main>
  );
}
