import Image from 'next/image'
import DeveloperImg from '@/app/assets/images/code.png'

export default function Projects() {
  return (
    <>
      <section className="max-w-4xl mx-auto pb-4 px-6">
        <h2>Projects</h2>
        <div className="flex flex-col gap-4 mt-6">
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
    </>
  )
}

const ProjectItem = () => {
  return (
    <div className="flex items-start cursor-pointer group">
      <div className="py-6">
        <p className="text-xl font-medium mb-2">Admin Dashboard</p>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum
          voluptates cum asperiores delectus sint dignissimos voluptate, facere
          sunt ad! Natus a in adipisci minima modi. Ipsum sapiente neque ullam!
        </p>
      </div>
      <div className="relative bg-red size-full rounded-2xl  overflow-hidden bg-white">
        <Image
          src={DeveloperImg}
          alt="project-img"
          className="h-48 w-full object-cover group-hover:scale-105 transition-all duration-300 sm:h-44 lg:h-44"
        />
        <div className="absolute inset-0 size-full bg-neutral-800 bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300" />
      </div>
    </div>
  )
}
