import ResumeHero from "@/components/resume/ResumeHero";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Certifications from "@/components/resume/Certifications";
import Skills from "@/components/resume/Skills";
import ResumeCTA from "@/components/resume/ResumeCTA";

export default function Resume() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <ResumeHero />
      <Education />
      <Experience />
      <Certifications />
      <Skills />
      <ResumeCTA />
    </main>
  );
}