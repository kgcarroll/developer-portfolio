import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GlobalSettings } from 'lib/sanity.queries'

import { urlForImage } from 'lib/sanity.image'

type Props = {
  globalSettings: GlobalSettings
}

const Education = ({ globalSettings }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto mt-24 flex w-full flex-col items-center justify-evenly px-10 text-center md:h-[1024px]"
    >
      {globalSettings?.education?.collegePic && (
        <Image
          src={urlForImage(globalSettings?.education?.collegePic).url()}
          alt="SAE Institute"
          layout="fill"
          objectFit="cover"
          className="absolute bottom-0 z-0 opacity-20"
        />
      )}
      <div className="z-1 relative border border-lightGreen/50 bg-bgMain/75 px-16 py-8">
        <h3 className="top-24 text-2xl uppercase tracking-[20px] text-lightGreen">
          Education
        </h3>
        <h3 className="mt-6 pb-1 text-2xl text-lightGreen">
          {globalSettings?.education?.college}
        </h3>
        <p className="">{globalSettings?.education?.collegeLocation}</p>
        <p className="text-bold">
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
        <p className="text-bold mt-4 text-xl uppercase tracking-[3px] text-lightGreen">
          🎓&nbsp;{globalSettings?.education?.degree}
        </p>
      </div>
    </motion.div>
  )
}

export default Education
