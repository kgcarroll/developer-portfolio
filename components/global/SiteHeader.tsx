import { SocialIcon } from 'react-social-icons'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Social } from 'lib/sanity.queries'

type SiteHeaderProps = {
  social: Social[]
}

export default function SiteHeader({ social }: SiteHeaderProps) {
  return (
    <header className="bg-gradient-to-b from-bgMain via-75% ... to-100% sticky top-0 z-20">
      <div className="flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {social?.map((account) => (
            <SocialIcon
              key={account._key}
              url={account.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </motion.div>
        <Link href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <EnvelopeIcon className="text-gray-500 transition duration-200 ease-in-out h-7 w-7 hover:text-lightGreen" />
            <p className="hidden pl-2 text-gray-500 uppercase md:inline-flex">Contact</p>
          </motion.div>
        </Link>
      </div>
    </header>
  )
}
