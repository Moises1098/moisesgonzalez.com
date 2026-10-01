export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-[#E8EEF5]
        text-slate-950
        transition-colors
        duration-500
        dark:bg-[#071226]
        dark:text-slate-50
      "
    >
      {/* HERO */}
      <section className="px-6 pb-24 pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* PHOTO */}
          <div className="mx-auto w-full max-w-[390px]">
            <div
              className="
                aspect-[4/5]
                overflow-hidden
                rounded-[32px]
                bg-slate-950
                shadow-xl
                dark:bg-[#020817]
                dark:shadow-2xl
                dark:shadow-black/30
              "
            >
              {/* Replace this with your photo later */}
              <div className="h-full w-full bg-black" />
            </div>
          </div>

          {/* INTRODUCTION */}
          <div>
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-sky-600
                dark:text-sky-400
              "
            >
              Science • Technology • Creativity
            </p>

            <h1
              className="
                max-w-3xl
                text-5xl
                font-bold
                tracking-tight
                text-sky-800
                transition-colors
                duration-500
                md:text-6xl
                dark:text-sky-300
              "
            >
              Hi, I&apos;m Moises Gonzalez.
            </h1>

            <h2
              className="
                mt-5
                text-2xl
                font-semibold
                text-slate-800
                dark:text-slate-100
              "
            >
              Biology, web development, and creative technology.
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-700
                dark:text-slate-300
              "
            >
              I&apos;m a multidisciplinary creator with interests spanning
              science, medicine, technology, and the performing arts. I enjoy
              learning across different fields and building projects that bring
              those interests together.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="
                  rounded-full
                  bg-sky-700
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-sky-800
                  dark:bg-sky-500
                  dark:text-slate-950
                  dark:hover:bg-sky-400
                "
              >
                Explore My Work
              </a>

              <a
                href="/about"
                className="
                  rounded-full
                  border
                  border-slate-400
                  bg-white/30
                  px-6
                  py-3
                  font-semibold
                  text-slate-800
                  transition
                  hover:bg-white/60
                  dark:border-slate-600
                  dark:bg-white/5
                  dark:text-slate-100
                  dark:hover:bg-white/10
                "
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MULTIDISCIPLINARY INTRO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              Multidisciplinary by nature
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-sky-700 md:text-5xl dark:text-sky-300">
              Curiosity doesn&apos;t fit into one discipline.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              My interests may look different on the surface, but they&apos;re
              connected by the same thing: curiosity. I enjoy understanding how
              things work, creating new things, and exploring ideas from
              different perspectives.
            </p>
          </div>

          {/* INTEREST AREAS */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* SCIENCE */}
            <article
              className="
                rounded-3xl
                border
                border-white/60
                bg-white/30
                p-8
                shadow-sm
                transition-colors
                duration-500
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-black/20
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-xl font-bold text-white dark:bg-sky-500 dark:text-slate-950">
                01
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Science &amp; Medicine
              </h3>

              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                My background in biology and interest in medicine drive my
                curiosity about the human body, research, and the connections
                between different physiological systems.
              </p>
            </article>

            {/* TECHNOLOGY */}
            <article
              className="
                rounded-3xl
                border
                border-white/60
                bg-white/30
                p-8
                shadow-sm
                transition-colors
                duration-500
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-black/20
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-xl font-bold text-white dark:bg-sky-500 dark:text-slate-950">
                02
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Technology
              </h3>

              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                I enjoy building with technology through web development,
                electronics, 3D printing, and projects that combine software
                with physical design.
              </p>
            </article>

            {/* CREATIVE */}
            <article
              className="
                rounded-3xl
                border
                border-white/60
                bg-white/30
                p-8
                shadow-sm
                transition-colors
                duration-500
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-black/20
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-xl font-bold text-white dark:bg-sky-500 dark:text-slate-950">
                03
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Creative Expression
              </h3>

              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                Performing arts, music, design, and language give me different
                ways to create, communicate, and approach problems from new
                perspectives.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Selected Work
              </p>

              <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Projects
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
                A selection of things I&apos;ve designed, developed, and
                experimented with.
              </p>
            </div>

            <a
              href="/projects"
              className="font-semibold text-sky-700 transition hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
            >
              View all projects →
            </a>
          </div>

          {/* PROJECT PLACEHOLDERS */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <article
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/60
                bg-white/30
                shadow-sm
                transition-colors
                duration-500
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              <div className="aspect-[16/9] bg-slate-900 dark:bg-[#020817]" />

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Web Development
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Project Name
                </h3>

                <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                  Add a short description explaining what you built, why you
                  built it, and the technologies involved.
                </p>
              </div>
            </article>

            <article
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/60
                bg-white/30
                shadow-sm
                transition-colors
                duration-500
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              <div className="aspect-[16/9] bg-slate-900 dark:bg-[#020817]" />

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Creative Technology
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Project Name
                </h3>

                <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                  Use this space for another project that represents a different
                  side of your technical or creative work.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 pb-28 pt-20">
        <div
          className="
            mx-auto
            max-w-5xl
            rounded-[36px]
            bg-slate-900
            px-8
            py-16
            text-center
            text-white
            transition-colors
            duration-500
            md:px-16
            dark:border
            dark:border-white/10
            dark:bg-[#0B1B35]
          "
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Get in touch
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Interested in what I&apos;m working on?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Explore my work, learn more about my background, or reach out to
            connect.
          </p>

          <a
            href="/contact"
            className="
              mt-8
              inline-block
              rounded-full
              bg-white
              px-7
              py-3
              font-semibold
              text-slate-900
              transition
              hover:bg-slate-200
              dark:bg-sky-400
              dark:text-slate-950
              dark:hover:bg-sky-300
            "
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}