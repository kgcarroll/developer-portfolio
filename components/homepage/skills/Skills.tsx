import React from 'react'
import { motion } from 'framer-motion'
import SingleSkill from './SingleSkill'
import type { Skill, GlobalSettings } from 'lib/sanity.queries'

type Props = {
  skills: Skill[]
  globalSettings: GlobalSettings
}

const Skills = ({ skills, globalSettings }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex max-w-7xl flex-col items-center px-10 text-center md:text-left"
    >
      <h3 className="mt-24 text-2xl uppercase tracking-[20px] text-lightGreen">
        Skills
      </h3>
      <div className="mt-16 flex flex-row gap-3 md:gap-5">
        <div className="grid-reverse grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5">
          {skills?.slice(0, skills?.length / 2).map((skill) => (
            <SingleSkill
              key={skill?._id + 'left'}
              skill={skill}
              directionLeft
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5">
          {skills?.slice(skills?.length / 2, skills?.length).map((skill) => (
            <SingleSkill key={skill?._id + 'right'} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
