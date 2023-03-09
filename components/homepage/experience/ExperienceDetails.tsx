import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Experience } from 'lib/sanity.queries'

import { urlForImage } from 'lib/sanity.image'

type Props = {
  experience: Experience
}

const ExperienceDetails = ({ experience }: Props) => {
  return (
    <article className="flex w-[320px] space-y-7 overflow-hidden p-10 duration-200 md:w-[512px] xl:w-[720px]">
      <div className="flex flex-col ml-auto">
        <motion.div
          initial={{ x: -75, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-end"
        >
          <div className="flex flex-col items-end">
            <p className="text-lg font-bold uppercase text-lightGreen">
              Position
            </p>
            <h4 className="mb-8 text-5xl font-light">
              {experience?.employmentInformation?.jobTitle}
            </h4>
          </div>
          <p className="mt-4 text-lg font-bold uppercase text-lightGreen">
            Technology Stack
          </p>
          {/* <div className="flex my-4 mt-3 mb-8 space-x-2"> */}
          <div className="grid grid-cols-6 gap-3 mt-3 mb-8">
            {experience?.jobFunction?.technologies &&
              experience?.jobFunction?.technologies.map((skill) => (
                <Image
                  key={skill?._id}
                  className="w-8 h-8 xl:h-12 xl:w-12"
                  src={urlForImage(skill?.image).url()}
                  width="50"
                  height="50"
                  alt=""
                />
              ))}
          </div>
          <p className="mt-4 text-lg font-bold uppercase text-lightGreen">
            Tools & Platforms
          </p>
          <div className="w-full px-0 pt-4 mb-8">
            <div className="start xl:gap-y-x ml-auto flex max-w-[375px] flex-row-reverse flex-wrap gap-y-6 gap-x-6 xl:gap-y-8">
              {experience?.jobFunction?.toolPlatform &&
                experience?.jobFunction?.toolPlatform.map((name) => (
                  <div key={name?._id} className="max-w-1/2">
                    <Image
                      className="w-auto h-6 max-w-1/2 xl:h-8"
                      src={urlForImage(name?.image).url()}
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
        {experience?.employmentInformation?.professionalReference &&
          experience?.employmentInformation?.professionalReference.map(
            (reference) => (
              <div className="mt-auto text-right" key={reference?._id}>
                <p className="mt-4 ml-auto mb-4 max-w-[320px] text-xs italic text-lightGreen">
                  {reference.quote}
                </p>
                <p className="text-bold mr-[-5px] uppercase tracking-[5px] text-gray-300">
                  - {reference.name}
                </p>
                <p className="text-xs text-bold text-lightGreen">
                  {reference.title}
                </p>
              </div>
            )
          )}
      </div>
    </article>
  )
}

export default ExperienceDetails
