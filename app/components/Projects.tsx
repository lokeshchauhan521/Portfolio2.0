import DeveloperImg from '@/app/assets/images/developer.png'
import Image from 'next/image'

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen mx-auto w-full px-5 pt-24 lg:px-8 xl:px-[8%]"
    >
      <h2 className="text-center">Projects</h2>
      <div className="w-full overflow-x-auto mt-12 py-8 px-4">
        <div className="flex items-center gap-8 w-max">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </section>
  )
}

const ProjectItem = () => {
  return (
    <div className="w-72 flex flex-col items-center border shadow-sm rounded-xl overflow-hidden cursor-pointer hover:shadow-lg md:w-80 lg:w-96">
      <Image
        src={DeveloperImg}
        alt="project-imng"
        className="h-36 w-full object-cover bg-white md:h-44 lg:h-52"
      />
      <div className="p-6">
        <p className="text-lg font-medium">Admin Dashboard</p>
        <p className="text-base">
          I am an experienced Frontend Developer with over a decade of
          professional expertise in the field. Throughout my career, I have had
          the privilege of collaborating with prestigious organizations,
          contributing to their success and growth.
        </p>
      </div>
    </div>
  )
}
export default Projects
