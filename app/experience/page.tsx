import Image, { StaticImageData } from 'next/image'
import TimelineItem from '@/components/TimelineItem'
import CompanyImg1 from '@/app/assets/images/companies/nmg.png'
import InstituteImg1 from "@/app/assets/images/companies/ducat.webp"

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
    title: 'Software Developer - Python Developer',
    company: 'NMG Technologies, Gurugram',
    description: [
        "Developed and optimized RESTful APIs using FastAPI and Flask for scalable and high-performance applications.",
        "Implemented PostgreSQL, MySQL, and Elasticsearch for efficient data storage, indexing, and querying.",
        "Integrated Redis for caching and Kafka for event-driven architecture, improving system responsiveness.",
        "Performed web scraping on Google search results, transforming raw data into structured, useful insights.",
        "Containerized applications using Docker for seamless deployment and scalability.",
        "Managed file storage and retrieval using AWS S3, ensuring efficient handling of large datasets."
    ],

  },
  {
    imgPath: InstituteImg1,
    timeline: "2023 - 2024",
    title: "Python Full Stack Training",
    company: "Ducat India",
    description: [
      "Completed hands-on training in Python Full Stack development, covering both frontend and backend technologies.",
      "Gained expertise in Python, Django, and database management with PostgreSQL and MySQL.",
      "Learned frontend technologies including React, HTML, CSS, and JavaScript.",
      "Built multiple full-stack applications, applying industry best practices and scalable architectures.",
      "Worked on real-world projects, integrating frontend and backend for seamless user experience."
    ]
  }
    
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
