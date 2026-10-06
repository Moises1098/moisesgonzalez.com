import Link from "next/link";

export default function ResumeCTA() {
  return (
    <section className="px-6 pb-28 pt-20">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-[var(--cta-background)] px-8 py-16 text-center text-white md:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Keep Exploring
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          Explore more of my work.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
          Take a closer look at the projects, research interests, and work
          behind my experience.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/builds"
            className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900 transition hover:bg-slate-200 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            View Projects &amp; Builds
          </Link>

          <Link
            href="/research"
            className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </section>
  );
}