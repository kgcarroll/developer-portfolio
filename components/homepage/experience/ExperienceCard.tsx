import React from 'react'
import { motion } from 'framer-motion'
import type { Experience } from 'lib/sanity.queries'

import { urlForImage } from 'lib/sanity.image'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex w-[320px] flex-shrink-0 flex-col items-center space-y-7 overflow-hidden border-l border-lightGreen p-10 duration-200 dark:border-lightGreen/50 md:w-[512px] xl:w-[720px]">
      <div className="mr-auto">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-[512px] px-0"
        >
          <p className="mb-4 text-lg font-bold uppercase text-lightGreen">
            Core Duties
          </p>
          <ul className="ml-5 space-y-4 text-gray-300 list-disc text-s">
            {experience?.jobFunction?.points.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </article>
  )
}

export default ExperienceCard
