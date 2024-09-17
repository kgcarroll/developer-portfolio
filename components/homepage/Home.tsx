import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import type { GlobalSettings } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'

type Props = {
  globalSettings: GlobalSettings
}

const Home = ({ globalSettings }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      '<Dad />, <Husband />, <Programmer />',
      'const coreSkills = [react, .tsx, .js, tailwindcss];',
      'import { Leader } from "../experienced-developer";',
      'const worldTraveler = true;',
    ],
    loop: true,
    delaySpeed: 2250,
  })
  return (
    <div className="m-0 flex h-screen flex-col items-start justify-center space-y-8 overflow-hidden text-center md:flex-row">
      <div className="w-full bg-red-900 md:h-screen md:w-1/2"></div>
      <div className="w-full bg-red-300 md:mt-0 md:h-screen md:w-1/2"></div>

      {/* <Image
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src={urlForImage(globalSettings?.homepageContent?.heroImage).url()}
        priority
        height="128"
        width="128"
        alt=""
      />
      <div className="z-30">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-lightGreen"  >
          {globalSettings?.personalInformation?.role}
        </h2>
        <h1 className="text-5xl font-semibold lr:text-6xl px-15">
          <div>Hey there, I&apos;m {globalSettings?.personalInformation?.name}.</div>
          <span>{text}</span>
          <Cursor cursorColor="#60C689" />
        </h1>
        <div className="flex flex-row justify-center pt-5 mx-auto gap-x-2">
          <Link href="#about">
            <button className="heroBtn border-white/25 bg-bgMain text-lightGreen hover:border-darkPurple hover:bg-teal/5 hover:text-teal">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn border-white/25 bg-bgMain text-lightGreen hover:border-darkPurple hover:bg-teal/5 hover:text-teal">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn border-white/25 bg-bgMain text-lightGreen hover:border-darkPurple hover:bg-teal/5 hover:text-teal">
              Skills
            </button>
          </Link>
          <Link href="#education">
            <button className="heroBtn border-white/25 bg-bgMain text-lightGreen hover:border-darkPurple hover:bg-teal/5 hover:text-teal">
              Education
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default Home
