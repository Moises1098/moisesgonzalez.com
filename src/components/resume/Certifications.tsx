import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/resume";

export default function Certifications() {
    return (
        <section className="px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-12">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                    Certifications
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                    Training &amp; credentials.
                </h2>

                <div className="mt-12">
                    {certifications.map((item) => (
                        <article
                            key={item.name}
                            className="border-t border-slate-300/70 py-7 dark:border-white/10"
                        >
                            <div className="grid gap-3 md:grid-cols-[1fr_auto] md:gap-10">
                                <div>
                                    {/* Certification name + mobile date */}
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                                        >
                                            {(() => {
                                                const words = item.name.split(" ");
                                                const lastWord = words.pop();
                                                const nameStart = words.join(" ");

                                                return (
                                                    <>
                                                        {nameStart}{" "}
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

                                        {/* Mobile only */}
                                        <span className="text-sm font-medium text-slate-500 md:hidden dark:text-slate-400">
                                            {item.date}
                                        </span>
                                    </div>

                                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                                        {item.organization}
                                    </p>

                                    {item.description && (
                                        <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.expires && (
                                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                                            Expires {item.expires}
                                        </p>
                                    )}
                                </div>

                                {/* Desktop / XL only */}
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