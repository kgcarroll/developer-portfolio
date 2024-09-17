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
      className="relative mx-auto flex min-h-[768px] items-center justify-center px-10 text-center md:text-left"
    >
      {/* Inner Container to always be 1024px */}
      <div className="flex max-w-7xl flex-col items-center justify-center md:h-[1024px] ">
        <h3 className="mb-20 text-2xl uppercase tracking-[20px] text-lightGreen md:mb-24">
          About
        </h3>
        <div className="justify-center gap-x-12 md:flex">
          <motion.div
            initial={{ x: -75, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto w-1/2"
          >
            <Image
              src={urlForImage(
                globalSettings?.personalInformation?.profilePic
              ).url()}
              height="500"
              width="600"
              className="mx-auto rounded-full object-cover md:mb-0 md:rounded-lg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: 75, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="content-center md:w-1/2"
          >
            <h4 className="mt-6 text-4xl font-semibold md:mt-0">
              {globalSettings?.personalInformation?.bioTitle}
            </h4>
            <p className="mt-6 text-sm md:mt-8 md:text-xl">
              {globalSettings?.personalInformation?.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
