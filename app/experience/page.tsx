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
    company: 'BYJUs, Gurugram, India',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'Ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
    ],
  },
  {
    imgPath: CompanyImg2,
    timeline: 'Feb 2023 - Jan 2024',
    title: 'Software Devloper',
    company: 'BYJUs, Gurugram, India',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'Ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
    ],
  },
  {
    imgPath: CompanyImg3,
    timeline: 'July 2021 - Jan 2022',
    title: 'Application Developer Intern',
    company: 'DGTLmart',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'Ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
    ],
  },
]

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto pt-12 pb-4 px-6">
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
          className="size-8 rounded-full"
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
