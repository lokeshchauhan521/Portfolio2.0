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
            Hello 👋, I'm Lokesh!<br/> 
            A Software Engineer with 2+ years of experience in backend development
            and microservices architecture. I specialize in designing and building  
            scalable, high-performance applications using Python (FastAPI, Flask, Django)
            and implementing robust, distributed systems.<br/> 

            🛠️ Tech Stack & Expertise: <br/> 
            ✅ Backend:Python (FastAPI, Flask, Django)  <br/> 
            ✅ Databases: PostgreSQL, MySQL, Redis, Elasticsearch <br/>  
            ✅ Messaging & Streaming: Apache, Kafka, RabbitMQ  <br/> 
            ✅ DevOps & Containerization: Docker <br/> 
            ✅ Cloud & Infrastructure: AWS (S3)  <br/> 
            ✅ Caching & Performance Optimization: Redis, Celery  <br/> 
            ✅ Security & Authentication: OAuth, JWT, API Gateway  <br/> 

            I thrive on solving complex programming challenges, optimizing 
            system efficiency, and ensuring high availability in production 
            environments. Passionate about system design, clean code, and 
            distributed architectures, I actively contribute to collaborative 
            teams, ensuring seamless integration and smooth project execution. <br/> 

            Always up for a challenge, I continuously push myself to enhance 
            backend architectures, improve system performance, and stay ahead 
            with the latest advancements in backend technologies. 🚀  

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
