import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const SingleSkill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={urlForImage(skill?.image).url()}
          alt=""
          width="50"
          height="50"
        />
      </motion.div>
      {/* <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out opacity-0 group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default SingleSkill
