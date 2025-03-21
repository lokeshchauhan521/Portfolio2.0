import DeveloperImg from '@/app/assets/images/developer.jpeg'
import Image from 'next/image'
import { ArrowRightIcon, DownloadIcon } from './icons'

const Introduction = () => {
  return (
    <section className="dashboard-section flex flex-col items-center gap-5 text-center max-sm:pt-8">
      <Image src={DeveloperImg} alt="profile_pic" className="size-32 rounded-full mt-[-100px]" />
      <h1 className="mt-2">
        Hello 👋 <br /> I&apos;m Lokesh.
      </h1>
      <p className="text-2xl leading-9 text-light">
      Software Engineer | Crafting Scalable <br/>& High-Performance Solutions
      </p>
      <div className="flex items-center gap-4 py-8 max-sm:flex-col">
        <a href="#contact" className="btn-primary">
          Connect
          <ArrowRightIcon className="size-6 fill-white dark:fill-dark" />
        </a>
        <a href="/lokeshresume.pdf" download className="btn-outline-primary">
          Resume <DownloadIcon className="size-6" />
        </a>
      </div>
    </section>
  )
}

export default Introduction
