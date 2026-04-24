import Link from "next/link";

import { featuredExperience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title">工作经历</h2>
        <Link
          href="/experience"
          className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-white"
        >
          更多
        </Link>
      </div>
      <div className="space-y-5">
        {featuredExperience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="group rounded-2xl border border-white/50 bg-white/50 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.role} · <span className="text-sky-600">{item.company}</span>
              </h3>
              <p className="text-sm font-medium text-slate-500">
                {item.period} · {item.location}
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-gradient-to-r from-cyan-100 to-sky-100 px-3 py-1 text-xs font-semibold text-sky-700"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
