import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import type { GlobalSettings } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'

type Props = {
  globalSettings: GlobalSettings
}

const Hero = ({ globalSettings }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hey there, I'm ${globalSettings?.personalInformation?.name}.`,
      '<Dad />, <Husband />, <Programmer />',
      'const skills = [react, .tsx, .js, tailwindcss];',
      'import { Leader } from "../experience";',
      'const worldTraveler = true;',
    ],
    loop: true,
    delaySpeed: 2250,
  })
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        src={urlForImage(globalSettings?.homepageContent?.heroImage).url()}
        priority
        height="128"
        width="128"
        alt=""
      />
      <div className="z-30 mx-4 md:mx-0">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-lightGreen">
          {globalSettings?.personalInformation?.role}
        </h2>
        <h1 className="lr:text-6xl px-15 min-h-[80px] text-4xl font-semibold md:min-h-fit">
          <span>{text}</span>
          <Cursor cursorColor="#60C689" />
        </h1>
        <div className="mx-auto flex flex-row justify-center gap-x-2 pt-5">
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
      </div>
    </div>
  )
}

export default Hero
