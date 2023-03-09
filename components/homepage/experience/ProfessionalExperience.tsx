import React from 'react'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ExperienceDetails from './ExperienceDetails'
import type { Experience } from 'lib/sanity.queries'

type Props = {
  experience: Experience[]
}

const ProfessionalExperience = ({ experience }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -20 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="relative flex flex-col items-center max-w-6xl px-10 mx-auto text-left justify-evenly md:flex-row md:text-center "
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-lightGreen">
        Professional Experience
      </h3>
      <ol className="relative text-left mt-44">
        {experience?.map((job) => (
          <li key={job?._id} className="mb-10 xl:mb-16">
            <div className="relative flex flex-col">
              {/* Experience Header */}
              <span className="right-0 left-0 m-auto flex w-[200px] flex-col items-center justify-center bg-bgMain xl:w-[400px]">
                <Image
                  className="md: h-auto w-[300px] object-cover object-center xl:w-[500px]"
                  width="500"
                  height="50"
                  alt=""
                  src={urlForImage(job?.companyInformation?.companyImage).url()}
                />
                <p className="p-1 mt-2 uppercase border-b text-bold border-lightGreen/50 text-lightGreen">
                  {new Date(
                    job?.employmentInformation?.dateStarted
                  ).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                  })}{' '}
                  -{' '}
                  {job?.employmentInformation?.currentlyEmployed
                    ? 'Current'
                    : new Date(
                        job?.employmentInformation?.dateEnded
                      ).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short',
                      })}
                </p>
              </span>
              <div className="flex flex-row">
                <ExperienceDetails
                  key={job?._id + 'details'}
                  experience={job}
                />
                <ExperienceCard key={job?._id + 'card'} experience={job} />
              </div>
              <div className="mt-[-5px]">
                <div className="right-0 left-0 m-auto flex w-[25px] flex-col items-center justify-center border-t border-lightGreen/50 xl:w-[50px]"></div>
                <div className="right-0 left-0 m-auto mt-1 flex w-[10px] flex-col items-center justify-center border-t border-lightGreen/50 xl:w-[25px]"></div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  )
}

export default ProfessionalExperience
