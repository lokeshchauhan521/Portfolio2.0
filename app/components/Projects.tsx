import Link from 'next/link'
import DeveloperImg from '@/app/assets/images/developer.png'
import Image from 'next/image'
import { ArrowRightIcon } from './icons'

const Projects = () => {
  return (
    <section id="projects" className="dashboard-section">
      <h3 className="text mb-10">Projects</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
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

const ProjectItem = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="relative bg-red size-full rounded-2xl  overflow-hidden bg-white">
        <Image
          src={DeveloperImg}
          alt="project-img"
          className="h-48 w-full object-cover group-hover:scale-105 transition-all duration-300 sm:h-44 lg:h-44"
        />
        <div className="absolute inset-0 size-full bg-neutral-800 bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300" />
      </div>
      <div className="py-6">
        <p className="text-xl font-medium mb-2">Admin Dashboard</p>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum
          voluptates cum asperiores delectus sint dignissimos voluptate, facere
          sunt ad! Natus a in adipisci minima modi. Ipsum sapiente neque ullam!
        </p>
      </div>
    </div>
  )
}
// const ProjectItem = () => {
//   return (
//     <div className="w-72 flex flex-col items-center border shadow-sm rounded-xl overflow-hidden cursor-pointer hover:shadow-lg md:w-80 lg:w-96">
//       <Image
//         src={DeveloperImg}
//         alt="project-imng"
//         className="h-36 w-full object-cover bg-white md:h-44 lg:h-52"
//       />
//       <div className="p-6">
//         <p className="text-lg font-medium">Admin Dashboard</p>
//         <p className="text-base">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum
//           voluptates cum asperiores delectus sint dignissimos voluptate, facere
//           sunt ad! Natus a in adipisci minima modi. Ipsum sapiente neque ullam!
//         </p>
//       </div>
//     </div>
//   )
// }
export default Projects
