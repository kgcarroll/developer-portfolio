import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { GlobalSettings } from 'lib/sanity.queries'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {
  globalSettings: GlobalSettings
}

const Contact = ({ globalSettings }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()

  // This is the form handler.  Do something with the data here.
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // Show form data in console.
    console.log(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center max-w-7xl justify-evenly md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-lightGreen">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          E-commerce, structured content, custom integrations.
        </h4>
        {/* <h4 className="font-semibold text-center text-7xl">I got you.</h4> */}
        <p className="text-center uppercase tracking-[4px] text-white/40">
          Just drop me a note.
        </p>
        <div className="space-y-10">
          <div className="flex justify-center space-x-5 item-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-lightGreen" />
            <p className="text-2xl">
              {globalSettings?.contactInformation?.phoneNumber}
            </p>
          </div>
          <div className="flex justify-center space-x-5 item-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-lightGreen" />
            <p className="text-2xl">
              {globalSettings?.contactInformation?.email}
            </p>
          </div>
          <div className="flex justify-center space-x-5 item-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-lightGreen" />
            <p className="text-2xl">
              {globalSettings?.contactInformation?.address}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2 w-fit"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register('email')}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register('message')}
            className="contactInput"
            placeholder="Type your message..."
          />
          <button className="px-10 py-5 text-lg font-bold rounded-sm bg-lightGreen text-bgMain">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
