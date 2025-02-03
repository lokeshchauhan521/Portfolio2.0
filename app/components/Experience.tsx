import TimelineItem from '@/components/TimelineItem'
import DeveloperImg from '@/app/assets/images/developer.png'
import Image from 'next/image'

type Experience = {
  timeline: string
  title: string
  company: string
  description: string[]
}

const experienceList: Experience[] = [
  {
    timeline: 'MAY 2021 - Present',
    title: 'Software Developer',
    company: 'XYZ, USA',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'Ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
    ],
  },
  {
    timeline: 'JAN 2020 - MAY 2021',
    title: 'Frontend Developer',
    company: 'ABC, London',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'Ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
    ],
  },
  {
    timeline: 'FEB 2016 - DEC 2019',
    title: 'Backend Developer Developer',
    company: 'ABC, London',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
      'Ipsum dolor sit amet, consectetur adipisicing elit. Autem dictarepudiandae eius quasi ullam quidem sunt alias aperiam eum!',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="dashboard-section">
      <h3 className="text mb-10">Experience</h3>
      {experienceList.map((experience) => (
        <ExperienceItem key={experience.timeline} experience={experience} />
      ))}
    </section>
  )
}

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <TimelineItem
      icon={<Image src={DeveloperImg} className="size-8" alt="company-logo" />}
    >
      <p className="text-xs text-neutral-600 dark:text-neutral-300">
        {experience.timeline}
      </p>
      <h5>{experience.title}</h5>
      <p className="font-semibold mb-2">{experience.company}</p>
      {experience.description.map((e, i) => (
        <p key={i} className="text-neutral-600 dark:text-neutral-300">
          • {e}
        </p>
      ))}
    </TimelineItem>
  )
}

export default Experience
