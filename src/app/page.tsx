"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useMotionValue } from "motion/react";

const interests = [
  {
    number: "01",
    title: "Science & Medicine",
    text: "My background in biology and interest in medicine drive my curiosity about the human body, research, and the connections between different physiological systems.",
  },
  {
    number: "02",
    title: "Technology",
    text: "I enjoy building with technology through web development, small electronics, 3D printing, and projects that combine software with some physical design.",
  },
  {
    number: "03",
    title: "Creative Expression",
    text: "Performing arts, music, design, and language give me different ways to create, communicate, and approach problems from new perspectives.",
  },
];

const projects = [
  {
    category: "Web Development · In Development",
    title: "Project Title",
    text: "An online storefront currently in development for custom 3D-printed signs, combining colorful PETG designs with addressable LED lighting for a more personalized and vibrant experience.",
    images: [
      "/currentbuilds/storefront/home.png",
      "/currentbuilds/storefront/shop.png",
    ],
  },
];

const card =
  "rounded-3xl border border-slate-200/80 bg-white/30 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/20";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <section className="px-6 pb-28 pt-44 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:gap-16 md:text-left">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                Science • Technology • Creativity
              </p>

              <h1 className="text-5xl font-bold tracking-tight text-slate-900 transition-colors duration-500 md:text-6xl lg:text-7xl dark:text-white">
                Hi, I&apos;m Moises Gonzalez.
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-sky-700 dark:text-sky-200">
                Biology, web development, and creative technology.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:mx-0 dark:text-slate-400">
                From a young age, I've had a creative mind and an affinity for learning and creating. I have interests spanning science,
                medicine, technology, and the performing arts. I enjoy
                researching and learning across different fields and building,
                that build and compliment each other. I am currently pursuing a
                career in medicine while also exploring my interests in web
                development and creative technology.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="/builds"
                  className="rounded-full bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
                >
                  Explore My Work
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-slate-300 bg-white/20 px-6 py-3 font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-700 dark:border-white/15 dark:bg-white/[0.035] dark:text-slate-200 dark:hover:border-sky-300/60 dark:hover:text-sky-200"
                >
                  About Me
                </Link>
              </div>
            </div>

            <div className="order-first shrink-0 md:order-last">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full sm:h-40 sm:w-40 md:h-65 md:w-65 lg:h-75 lg:w-75">
                <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-xl dark:bg-sky-300/10" />

                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-sky-500/40 bg-slate-900 shadow-xl ring-1 ring-sky-400/10 dark:bg-[#020817] dark:shadow-black/30">
                  <img
                    src="/home/Profile.png"
                    alt="Moises Gonzalez"
                    className="h-full w-full -translate-y-[4.5px] scale-[1.7] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Multidisciplinary by nature
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              Curiosity doesn&apos;t fit into one discipline.
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg italic leading-8 text-slate-600 dark:text-slate-400">
              &ldquo;Curiosity killed the cat, but satisfaction brought it
              back.&rdquo;
            </p>

            <Link
              href="https://www.phrases.org.uk/meanings/curiosity-killed-the-cat.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-500 dark:hover:text-sky-300"
            >
              — The Titusville Herald, 1912
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {interests.map((interest) => (
              <article key={interest.number} className={`${card} p-8`}>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-xl font-bold text-white dark:bg-sky-300 dark:text-slate-950">
                  {interest.number}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
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

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                Selected Work
              </p>

              <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Projects
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                A selection of things I&apos;ve designed, developed, and
                experimented with.
              </p>
            </div>

            <Link
              href="/builds"
              className="font-semibold text-sky-700 transition hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <FeaturedProject
                key={project.title}
                category={project.category}
                title={project.title}
                text={project.text}
                images={project.images}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FeaturedProject({
  images,
  title,
  category,
  text,
}: {
  images: string[];
  title: string;
  category: string;
  text: string;
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
    <article className={`${card} overflow-hidden`}>
      <div
        ref={carouselRef}
        className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/[0.035]"
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

      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
          {text}
        </p>
      </div>
    </article>
  );
}