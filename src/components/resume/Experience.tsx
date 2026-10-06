import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { experience } from "@/data/resume";

export default function Experience() {
    return (
        <section className="px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-12">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                    Clinical &amp; Research
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                    Experience.
                </h2>

                <div className="mt-12">
                    {experience.map((item) => (
                        <article
                            key={`${item.organization}-${item.role}`}
                            className="border-t border-slate-300/70 py-10 dark:border-white/10"
                        >
                            <div className="md:grid md:grid-cols-[1fr_auto] md:gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {item.role}
                                    </h3>

                                    <p className="mt-2">
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                                        >
                                            {item.organization}

                                            {item.organizationEnd ? (
                                                <>
                                                    {" "}
                                                    <span className="whitespace-nowrap">
                                                        {item.organizationEnd}
                                                        <ExternalLink
                                                            size={14}
                                                            strokeWidth={1.75}
                                                            aria-hidden="true"
                                                            className="ml-1.5 inline-block align-[-1px]"
                                                        />
                                                    </span>
                                                </>
                                            ) : (
                                                <ExternalLink
                                                    size={14}
                                                    strokeWidth={1.75}
                                                    aria-hidden="true"
                                                    className="ml-1.5 inline-block align-[-1px]"
                                                />
                                            )}
                                        </Link>
                                    </p>

                                    <ul className="mt-5 max-w-3xl space-y-3 text-slate-600 dark:text-slate-400">
                                        {item.bullets.map((bullet) => (
                                            <li
                                                key={bullet}
                                                className="flex gap-3 leading-7"
                                            >
                                                <span
                                                    className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                                                    aria-hidden="true"
                                                />

                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="mt-6 text-sm font-medium text-slate-500 md:hidden dark:text-slate-400">
                                        {item.date}
                                    </p>
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