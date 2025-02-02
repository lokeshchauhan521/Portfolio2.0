import DeveloperImg from '@/app/assets/images/developer.png'
import Image from 'next/image'
import { ArrowRightIcon, DownloadIcon } from './icons'

const Experience = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-screen w-11/12 max-w-3xl mx-auto text-center">
      <Image src={DeveloperImg} alt="profile_pic" className="size-32" />
      <p className="text-xl">Hi! I am Deepak Chaurasiya 👋🏻</p>
      <p className="text-4xl">frontend web developer based in London.</p>
      <p className="text-lg">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="flex items-center gap-4 max-sm:flex-col">
        <a href="#contact" className="btn-primary">
          Connect With Me <ArrowRightIcon className="size-6 fill-white" />
        </a>
        <a href="/resume.pdf" download className="btn-outlined-light">
          My Resume <DownloadIcon className="size-6" />
        </a>
      </div>
    </div>
  )
}

export default Experience
