import Link from "next/link";
import { ArrowRight } from "lucide-react";

const interests = [
  {
    number: "01",
    title: "Cardiac Electrophysiology",
    text: "Exploring the electrical activity of the heart, mechanisms underlying arrhythmias, and the physiological systems that influence cardiac rhythm.",
  },
  {
    number: "02",
    title: "Brain-Heart Interactions",
    text: "Interested in how the brain and autonomic nervous system respond to and influence changes in cardiac electrical activity.",
  },
  {
    number: "03",
    title: "Technology in Medicine",
    text: "Interested in how physiological signals, monitoring technologies, and computational tools can help us better understand complex biological systems.",
  },
];

export default function Research() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <section className="px-6 pb-20 pt-44 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-500/60" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                Research
              </p>
            </div>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
              Research is taking shape.
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-sky-700 dark:text-sky-200">
              Exploring questions at the intersection of the brain, heart, and
              the electrical systems that connect them.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              I&apos;m currently developing this section as my research
              interests continue to evolve. It will eventually document the
              questions, experiences, and projects that shape my approach to
              research in biology and medicine.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                Current Direction
              </p>

              <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                Questions I&apos;m interested in exploring.
              </h2>
            </div>

            <p className="self-end max-w-xl leading-7 text-slate-600 dark:text-slate-400">
              My interests center on understanding how electrical and
              physiological changes in one system can influence another,
              particularly across the cardiovascular and nervous systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {interests.map((interest) => (
              <article
                key={interest.number}
                className="rounded-[2rem] border border-slate-200/80 bg-white/30 p-8 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025]"
              >
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  {interest.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {interest.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {interest.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/30 px-8 py-12 md:px-12 md:py-14 dark:border-white/10 dark:bg-white/[0.025]">
            <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-[0.08] md:block">
              <svg
                width="420"
                height="140"
                viewBox="0 0 420 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 70H70L85 70L98 52L112 91L130 22L151 112L171 70H220L235 70L248 52L262 91L280 22L301 112L321 70H420"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-500"
                />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                In Progress
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
                More is coming.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                As I gain additional research experience, this page will grow
                to include projects, research experience, presentations, and
                other work.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-sky-700 transition-colors hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
              >
                Learn more about me
                <ArrowRight size={16} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}