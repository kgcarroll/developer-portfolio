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
      <div className="flex justify-center gap-x-12">
        <motion.div
          initial={{ x: -75, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-1/2"
        >
          <Image
            src={urlForImage(
              globalSettings?.personalInformation?.profilePic
            ).url()}
            height="500"
            width="600"
            className="rounded-full object-cover md:mb-0 md:rounded-lg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-1/2 content-center"
        >
          <h4 className="text-4xl font-semibold">
            {globalSettings?.personalInformation?.bioTitle}
          </h4>
          <p className="text-sm mt-8 md:text-xl">
            {globalSettings?.personalInformation?.bio}
          </p>
        </motion.div>
      </div>

    </motion.div>
  )
}
export default About
