import React from 'react'
import { animate, motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 0.3,
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-48 h-[200px] w-[200px] animate-ping rounded-full border border-blueLight" />
      <div className="absolute mt-48 h-[300px] w-[300px] animate-ping rounded-full border border-blueLight" />
      <div className="absolute mt-48 h-[500px] w-[500px] animate-ping rounded-full border border-blueLight" />
      <div className="absolute mt-48 h-[650px] w-[650px] rounded-full border border-lightGreen opacity-20" />
      <div className="absolute mt-48 h-[800px] w-[800px] rounded-full border border-lightGreen opacity-20" />
    </motion.div>
  )
}

export default BackgroundCircles
