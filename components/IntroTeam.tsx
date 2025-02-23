"use client";

import Image from 'next/image';
import React from 'react'
import { Variants, motion } from "framer-motion";

const imagesVariants: Variants = {
    hiddenBottom: {
      y: 100,
      opacity: 0,
    },
    visibleBottom: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    hiddenLeft: {
      x: 200,
      opacity: 0,
    },
    visibleLeft: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    hiddenRight: {
      x: -200,
      opacity: 0,
    },
    visibleRight: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

function IntroTeam() {
  return (
    <>
    <div className="bg-blueDarkBG pb-8 py-28">
        <div className="w-ful flex justify-center">
            <motion.div
                initial="hiddenLeft"
                whileInView="visibleLeft"
                viewport={{ once: true, margin: "-20%" }}
                variants={imagesVariants}
                className="w-4/5"
            >
                <h1 className="font-tanBuster text-salmon text-3xl text-right pb-3">Une équipe de choc !</h1>
            </motion.div>
        </div>
        <div className="w-full pt-8 flex flex-col justify-center items-center">
            <div className="w-4/5">
                <div className="flex md:flex-row flex-col gap-10 md:pb-0 pb-16">
                    <motion.div
                        initial="hiddenRight"
                        whileInView="visibleRight"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="relative md:w-1/3 w-full h-[600px] md:-top-44"
                    >
                        <Image key="img" src='/img/TEST/IMG_COOKER-001.jpeg' alt="" fill className="object-cover rotate-3"/>
                    </motion.div>
                    <motion.div
                        initial="hiddenLeft"
                        whileInView="visibleLeft"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="md:w-2/3 w-full"
                    >
                        <p className="text-salmon text-right font-theSeasons">
                            Lorem ipsum color sit amet consectetur adipisicing elit. Vitae ea deleniti excepturi sint laborum blanditiis placeat officia sit ipsam, eaque odio molestias tempora recusandae dolores dolore debitis nam soluta, quos voluptate dolorem enim obcaecati distinctio. Corporis inventore, expedita vel consectetur vitae sed, provident totam nostrum dolores sequi corrupti saepe possimus!
                        </p>
                    </motion.div>
                </div>
                <div className="flex md:flex-row flex-col gap-10">
                    <motion.div
                        initial="hiddenRight"
                        whileInView="visibleRight"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="md:w-2/3 w-full"
                    >
                        <p className="text-salmon text-left font-theSeasons">
                            Lorem ipsum color sit amet consectetur adipisicing elit. Vitae ea deleniti excepturi sint laborum blanditiis placeat officia sit ipsam, eaque odio molestias tempora recusandae dolores dolore debitis nam soluta, quos voluptate dolorem enim obcaecati distinctio. Corporis inventore, expedita vel consectetur vitae sed, provident totam nostrum dolores sequi corrupti saepe possimus!
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hiddenLeft"
                        whileInView="visibleLeft"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="relative md:w-1/3 w-full h-[600px] md:-top-64"
                    >
                        <Image key="img" src='/img/TEST/IMG_COOKER-001.jpeg' alt="" fill className="object-cover -rotate-3"/>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default IntroTeam