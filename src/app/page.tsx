import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SideNav } from "@/components/SideNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_5%_5%,#ecfeff_0%,#f0f9ff_38%,#fdf4ff_100%)] text-slate-900">
      <div className="mx-auto grid max-w-6xl grid-cols-[0.8fr_1.2fr]">
        <SideNav />

        <div className="min-w-0 space-y-16 px-8 py-14 lg:px-10 lg:py-16">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
