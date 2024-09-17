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
    <header className="... sticky top-0 z-20 bg-gradient-to-b from-bgMain via-75% to-100%">
      <div className="mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
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
            className="flex cursor-pointer flex-row items-center text-gray-300"
          >
            <EnvelopeIcon className="h-7 w-7 text-gray-500 transition duration-200 ease-in-out hover:text-lightGreen" />
            <p className="hidden pl-2 uppercase text-gray-500 md:inline-flex">
              Contact
            </p>
          </motion.div>
        </Link>
      </div>
    </header>
  )
}
