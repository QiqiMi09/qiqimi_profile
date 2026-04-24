import Link from "next/link";

import { experience } from "@/data/portfolio";

export default function ExperiencePage() {
  const fullTimeExperience = experience.filter(
    (item) => item.role === "项目传播顾问" || item.role === "传播与研究顾问",
  );
  const internshipExperience = experience.filter(
    (item) => item.role !== "项目传播顾问" && item.role !== "传播与研究顾问",
  );

  const renderExperienceCards = (items: typeof experience) =>
    items.map((item) => (
      <article
        key={`${item.company}-${item.period}`}
        className="rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">
            {item.role} · <span className="text-sky-600">{item.company}</span>
          </h2>
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
              key={`${item.company}-${tech}`}
              className="rounded-full bg-gradient-to-r from-cyan-100 to-sky-100 px-3 py-1 text-xs font-semibold text-sky-700"
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
    ));

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_5%_5%,#ecfeff_0%,#f0f9ff_38%,#fdf4ff_100%)] px-6 py-12 text-slate-900 lg:px-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900">工作经历</h1>
         
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-white"
          >
            返回首页
          </Link>
        </div>

        <section className="space-y-8">
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">工作经历</h2>
            {renderExperienceCards(fullTimeExperience)}
          </div>
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">实习经历</h2>
            {renderExperienceCards(internshipExperience)}
          </div>
        </section>
      </div>
    </main>
  );
}
