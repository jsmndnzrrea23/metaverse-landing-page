'use client'

import { motion as m } from 'framer-motion'

import { textContainer, textVariant2 } from '@/utils/motion'

type TypingTextProps = {
  title: string
  textStyles?: string
}

type TitleTextProps = {
  title: string | React.ReactElement
  textStyles?: string
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <m.p
    variants={textContainer}
    className={`
      font-normal
      text-[14px]
      text-gray-300
      ${textStyles}
    `}
  >
    {Array.from(title).map((letter, index) => (
      <m.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </m.span>
    ))}
  </m.p>
)

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
  <m.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`
      mt-[8px]
      font-bold
      md:text-[64px]
      text-[40px]
      text-white
      ${textStyles}
    `}
  >
    {title}
  </m.h2>
)
