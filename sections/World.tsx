'use client'

import { motion as m } from 'framer-motion'

import styles from '@/styles'
import { TitleText, TypingText } from '@/components'
import { staggerContainer, fadeIn } from '@/utils/motion'

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <m.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`
          ${styles.innerWidth}
          mx-auto
          flex
          flex-col
        `}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <m.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="
            relative
            mt-[68px]
            flex
            w-full
            h-[550px]
          "
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div
            className="
              absolute
              bottom-20
              right-20
              w-[70px]
              h-[70px]
              p-[6px]
              rounded-full
              bg-[#5d6680]
            "
          >
            <img src="/people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div
            className="
              absolute
              top-10
              left-20
              w-[70px]
              h-[70px]
              p-[6px]
              rounded-full
              bg-[#5d6680]
            "
          >
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div
            className="
              absolute
              top-1/2
              left-[45%]
              w-[70px]
              h-[70px]
              p-[6px]
              rounded-full
              bg-[#5d6680]
            "
          >
            <img src="/people-03.png" alt="people" className="w-full h-full" />
          </div>
          {/* floating cards in map */}
          {/* 1 */}
          <div
            className="
              absolute
              top-[42%]
              left-[16%]
              w-[236px]
              h-[158px]
              p-[6px]
              rounded-3xl
              bg-[#5d6680]
              overflow-hidden
              hidden
              sm:block
            "
          >
            <img
              src="/upside-down.png"
              alt="upside-down"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              className="
                absolute
                bottom-4
                w-full
                back
                flex
                flex-col
                gap-1
              "
            >
              <div className="flex justify-evenly items-center">
                <div className="relative flex">
                  <img
                    src="/people-01.png"
                    alt="people"
                    className="
                      w-[28px]
                      h-[28px]
                      relative
                    "
                  />
                  <img
                    src="/people-02.png"
                    alt="people"
                    className="
                      w-[28px]
                      h-[28px]
                      absolute
                      left-[50%]
                    "
                  />
                  <img
                    src="/people-03.png"
                    alt="people"
                    className="
                      w-[28px]
                      h-[28px]
                      absolute
                      left-[100%]
                    "
                  />
                </div>
                <h2 className="text-white font-medium text-[14px]">
                  + 212 has joined
                </h2>
              </div>
              <h1
                className="
                  font-bold
                  text-[20px]
                  leading-[30px]
                  text-white
                  text-center
                "
              >
                The Upside Down
              </h1>
            </div>
          </div>
          {/* 2 */}
          <div
            className="
              absolute
              top-10
              right-[16%]
              w-[236px]
              h-[158px]
              p-[6px]
              rounded-3xl
              bg-[#5d6680]
              overflow-hidden
              hidden
              sm:block
            "
          >
            <img
              src="/hawkins-labs.png"
              alt="hawkins-labs"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              className="
                absolute
                bottom-4
                w-full
                back
                flex
                flex-col
                gap-1
              "
            >
              <div className="flex justify-evenly items-center">
                <div className="relative flex">
                  <img
                    src="/people-01.png"
                    alt="people"
                    className="
                      w-[28px]
                      h-[28px]
                      relative
                    "
                  />
                  <img
                    src="/people-02.png"
                    alt="people"
                    className="
                      w-[28px]
                      h-[28px]
                      absolute
                      left-[50%]
                    "
                  />
                  <img
                    src="/people-03.png"
                    alt="people"
                    className="
                      w-[28px]
                      h-[28px]
                      absolute
                      left-[100%]
                    "
                  />
                </div>
                <h2 className="text-white font-medium text-[14px]">
                  + 305 has joined
                </h2>
              </div>
              <h1
                className="
                  font-bold
                  text-[20px]
                  leading-[30px]
                  text-white
                  text-center
                "
              >
                Hawkins Labs
              </h1>
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  )
}

export default World
