import DeveloperImg from '@/app/assets/images/developer.png'
import Image from 'next/image'

const About = () => {
  return (
    <section
      id="about"
      className="h-screen mx-auto w-full px-5 pt-28 lg:px-8 xl:px-[8%]"
    >
      <h2 className="text-center">About Me</h2>
      <div className="flex mt-12 gap-8 max-lg:flex-col max-lg:items-center">
        <Image
          src={DeveloperImg}
          alt="profile_pic"
          className="size-36 bg-white rounded-xl md:size-40 lg:size-48"
        />
        <div>
          <p className="text-lg max-lg:text-center">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
