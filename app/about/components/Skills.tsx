'use client'
import { useMemo } from 'react'
import Chip from '@/components/Chip'
import { useAppSelector, useMounted } from '@/lib/hooks'
import { getSkillList } from '../utils'

const Skills = () => {
  const theme = useAppSelector((state) => state.theme.theme)
  const mounted = useMounted()

  const skills = useMemo(() => {
    if (!mounted) return []
    return getSkillList(theme)
  }, [theme, mounted])

  return (
    <div>
      <h3 className="mt-16">Skills</h3>
      <div className="flex gap-3 mt-6 flex-wrap">
        {skills.map((skill) => (
          <Chip key={skill.label} label={skill.label} imgPath={skill.imgPath} />
        ))}
      </div>
    </div>
  )
}

export default Skills
