import RecentProjects from "@/components/RecentProjects";

export default function ProjectsPage() {
  return (
    <main className="w-full min-w-0 overflow-x-clip bg-black-100 px-5 sm:px-10">
      <div className="mx-auto w-full max-w-8xl pt-20">
        <RecentProjects />
      </div>
    </main>
  );
}
