import React from 'react'
import { motion } from 'framer-motion'
import { GlobalSettings } from 'lib/sanity.queries'

type Props = {
  globalSettings: GlobalSettings
}

const Education = ({ globalSettings }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center px-10 mx-auto mt-24 text-center max-w-7xl justify-evenly md:text-left"
    >
      <h3 className="top-24 text-2xl uppercase tracking-[20px] text-lightGreen">
        Education
      </h3>
      <h3 className="pb-1 mt-6 text-2xl text-lightGreen">
        {globalSettings?.education?.college}
      </h3>
      <p className="">{globalSettings?.education?.collegeLocation}</p>
      <p className="uppercase text-bold text-lightGreen">
        {new Date(globalSettings?.education?.dateStarted).toLocaleDateString(
          'en-us',
          {
            year: 'numeric',
            month: 'long',
          }
        )}{' '}
        to{' '}
        {new Date(globalSettings?.education?.dateEnded).toLocaleDateString(
          'en-us',
          {
            year: 'numeric',
            month: 'long',
          }
        )}
      </p>
      <p className="text-bold mt-2 text-xl uppercase tracking-[3px] text-lightGreen">
        {globalSettings?.education?.degree}
      </p>
    </motion.div>
  )
}

export default Education
