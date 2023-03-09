import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { GlobalSettings } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'

type Props = {
  globalSettings: GlobalSettings
}

const About = ({ globalSettings }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center max-w-7xl justify-evenly md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-lightGreen">
        About
      </h3>

      <motion.div
        initial={{ x: -75, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={urlForImage(
            globalSettings?.personalInformation?.profilePic
          ).url()}
          height="500"
          width="250"
          className="md:h-95 -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
          alt=""
        />
      </motion.div>
      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          {globalSettings?.personalInformation?.bioTitle}
        </h4>
        <p className="text-sm md:text-xl">
          {globalSettings?.personalInformation?.bio}
        </p>
      </div>
    </motion.div>
  )
}
export default About
