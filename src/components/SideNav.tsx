import { navigation } from "@/data/portfolio";

const sectionIdMap: Record<string, string> = {
  我: "about",
  工作经历: "experience",
  作品集: "projects",
  联系方式: "contact",
};

export function SideNav() {
  return (
    <aside className="relative flex flex-col justify-between px-8 py-12 md:self-start lg:sticky lg:top-0 lg:h-screen lg:px-12">
      <div className="space-y-6">
        <p className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          Lumi Studio
        </p>
        <div>
          <h1 className="text-4xl font-bold leading-tight text-slate-900">糜琪琦</h1>
          <p className="mt-4 max-w-sm text-slate-600">
          正在旷野打转的人间观察家。
          </p>
          <p className="mt-4 max-w-sm text-slate-600">
          努力转行的国际组织打工人。
          </p>
        </div>
      </div>

      <nav aria-label="Section Navigation" className="hidden lg:block">
        <ul className="space-y-3">
          {navigation.map((item) => (
            <li key={item}>
              <a
                href={`#${sectionIdMap[item] ?? item}`}
                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500 transition hover:text-sky-600"
              >
                <span className="h-px w-8 bg-slate-300 transition group-hover:w-12 group-hover:bg-sky-500" />
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-sm text-slate-500">Open for freelance collaborations and product teams.</p>
    </aside>
  );
}
