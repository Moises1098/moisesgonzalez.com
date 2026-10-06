import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { education } from "@/data/resume";

export default function Education() {
    return (
        <section className="px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-12">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                    Education
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                    Academic background.
                </h2>

                <div className="mt-12">
                    {education.map((item) => (
                        <article
                            key={`${item.school}-${item.date}`}
                            className="border-t border-slate-300/70 py-9 dark:border-white/10"
                        >
                            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:gap-10">
                                <div>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                                        >
                                            {(() => {
                                                const words = item.school.split(" ");
                                                const lastWord = words.pop();
                                                const schoolStart = words.join(" ");

                                                return (
                                                    <>
                                                        {schoolStart}{" "}
                                                        <span className="whitespace-nowrap">
                                                            {lastWord}
                                                            <ExternalLink
                                                                size={14}
                                                                strokeWidth={1.75}
                                                                aria-hidden="true"
                                                                className="ml-1.5 inline-block align-[-1px]"
                                                            />
                                                        </span>
                                                    </>
                                                );
                                            })()}
                                        </Link>

                                        <span className="text-sm font-medium text-slate-500 md:hidden dark:text-slate-400">
                                            {item.date}
                                        </span>
                                    </div>

                                    {item.schoolDetails?.map((detail) => (
                                        <p
                                            key={detail}
                                            className="mt-2 text-base font-medium text-slate-600 dark:text-slate-400"
                                        >
                                            {detail}
                                        </p>
                                    ))}

                                    <div className="mt-7 space-y-6">
                                        {item.degrees.map((degree) => (
                                            <div key={`${degree.name}-${degree.emphasis ?? ""}`}>
                                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                                    {degree.name}
                                                </h3>

                                                {degree.emphasis && (
                                                    <p className="mt-1 text-base font-medium text-slate-500 dark:text-slate-400">
                                                        Emphasis in {degree.emphasis}
                                                    </p>
                                                )}

                                                {degree.details?.map((detail) => (
                                                    <p
                                                        key={detail}
                                                        className="mt-3 leading-7 text-slate-600 dark:text-slate-400"
                                                    >
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                    {item.academicCredentials?.map((credential) => (
                                        <div
                                            key={credential}
                                            className="mt-7 border-l-2 border-sky-400/60 pl-4"
                                        >
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
                                                Academic Certification
                                            </p>

                                            <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">
                                                {credential}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p className="hidden whitespace-nowrap text-sm font-medium text-slate-500 md:block dark:text-slate-400">
                                    {item.date}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}