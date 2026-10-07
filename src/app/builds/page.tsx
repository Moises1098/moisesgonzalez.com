"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useMotionValue } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Builds() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <section className="px-6 pb-20 pt-44 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Builds
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Ideas, experiments, and things I&apos;ve built.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A collection of current projects, ideas I&apos;ve returned to, and
            earlier work that shows how my approach to building has evolved.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            number="01"
            label="Currently Building"
            title="Ideas taking shape."
            description="Projects that are actively being developed, explored, and refined."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <CurrentBuild
              images={[
                "/currentbuilds/storefront/home.png",
                "/currentbuilds/storefront/shop.png",
              ]}
              title="Project Title"
              caption="Web Development · In Development"
              description="An online storefront currently in development for custom 3D-printed signs, combining colorful PETG designs with addressable LED lighting for a more personalized and vibrant experience."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            number="02"
            label="Revisited"
            title="Old ideas, new perspective."
            description="Earlier projects revisited with new skills, better solutions, and a few years of perspective."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <RevisitedBuild
              image="/builds/placeholder-revisited.jpg"
              title="Code Quiz V2"
              year="2026"
              description="A modernized version of an earlier coding project, revisited to improve its functionality, interface, and implementation."
              projectHref="#"
              githubHref="#"
              originalHref="/builds/originals/code-quiz"
            />

            <RevisitedBuild
              image="/builds/placeholder-revisited.jpg"
              title="Project V2"
              year="2026"
              description="Another older project revisited using the skills and perspective I've developed since originally building it."
              projectHref="#"
              githubHref="#"
              originalHref="#originals"
            />
          </div>
        </div>
      </section>

      <section
        id="originals"
        className="scroll-mt-28 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            number="03"
            label="Originals"
            title="Where it started."
            description="Early projects created during my UC San Diego Coding Boot Camp and preserved in their original form. They reflect my skills and approach to development at the time they were built."
          />

          <div className="mt-12 divide-y divide-slate-300/70 border-y border-slate-300/70 dark:divide-white/10 dark:border-white/10">
            <OriginalBuild
              title="Professional Portfolio"
              year="2022"
              label="UCSD Coding Boot Camp · Original"
              technologies="HTML · CSS · Responsive Design"
              description="An early professional portfolio built to showcase projects while exploring responsive layouts, Flexbox, media queries, and CSS variables."
              projectHref="/builds/originals/professional-portfolio"
              githubHref="https://github.com/Moises1098/Professional-Portfolio"
            />

            <OriginalBuild
              title="Code Quiz"
              year="2022"
              label="UCSD Coding Boot Camp · Original"
              technologies="HTML · CSS · JavaScript · Web APIs"
              description="A timed coding quiz with multiple-choice questions, time penalties for incorrect answers, and a locally stored high-score system."
              projectHref="/builds/originals/code-quiz"
              githubHref="https://github.com/Moises1098/Code-Quiz"
            />

            <OriginalBuild
              title="Weather Dashboard"
              year="2022"
              label="UCSD Coding Boot Camp · Original"
              technologies="HTML · CSS · JavaScript · APIs"
              description="A weather dashboard for searching cities and viewing current conditions and forecasts, with previous searches saved for quick access."
              projectHref="/builds/originals/weather-dashboard"
              githubHref="https://github.com/Moises1098/Weather-Dashboard"
            />
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-[2rem] border border-slate-200/80 bg-white/30 p-7 md:flex-row md:items-center md:justify-between md:p-8 dark:border-white/10 dark:bg-white/[0.025]">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Explore my early builds
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                These projects were created during my 2022 UC San Diego Coding
                Boot Camp and are preserved as part of my development history.
                More of my early work can be found on GitHub.
              </p>
            </div>

            <Link
              href="https://github.com/Moises1098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              View GitHub
              <ExternalLink size={15} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
            {number}
          </span>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            {label}
          </p>
        </div>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
          {title}
        </h2>
      </div>

      <p className="self-end leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

function CurrentBuild({
  images,
  title,
  caption,
  description,
}: {
  images: string[];
  title: string;
  caption: string;
  description: string;
}) {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  function getWidth() {
    return carouselRef.current?.offsetWidth ?? 0;
  }

  function goToImage(index: number) {
    const width = getWidth();

    setCurrent(index);

    animate(x, -index * width, {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    });
  }

  function handleDragEnd() {
    const width = getWidth();

    if (!width) return;

    const restingPosition = -current * width;
    const distance = x.get() - restingPosition;
    const threshold = width * 0.15;

    if (distance < -threshold && current < images.length - 1) {
      goToImage(current + 1);
      return;
    }

    if (distance > threshold && current > 0) {
      goToImage(current - 1);
      return;
    }

    goToImage(current);
  }

  return (
    <article>
      <div
        ref={carouselRef}
        className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-white/5"
      >
        <motion.div
          drag="x"
          dragMomentum={false}
          style={{ x }}
          onDragEnd={handleDragEnd}
          className="flex h-full cursor-grab touch-pan-y active:cursor-grabbing"
        >
          {images.map((image, index) => (
            <div
              key={image}
              className="h-full w-full shrink-0 select-none bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${image}")` }}
              role="img"
              aria-label={`${title} preview ${index + 1}`}
            />
          ))}
        </motion.div>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-md">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToImage(index)}
              aria-label={`View image ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-opacity duration-200 ${
                current === index
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-1 pt-6">
        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
          {caption}
        </p>

        <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </article>
  );
}

function RevisitedBuild({
  image,
  title,
  year,
  description,
  projectHref,
  githubHref,
  originalHref,
}: {
  image: string;
  title: string;
  year: string;
  description: string;
  projectHref: string;
  githubHref: string;
  originalHref: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/35 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="aspect-[16/9] overflow-hidden bg-slate-200/60 dark:bg-white/5">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url("${image}")` }}
        />
      </div>

      <div className="p-7 md:p-8">
        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
          {year} · Revisited
        </p>

        <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={projectHref}
            className="inline-flex items-center gap-2 font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
          >
            View Project
            <ArrowRight size={15} strokeWidth={1.8} />
          </Link>

          <Link
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            GitHub
            <ExternalLink size={14} strokeWidth={1.8} />
          </Link>

          <Link
            href={originalHref}
            className="inline-flex items-center gap-1.5 font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            View Original
            <ArrowRight size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function OriginalBuild({
  title,
  year,
  label,
  technologies,
  description,
  projectHref,
  githubHref,
}: {
  title: string;
  year: string;
  label: string;
  technologies: string;
  description: string;
  projectHref: string;
  githubHref: string;
}) {
  return (
    <article className="grid gap-6 py-8 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-10">
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
          {year}
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
          {technologies}
        </p>

        <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-5 md:justify-end">
        <Link
          href={projectHref}
          aria-label={`View ${title}`}
          title="View original project"
          className="inline-flex items-center gap-1.5 font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
        >
          View
          <ArrowRight size={16} strokeWidth={1.8} />
        </Link>

        <Link
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub`}
          title="View source on GitHub"
          className="inline-flex items-center gap-1.5 font-medium text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
        >
          GitHub
          <ExternalLink size={14} strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}