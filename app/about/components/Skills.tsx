'use client'

import Chip from '@/components/Chip'
import ReactLightImg from '@/app/assets/images/skills/react-light.png'
import ReactDarkImg from '@/app/assets/images/skills/react-dark.png'
import NextLightImg from '@/app/assets/images/skills/nextjs-light.png'
import NextDarkImg from '@/app/assets/images/skills/nextjs-dark.png'
import VueLightImg from '@/app/assets/images/skills/vuejs-light.png'
import VueDarkImg from '@/app/assets/images/skills/vuejs-dark.png'
import TailwindLightImg from '@/app/assets/images/skills/tailwindcss-light.png'
import TailwindDarkImg from '@/app/assets/images/skills/tailwindcss-dark.png'
import HTMLImg from '@/app/assets/images/skills/html.png'
import CSSImg from '@/app/assets/images/skills/css.png'
import SassImg from '@/app/assets/images/skills/sass.png'
import { useAppSelector } from '@/lib/hooks'
import { useMemo } from 'react'

const getSkillList = (theme: 'light' | 'dark') => {
  return [
    {
      label: 'ReactJS',
      imgPath: theme !== 'light' ? ReactLightImg : ReactDarkImg,
    },
    {
      label: 'NextJS',
      imgPath: theme !== 'light' ? NextLightImg : NextDarkImg,
    },
    {
      label: 'VueJS',
      imgPath: theme !== 'light' ? VueLightImg : VueDarkImg,
    },
    {
      label: 'HTML',
      imgPath: HTMLImg,
    },
    {
      label: 'Tailwind CSS',
      imgPath: theme !== 'light' ? TailwindLightImg : TailwindDarkImg,
    },
    {
      label: 'CSS',
      imgPath: CSSImg,
    },
    {
      label: 'SASS',
      imgPath: SassImg,
    },
  ]
}

const Skills = () => {
  const theme = useAppSelector((state) => state.theme.theme)
  const skills = useMemo(() => getSkillList(theme), [theme])
  return (
    <div>
      <h3 className="mt-16">Skills</h3>
      {/* <h4 className="mt-6">Frontend</h4> */}
      <div className="flex gap-3 mt-6 flex-wrap">
        {skills.map((skill) => (
          <Chip key={skill.label} label={skill.label} imgPath={skill.imgPath} />
        ))}
        {/* <Chip label="ReactJS" imgPath={ReactLightImg} />
        <Chip label="ReactJS" imgPath={ReactDarkImg} /> */}
      </div>
    </div>
  )
}

export default Skills
