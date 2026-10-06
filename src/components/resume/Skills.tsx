import {
  technicalSkills,
  laboratorySkills,
  languages,
} from "@/data/resume";

export default function Skills() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          Skills
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Skills &amp; tools.
        </h2>

        <div className="mt-12 grid gap-14 md:grid-cols-2">
          <SkillGroup
            title="Computational & Technical"
            skills={technicalSkills}
          />

          <SkillGroup
            title="Laboratory"
            skills={laboratorySkills}
          />
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold">Languages</h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((language) => (
              <div
                key={language}
                className="flex items-center justify-center rounded-full border border-slate-300/80 px-4 py-2 text-center text-sm font-medium text-slate-700 dark:border-white/10 dark:text-slate-300"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>

      <div className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}