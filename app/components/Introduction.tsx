import DeveloperImg from '@/app/assets/images/developer.png'
import Image from 'next/image'
import { ArrowRightIcon, DownloadIcon } from './icons'

const Introduction = () => {
  return (
    <div className="pt-32 pb-12 flex flex-col items-center gap-5 w-11/12 max-w-3xl mx-auto text-center">
      <Image src={DeveloperImg} alt="profile_pic" className="size-32" />
      <h1 className="mt-2">
        Hello, <br /> I&apos;m Deepak.
      </h1>
      <p className="text-2xl leading-9 text-light">
        Software Engineer | Building Scalable <br />& Efficient Software
      </p>
      {/* <p>Building Scalable & Efficient Software</p> */}
      {/* <p className="text-lg">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p> */}
      <div className="flex items-center gap-4 py-8 max-sm:flex-col">
        <a href="#contact" className="btn-primary">
          Connect
          <ArrowRightIcon className="size-6 fill-white dark:fill-dark" />
        </a>
        <a href="/resume.pdf" download className="btn-outline-primary">
          Resume <DownloadIcon className="size-6" />
        </a>
      </div>
    </div>
  )
}

export default Introduction
