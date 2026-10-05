import Link from "next/link";

const photos = [
  {
    src: "/about-1.jpg",
    alt: "About me photo 1",
    className:
      "relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-xl transition duration-300 -rotate-3 hover:z-50 hover:rotate-0 hover:scale-105 dark:border-[var(--background)]",
  },
  {
    src: "/about-2.jpeg",
    alt: "About me photo 2",
    className:
      "relative z-20 -ml-5 translate-y-3 aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-xl transition duration-300 rotate-2 hover:z-50 hover:rotate-0 hover:scale-105 dark:border-[var(--background)]",
  },
  {
    src: "/about-3.jpg",
    alt: "About me photo 3",
    className:
      "relative z-10 -ml-5 -translate-y-2 aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-xl transition duration-300 -rotate-2 hover:z-50 hover:rotate-0 hover:scale-105 dark:border-[var(--background)]",
  },
  {
    src: "/about-4.jpg",
    alt: "About me photo 4",
    className:
      "relative z-20 -mt-4 ml-3 aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-xl transition duration-300 rotate-2 hover:z-50 hover:rotate-0 hover:scale-105 dark:border-[var(--background)]",
  },
  {
    src: "/about-5.jpg",
    alt: "About me photo 5",
    className:
      "relative z-30 -ml-3 -mt-1 aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-xl transition duration-300 -rotate-2 hover:z-50 hover:rotate-0 hover:scale-105 dark:border-[var(--background)]",
  },
  {
    src: "/about-6.jpeg",
    alt: "About me photo 6",
    className:
      "relative z-20 -ml-5 -mt-4 aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-xl transition duration-300 rotate-3 hover:z-50 hover:rotate-0 hover:scale-105 dark:border-[var(--background)]",
    imageClassName:
      "h-full w-full object-cover scale-125 transition duration-300 hover:scale-100",
  },
];

const interests = [
  {
    number: "01",
    title: "Science & Medicine",
    text: "Biology and medicine give me a way to explore how the human body works and how different physiological systems interact. Medicine is also central to my long-term professional goals.",
  },
  {
    number: "02",
    title: "Technology",
    text: "Web development and technology let me turn ideas into things I can actually build. I especially enjoy learning through projects and solving problems as they appear.",
  },
  {
    number: "03",
    title: "Creative Expression",
    text: "Dance, aerial arts, music, singing, and performance give me different ways to create and communicate while continually challenging me to develop new skills.",
  },
];

const card =
  "rounded-3xl border border-white/60 bg-white/30 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]";

export default function Aboutme() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <section className="px-6 pb-24 pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16">
            <div className="mx-auto max-w-3xl text-center xl:mx-0 xl:max-w-none xl:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                About Me
              </p>

              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-sky-800 md:text-6xl dark:text-sky-300">
                Curiosity has never fit into one discipline.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700 xl:mx-0 dark:text-slate-300">
                I&apos;m someone who enjoys learning across disciplines and
                exploring where different interests intersect. I&apos;m curious
                about both creative and technical fields, from science,
                medicine, and web development to dance, aerial circus arts,
                music, performance, and languages.
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700 xl:mx-0 dark:text-slate-300">
                While these interests may seem very different on the surface, I
                enjoy finding the similarities and connections between them.
                That process has shaped how I learn, create, and approach new
                challenges.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 xl:justify-start">
                <Link
                  href="/projects"
                  className="rounded-full bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                >
                  Explore My Work
                </Link>

                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="rounded-full border border-slate-400 bg-white/30 px-6 py-3 font-semibold text-slate-800 transition hover:bg-white/60 dark:border-slate-600 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  View Resume
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[620px]">
              <div className="grid grid-cols-2 items-center justify-center gap-y-2 sm:grid-cols-3 sm:gap-y-0">
                {photos.map((photo) => (
                  <div key={photo.src} className={photo.className}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={
                        photo.imageClassName ??
                        "h-full w-full object-cover"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              Where My Interests Meet
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              Different fields. One curiosity.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              I&apos;ve been drawn to different subjects throughout my life,
              but each gives me another way to understand, create, communicate,
              or solve problems.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {interests.map((interest) => (
              <article key={interest.number} className={card}>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-xl font-bold text-white dark:bg-sky-500 dark:text-slate-950">
                  {interest.number}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {interest.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                  {interest.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            My Story
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Learning by doing.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
            <p>
              My background has given me opportunities to explore both creative
              and technical fields, and I&apos;ve found myself drawn to
              activities that allow me to learn, create, and problem-solve in
              different ways. Those experiences have helped me develop a
              diverse skill set and have shaped how I approach new challenges.
            </p>

            <p>
              I learn best by doing. Whether I&apos;m building a website,
              developing a new skill, or studying a subject that interests me,
              I like going beyond simply understanding an idea and finding a
              way to work with it.
            </p>

            <p>
              Although I have a focused long-term goal of becoming a physician,
              I also enjoy going down different rabbit holes. When I discover a
              new interest or skill, I often spend time learning about it and
              looking for ways it connects to things I already know. Those
              connections help me build a deeper understanding while keeping
              the process of learning interesting.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 rounded-[36px] border border-white/60 bg-white/30 p-8 shadow-sm md:p-12 lg:grid-cols-[0.7fr_1.3fr] dark:border-white/10 dark:bg-white/[0.04]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              How I Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Always building on what came before.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
            <p>
              I believe learning is a lifelong journey, and I&apos;m always
              looking for opportunities to build on my knowledge and skills.
              I&apos;ve had the privilege of learning from many mentors and
              teachers, and I&apos;m grateful for the guidance and support
              they&apos;ve provided along the way.
            </p>

            <p>
              I may have a wide range of interests, but I see them as parts of
              the same process. Each one gives me another perspective,
              challenges me in a different way, and contributes to the person
              and future physician I hope to become.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-20">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-slate-900 px-8 py-16 text-center text-white md:px-16 dark:border dark:border-white/10 dark:bg-[#0B1B35]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Keep Exploring
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            See what I&apos;ve been working on.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Explore the projects and experiences that bring together the
            different sides of my background.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900 transition hover:bg-slate-200 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
            >
              View Projects
            </Link>

            <Link
              href="/experience"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              My Experience
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}