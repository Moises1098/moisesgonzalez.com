import { Download } from "lucide-react";

export default function ResumeHero() {
  return (
    <section className="px-6 pb-10 pt-44 md:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <a
          href="/Moises-Gonzalez-Resume.pdf"
          download
          aria-label="Download PDF resume"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 dark:border-cyan-400/25 dark:bg-cyan-400/5 dark:text-cyan-400 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10"
        >
          Resume
          <Download size={16} strokeWidth={1.8} />
        </a>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-800 md:text-6xl dark:text-sky-200">
          Education &amp; Experience.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          An overview of my academic background, clinical and research
          experience, technical skills, and training.
        </p>
      </div>
    </section>
  );
}