import Link from 'next/link'
import CodeImg from '@/app/assets/images/code.png'
import Image, { StaticImageData } from 'next/image'
import { ArrowRightIcon } from './icons'

type Project = {
  imgPath: StaticImageData
  name: string
  description: string
}

const projects: Project[] = [
  {
    imgPath: CodeImg,
    name: 'Ludo Multiplayer',
    description: '',
  },
  {
    imgPath: CodeImg,
    name: 'Bus Tracking Application',
    description: '',
  },
  {
    imgPath: CodeImg,
    name: 'Food Delivery Ecommerce Application',
    description: '',
  },
  // {
  //   imgPath: CodeImg,
  //   name: 'Pet Adopt and Finder',
  //   description: '',
  // },
]

const Projects = () => {
  return (
    <section id="projects" className="dashboard-section">
      <h3 className="mb-10">Projects</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
      <div className="flex-center">
        <Link href="/projects" className="btn-primary px-16 mt-12">
          All Projects
          <ArrowRightIcon className="size-6 fill-white dark:fill-dark" />
        </Link>
      </div>
    </section>
  )
}

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="relative bg-red size-full rounded-2xl  overflow-hidden bg-white">
        <Image
          src={project.imgPath}
          alt="project-img"
          className="h-48 w-full object-cover group-hover:scale-105 transition-all duration-300 sm:h-44 lg:h-44"
        />
        <div className="absolute inset-0 size-full bg-neutral-800 bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300" />
      </div>
      <div className="py-6">
        <p className="text-xl font-medium line-clamp-1 mb-2">{project.name}</p>
        <p className="text-base line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum
          voluptates cum asperiores delectus sint dignissimos voluptate, facere
          sunt ad! Natus a in adipisci minima modi. Ipsum sapiente neque ullam!
        </p>
      </div>
    </div>
  )
}

export default Projects
