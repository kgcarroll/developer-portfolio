import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import useIsDesktop from 'components/global/DesktopHook'

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const SingleSkill = ({ directionLeft, skill }: Props) => {
  const isDesktopDevice = useIsDesktop()
  const imageUrl = skill?.image ? urlForImage(skill.image).url() : ''

  return (
    <div className="group relative flex cursor-pointer">
      {isDesktopDevice ? (
        <motion.div
          initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            src={urlForImage(skill?.image).url()}
            alt=""
            width="50"
            height="50"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image src={imageUrl} alt="" width="50" height="50" />
        </motion.div>
      )}
    </div>
  )
}

export default SingleSkill
