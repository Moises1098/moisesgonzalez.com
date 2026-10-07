import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

type OriginalProjectProps = {
  title: string;
  description: string;
  projectPath: string;
  githubUrl: string;
};

export default function OriginalProject({
  title,
  description,
  projectPath,
  githubUrl,
}: OriginalProjectProps) {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 text-[var(--foreground)] md:pt-36">
      <section className="px-4 pb-6 md:px-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-4 flex flex-col gap-5 rounded-[1.5rem] border border-slate-200/80 bg-white/40 p-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-6 dark:border-white/10 dark:bg-white/[0.035]">
            <div className="flex items-start gap-4">
              <Link
                href="/builds#originals"
                aria-label="Back to builds"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                <ArrowLeft size={17} strokeWidth={1.8} />
              </Link>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                  UCSD Coding Boot Camp · Original
                </p>

                <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 md:text-2xl dark:text-white">
                  {title}
                </h1>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                GitHub
                <ExternalLink size={14} strokeWidth={1.8} />
              </Link>

              <Link
                href={projectPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
              >
                Open Full Page
                <ExternalLink size={14} strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white dark:border-white/10">
            <iframe
              src={projectPath}
              title={`${title} original project`}
              className="h-[calc(100dvh-14rem)] min-h-[650px] w-full border-0 bg-white"
            />
          </div>

          <p className="py-4 text-center text-xs text-slate-400 dark:text-slate-500">
            Preserved in its original form from the UC San Diego Coding Boot
            Camp.
          </p>
        </div>
      </section>
    </main>
  );
}