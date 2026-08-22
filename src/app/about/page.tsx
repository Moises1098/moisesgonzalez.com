import Navbar from "@/components/Navbar"
export default function About() {
  return (
    <main>
      <Navbar variant="default" />
      <div className="mx-auto max-w-4xl px-6 py-16">

      <h1 className="text-4xl font-bold text-slate-900">
        About Me
      </h1>

      <p className="mt-6 text-lg text-slate-700">
      <strong className="font-bold tracking-tight">I'm someone who enjoys learning across disciplines and exploring where different interests intersect. </strong> 
      I have a strong curiosity for both creative and technical fields. My interests range from the performing arts, 
      including dance, aerial circus arts, music, piano, singing, and performance, to science, medicine, web development, and languages.
      </p>

      <p className="mt-4 text-lg text-slate-700">
       My Background has given me a unique perspective on the world, opportunities to explore both creative and technical fields, 
       and I enjoy exploring how different fields can inform and inspire one another. Over time, I have found my self drawn to various 
       activities that allow me to learn, create, and problen-solve in different ways. These experiences have helped me develop a diverse 
       skill set and have shaped the way I approach new challenges, while influencing the things I choose to learn. I enjoy learning by doing—whether 
       that's building a website, developing a new skill, or studying a subject that interests me. Although I do have a strong focused goal of becoming 
       a physician one day, I do enjoy going down different rabbit holes as well. If I discover a new intrest or skill I will often spend time learning 
       about it, and find ways to incorporate into other subjects by finding similarites and connections between them. This approach allows me to devlop 
       a deeper understanding and build on top of my existing knowledge, while enjoying the process.
      </p>

      <p className="mt-4 text-lg text-slate-700">
       I believe that learning is a lifelong journey, and I am always seeking new opportunities to build on my knowledge and skills. I have had the privilege
       of learning from a variety of mentors and teachers, and I am grateful for the guidance and support they have provided me along the way. It may seem that 
       I have a lot of different interests, but I believe that they all contribute to my growth and development to become a well-rounded individual and a better 
       physician in the future. I am excited to continue exploring new areas of interest and to see where my curiosity takes me next.
      </p>
      </div>
    </main>
  )
}