import Image, { StaticImageData } from 'next/image'
import TimelineItem from '@/components/TimelineItem'
import CompanyImg1 from '@/app/assets/images/companies/nmg.png'
import CompanyImg2 from '@/app/assets/images/companies/byjus.png'
import CompanyImg3 from '@/app/assets/images/companies/dgtlmart.png'

type Experience = {
  imgPath: StaticImageData
  timeline: string
  title: string
  company: string
  description: string[]
}

const experienceList: Experience[] = [
  {
    imgPath: CompanyImg1,
    timeline: 'Feb 2024 - Present',
    title: 'Software Developer - Frontend',
    company: 'NMG Technologies, Gurugram',
    description: [
      'Developed Yew, a responsive web app using React.js, Redux, Tailwind CSS, and TypeScript, following industry best practices.',
      'Optimized performance, cutting initial load time by 80% with code splitting, lazy loading, and dynamic imports.',
      'Resolved 18+ issues on a marketing intelligence platform with a micro-frontend architecture, resulting in a 40% performance boost.',
    ],
  },
  {
    imgPath: CompanyImg2,
    timeline: 'Feb 2023 - Jan 2024',
    title: 'Software Devloper',
    company: 'BYJUs, Gurugram',
    description: [
      'Built core UI components and integrated key APIs for a CRM platform using ReactJS, HTML, CSS, and JavaScript, ensuring a seamless, responsive user experience and efficient data flow.',
      'Optimized a Node.js-based Loan Management System with a microservices architecture, leveraging Redis, PostgreSQL, MongoDB, and AWS, resolving critical issues and improving processing efficiency by 25%.',
      'Automated end-to-end testing with Selenium, TestNG, and Java, achieving 90% test coverage and improving software reliability.',
    ],
  },
  {
    imgPath: CompanyImg3,
    timeline: 'July 2021 - Jan 2022',
    title: 'Application Developer Intern',
    company: 'DGTLmart',
    description: [
      'Developed and implemented interactive in-app games, quizzes and a virtual assistant for TreeCampus, a Flutter-based digital learning application with 100,000+ downloads.',
      'Designed, built, and deployed an interactive digital business card website using React.js, HTML, SCSS, and JavaScript.',
      'Automated push notifications and data import/export by developing a Node.js backend service integrated with Firebase, improving efficiency and user engagement.',
    ],
  },
]

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto pb-4 px-6">
      <h2 className="mb-12">Experience</h2>
      {experienceList.map((experience, index) => (
        <ExperienceItem
          key={experience.timeline}
          experience={experience}
          active={index === 0}
        />
      ))}
    </section>
  )
}

const ExperienceItem = ({
  experience,
  active,
}: {
  experience: Experience
  active?: boolean
}) => {
  return (
    <TimelineItem
      icon={
        <Image
          src={experience.imgPath}
          className="size-9 rounded-full"
          alt="company-logo"
        />
      }
      active={active}
    >
      <p className="text-xs text-light">{experience.timeline}</p>
      <h5>{experience.title}</h5>
      <p className="font-semibold mb-2">{experience.company}</p>
      <ul className="list-disc ms-4">
        {experience.description.map((e, i) => (
          <li key={i}>
            <p className="text-light">{e}</p>
          </li>
        ))}
      </ul>
    </TimelineItem>
  )
}

export default Experience
