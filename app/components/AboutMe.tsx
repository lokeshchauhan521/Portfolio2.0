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
        I am a Software Engineer with 2+ years of experience specializing 
        in backend development, microservices, and micro-frontends. I have 
        a strong passion for solving complex programming challenges and continuously
        exploring the latest technologies to build scalable, high-performance applications.
        As an adaptable and quick learner, I thrive in dynamic environments and enjoy working
        collaboratively to develop innovative solutions. I am always eager to take on new
        challenges and contribute to impactful projects that drive efficiency and growth.
        </p>
      </div>
    </section>
   
  )
}

export default AboutMe
