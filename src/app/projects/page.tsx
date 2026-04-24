import Image from "next/image";
import Link from "next/link";

import { projectCategories, projects } from "@/data/portfolio";

function truncateSummary(text: string, maxLength = 100) {
  const chars = Array.from(text);
  return chars.length > maxLength ? `${chars.slice(0, maxLength).join("")}...` : text;
}

function getCategoryBadgeClass(category: string) {
  if (category === "视频") return "border-cyan-300 bg-cyan-100 text-cyan-800";
  if (category === "文字") return "border-rose-300 bg-rose-100 text-rose-800";
  if (category === "播客") return "border-violet-300 bg-violet-100 text-violet-800";
  return "border-amber-300 bg-amber-100 text-amber-800";
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_5%_5%,#ecfeff_0%,#f0f9ff_38%,#fdf4ff_100%)] px-6 py-12 text-slate-900 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
           
            <h1 className="text-3xl font-bold text-slate-900">作品集</h1>
           
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-white"
          >
            返回首页
          </Link>
        </div>

        <section className="space-y-8">
          {projectCategories.map((category) => {
            const categoryProjects = projects.filter((project) => project.category === category);

            return (
              <div key={category} className="space-y-4">
                <h2
                  className={`inline-flex rounded-full border px-4 py-1 text-sm font-bold tracking-wide shadow-sm ${getCategoryBadgeClass(
                    category,
                  )}`}
                >
                  {category}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {categoryProjects.map((project) => (
                    <article
                      key={project.title}
                      className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 transition hover:-translate-y-1 hover:bg-white"
                    >
                      <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />
                      <div className="relative h-44 w-full">
                        <Image
                          src={project.image ?? "/project-placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-4 p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wide shadow-sm ${getCategoryBadgeClass(
                              project.category,
                            )}`}
                          >
                            {project.category}
                          </span>
                        </div>
                        <div className="group/summary">
                          <p className="text-slate-600">{truncateSummary(project.summary, 100)}</p>
                          <div className="mt-2 max-h-0 overflow-hidden rounded-xl border border-transparent bg-white/90 px-3 text-sm leading-relaxed text-slate-700 opacity-0 transition-all duration-200 group-hover/summary:max-h-48 group-hover/summary:border-sky-200 group-hover/summary:py-3 group-hover/summary:opacity-100">
                            {project.summary}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.links.map((link) => (
                            <a
                              key={`${project.title}-${link.url}`}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 transition hover:border-sky-300"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                        <ul className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li
                              key={`${project.title}-${tag}`}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
