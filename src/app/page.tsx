export default function Home() {
  return (
    <main>
      <section className="min-h-screen px-6 pt-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-3 items-center gap-12">
          {/* Image — 1/3 */}
          <div className="h-[300px] w-full bg-black">
          </div>

          {/* Text — 2/3 */}
          <div className="col-span-2">
            <h1 className="text-5xl font-bold tracking-tight text-sky-800">
              Hi, I'm Moises Gonzalez.
            </h1>

            <p className="mt-4 text-xl text-black dark:text-slate-900">
              Welcome To My Portfolio Website
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl text-lg dark:text-slate-900">
          <h2 className="text-3xl font-bold text-sky-600 tracking-tight">Curiosity doesn't fit into one discipline.</h2>
          <p className="mt-2 text-lg text-black dark:text-slate-900 tracking-tight" >
            I'm a curious, well-rounded individual with interests ranging from the performing arts and creative expression to science, medicine, and web development. I enjoy exploring different fields, learning new skills and languages, and finding connections between things that might seem unrelated.</p>
        </div>
      </section>


    </main>
  )
}