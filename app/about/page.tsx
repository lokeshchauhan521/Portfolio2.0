import Image from 'next/image'
import Skills from './components/Skills'
import DeveloperIMg from '@/app/assets/images/developer2.png'

export default function About() {
  return (
    <>
      <section className="max-w-4xl mx-auto pb-4 px-6">
        <h2>About Me</h2>
        <div className="mt-6">
          <div>
            <p className="text-lg text-light">
              Hello 👋 I&apos;m Deepak, a Software Engineer with 2+ years of
              experience in frontend, micro-frontend, backend, and
              microservices. I enjoy solving complex programming challenges,
              staying ahead with the latest technologies, and building scalable,
              high-performance applications. Adaptable, quick to learn, and
              thrive in dynamic environments. I actively contribute to
              collaborative teams, ensuring smooth communication and teamwork to
              achieve project goals, and I am always up for a challenge.
            </p>
          </div>
        </div>
        <Image
          src={DeveloperIMg}
          alt="about"
          className="mt-8 rounded-2xl h-52 w-full object-cover sm:h-80"
        />
        <Skills />
      </section>
    </>
  )
}
