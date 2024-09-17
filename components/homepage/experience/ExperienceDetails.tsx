import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Experience } from 'lib/sanity.queries'

import { urlForImage } from 'lib/sanity.image'
import Modal from 'components/global/Modal'
import useIsDesktop from 'components/global/DesktopHook'

type Props = {
  experience: Experience
}

const ExperienceDetails = ({ experience }: Props) => {
  const [open, setOpen] = useState(false)
  const employmentDetails = (
    <>
      <p className="text-lg font-bold uppercase text-lightGreen">Position</p>
      <h4 className="mb-2 text-center text-3xl font-light md:mb-8 md:text-left md:text-5xl">
        {experience?.employmentInformation?.jobTitle}
      </h4>
      <div className="duties-modal mb-4 md:hidden">
        <button
          className="heroBtn border-white/25 bg-bgMain text-lightGreen hover:border-darkPurple hover:bg-teal/5 hover:text-teal"
          onClick={() => setOpen(true)}
        >
          Core Duties
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          children={experience?.jobFunction?.points}
        ></Modal>
      </div>
      <p className="mt-4 text-lg font-bold uppercase text-lightGreen">
        Technology Stack
      </p>
      <div className="md:grid-reverse mb-8 mt-3 flex flex-row-reverse flex-wrap justify-center gap-3 md:grid md:grid-cols-6">
        {experience?.jobFunction?.technologies &&
          experience?.jobFunction?.technologies.map((skill) => (
            <Image
              key={skill?._id}
              className="h-8 w-8 xl:h-12 xl:w-12"
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
      <div className="mb-8 w-full px-0 pt-4">
        <div className="xl:gap-y-x ml-auto flex max-w-[375px] flex-row-reverse flex-wrap justify-center gap-x-6 gap-y-6 md:justify-start xl:gap-y-8">
          {experience?.jobFunction?.toolPlatform &&
            experience?.jobFunction?.toolPlatform.map((name) => (
              <div key={name?._id} className="max-w-1/2">
                <Image
                  className="max-w-1/2 h-6 w-auto xl:h-8"
                  src={urlForImage(name?.image).url()}
                  width="50"
                  height="50"
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </>
  )

  const isDesktopDevice = useIsDesktop()

  return (
    <>
      <div className="space h-4 w-1/2 border-r border-lightGreen/50 md:hidden"></div>
      <article className="flex space-y-7 overflow-hidden px-6 duration-200 md:w-[512px] md:p-10 xl:w-[720px]">
        <div className="ml-auto flex flex-col border border-lightGreen/50 p-4 md:border-0 md:p-0">
          {isDesktopDevice ? (
            <motion.div
              initial={{ x: -75, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-end"
            >
              {employmentDetails}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center md:items-end">
              {employmentDetails}
            </div>
          )}
          {experience?.employmentInformation?.professionalReference &&
            experience?.employmentInformation?.professionalReference.map(
              (reference) => (
                <div className="mt-auto text-right" key={reference?._id}>
                  <p className="mb-4 ml-auto mt-4 max-w-[320px] text-xs italic text-lightGreen">
                    {reference.quote}
                  </p>
                  <p className="text-bold mr-[-5px] uppercase tracking-[5px] text-gray-300">
                    - {reference.name}
                  </p>
                  <p className="text-bold text-xs text-lightGreen">
                    {reference.title}
                  </p>
                </div>
              )
            )}
        </div>
      </article>
      <div className="space h-3 w-1/2 border-r border-lightGreen/50 md:hidden"></div>
    </>
  )
}

export default ExperienceDetails
