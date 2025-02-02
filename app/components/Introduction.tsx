import DeveloperImg from '@/app/assets/images/developer.png'
import Image from 'next/image'
import { ArrowRightIcon, DownloadIcon } from './icons'

const Introduction = () => {
  return (
    <div className="mt-24 flex flex-col items-center gap-5 min-h-screen w-11/12 max-w-3xl mx-auto text-center">
      <Image src={DeveloperImg} alt="profile_pic" className="size-32" />
      <h1 className="">
        Hello, <br /> I&apos;m Deepak.
      </h1>
      <p className="text-2xl">Software engineer based in India.</p>
      {/* <p className="text-lg">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p> */}
      <div className="flex items-center gap-4 py-5 max-sm:flex-col">
        <a href="#contact" className="btn-primary">
          Connect{' '}
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
