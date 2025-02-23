'use client'
import { useState } from 'react'
import Link from 'next/link'
import LudoDark from '@/app/assets/images/LudoDark.webp'
import LudoLight from '@/app/assets/images/LudoLight.webp'
import BusDark from '@/app/assets/images/busDark.webp'
import BusLight from '@/app/assets/images/busLight.webp'
import foodLight from '@/app/assets/images/foodLight.webp'
import foodDark from '@/app/assets/images/foodDark.webp'
import Image, { StaticImageData } from 'next/image'
import { ArrowRightIcon } from '@/app/components/icons'
import { useAppSelector, useMounted } from '@/lib/hooks'

type Project = {
  imgPath: StaticImageData
  name: string
  description: string
}




const Projects = () => {
  const theme = useAppSelector((state) => state.theme.theme)
  const mounted = useMounted()
  const [isExpanded, setIsExpanded] = useState(false)
  if (!mounted) return;
  const projects: Project[] = [
    {
      imgPath: theme !== 'light' ? LudoLight : LudoDark,
      name: 'Ludo Multiplayer',
      description: 'An engaging online multiplayer board game that allows players to connect and compete in real time. Featuring smart matchmaking, in-game chat, and a fair play system, the game ensures a smooth and immersive experience with scalable backend support for handling multiple concurrent users.',
    },
    {
      imgPath: theme !== 'light' ? BusLight : BusDark,
      name: 'Bus Tracking Application',
      description: 'A mobile application designed for real-time bus tracking and route management. Users can check live bus locations, estimated arrival times, and receive notifications about delays. The app provides a seamless experience for commuters while enabling transport operators to manage fleets and schedules efficiently.',
    },
    {
      imgPath: theme !== 'light' ? foodLight : foodDark,
      name: 'Food Delivery Ecommerce Application',
      description: 'A web-based food delivery platform that connects users with a variety of restaurants. Customers can browse menus, place orders, and track deliveries in real time. The app offers a smooth checkout experience, multiple payment options, and restaurant management tools for efficient order handling and timely deliveries.',
    },
  ];
  
  
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
        <p className="text-base">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default Projects
