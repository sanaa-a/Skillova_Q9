import { getProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <section id="work" className="px-4 py-9 sm:py-8 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
            Recent builds
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
