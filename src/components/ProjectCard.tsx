import type { Project } from "@/lib/projects";

const STATUS_STYLES: Record<Project["status"], string> = {
  shipped: "bg-[var(--color-blue-100)] text-[var(--color-blue-700)]",
  "in progress": "bg-[var(--color-purple-100)] text-[var(--color-purple-700)]",
  archived: "bg-black/5 text-[var(--color-ink-soft)]",
};

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card-wrap h-full">
      <a href="#" className="project-card group flex flex-col h-full focus:outline-none">
        <span className="card-accent-bar" aria-hidden />
        {/* mini browser chrome, echoing a live-preview thumbnail */}
        <div className="card-chrome">
          <span className="card-chrome-dot bg-[var(--color-blue-300)]" />
          <span className="card-chrome-dot bg-[var(--color-purple-300)]" />
          <span className="card-chrome-dot bg-black/15" />
          <span className="ml-2 font-mono text-[10px] text-[var(--color-ink-soft)]/70 truncate">
            anaum.dev/{slugify(project.title)}
          </span>
        </div>

        <div className="flex flex-col p-6 pl-7 flex-1">
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-xs text-[var(--color-ink-soft)]/70">
              /{project.index}
            </span>
            <span
              className={`font-mono text-[11px] px-2.5 py-1 rounded-full ${STATUS_STYLES[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <h3 className="font-display mt-4 text-lg font-semibold text-[var(--color-ink)] leading-snug">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed flex-1">
            {project.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-1 rounded-md bg-[var(--color-bg-alt)] text-[var(--color-ink-soft)] border border-black/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-4 font-mono text-xs text-[var(--color-ink-soft)]/70">
              <span className="inline-flex items-center gap-1">♥ {project.likes}</span>
              <span className="inline-flex items-center gap-1">◎ {project.views}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-purple-700)]">
              View
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
