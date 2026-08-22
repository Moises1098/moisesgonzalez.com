import Navbar from "@/components/Navbar"
export default function About() {
  return (
    <main>
      <Navbar variant="default" />
      <div className="mx-auto max-w-4xl px-6 py-16">

      <h1 className="text-4xl font-bold text-slate-900">
        About Me
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        Hi, I'm Moises Gonzalez.
      </p>

      <p className="mt-4 text-slate-600">
        I'm interested in engineering, design, software,
        and building things that combine the physical and digital worlds.
      </p>
      </div>
    </main>
  )
}