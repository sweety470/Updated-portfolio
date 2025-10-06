import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2025 Sweety Goel. All rights reserved.</p>
          <p className="text-primary-foreground/80">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}