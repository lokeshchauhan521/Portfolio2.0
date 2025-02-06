import Image from 'next/image'
import CodeImg from '@/app/assets/images/code.png'

const AboutMe = () => {
  return (
    <section id="about-me" className="dashboard-section">
      <h3 className="mb-10">A Little About Me</h3>
      <div className="flex mt-12 gap-8 max-md:flex-col">
        <Image
          src={CodeImg}
          alt="about"
          className="rounded-xl size-64 max-md:mx-auto"
        />
        <p className="text-lg text-light">
          Software Engineer with 2+ years of experience in frontend,
          micro-frontend, backend, and microservices. I enjoy solving complex
          programming challenges, staying ahead with the latest technologies,
          and building scalable, high-performance applications. An adaptable and
          quick learner who thrives in dynamic environments and actively
          contributes to collaborative teams—always up for a challenge.
        </p>
      </div>
    </section>
    // <section
    //   id="about"
    //   className="h-screen mx-auto w-full px-5 pt-28 lg:px-8 xl:px-[8%]"
    // >
    //   <h2 className="text-center">A Little About Me</h2>
    //   <div className="flex mt-12 gap-8 max-lg:flex-col max-lg:items-center">
    //     <Image
    //       src={DeveloperImg}
    //       alt="profile_pic"
    //       className="size-36 bg-white rounded-xl md:size-40 lg:size-48"
    //     />
    //     <div>
    //       <p className="text-lg max-lg:text-center">
    //         I am an experienced Frontend Developer with over a decade of
    //         professional expertise in the field. Throughout my career, I have
    //         had the privilege of collaborating with prestigious organizations,
    //         contributing to their success and growth.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  )
}

export default AboutMe
