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
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center max-w-7xl md:text-left"
    >
      <h3 className="mt-24 text-2xl uppercase tracking-[20px] text-lightGreen">
        Skills
      </h3>
      <h3 className="mt-2 text-sm uppercase tracking-[3px] text-blueLight/20">
        Hover over to for proficiency.
      </h3>
      <div className="flex flex-row mt-16">
        <div className="grid grid-cols-4 gap-5">
          {skills?.slice(0, skills?.length / 2).map((skill) => (
            <SingleSkill
              key={skill?._id + 'left'}
              skill={skill}
              directionLeft
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-5">
          {skills?.slice(skills?.length / 2, skills?.length).map((skill) => (
            <SingleSkill key={skill?._id + 'right'} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
