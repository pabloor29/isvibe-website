"use client";

import React from 'react'
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

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

function IntroSalles() {
  return (
    <>
    <div className="bg-blueDarkBG w-full overflow-hidden py-20">
        <div className="w-full flex justify-center">
            <motion.div
                initial="hiddenLeft"
                whileInView="visibleLeft"
                viewport={{ once: true, margin: "-20%" }}
                variants={imagesVariants}
                className="w-4/5"
            >
                <h1 className="font-tanBuster text-salmon text-3xl text-right pb-3">Deux salles, deux ambiances...</h1>
            </motion.div>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-center items-center">
            <div className="w-4/5 flex md:flex-row flex-col justify-center items-center gap-16">
                <div className="md:w-1/2 w-full flex flex-col">
                    <motion.div
                        initial="hiddenRight"
                        whileInView="visibleRight"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="py-4"
                    >
                        <h2 className="font-typewriter text-salmon text-2xl">La salle du bas</h2>
                    </motion.div>
                    <motion.div
                        initial="hiddenRight"
                        whileInView="visibleRight"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="relative h-[500px]"
                    >
                        <Image key="img" src='/img/TEST/IMG_COOKER-001.jpeg' alt="" fill className="object-cover"/>
                    </motion.div>
                    <motion.div
                        initial="hiddenBottom"
                        whileInView="visibleBottom"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="pt-8"
                    >
                        <p className="text-salmon text-center font-theSeasons">
                            Lorem ipsum color sit amet consectetur adipisicing elit. Vitae ea deleniti excepturi sint laborum blanditiis placeat officia sit ipsam, eaque odio molestias tempora recusandae dolores dolore debitis nam soluta, quos voluptate dolorem enim obcaecati distinctio. Corporis inventore, expedita vel consectetur vitae sed, provident totam nostrum dolores sequi corrupti saepe possimus!
                        </p>
                    </motion.div>               
                </div>
                <div className="md:w-1/2 w-full flex flex-col">
                    <motion.div
                        initial="hiddenLeft"
                        whileInView="visibleLeft"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="py-4"
                    >
                        <h2 className="font-typewriter text-salmon text-2xl md:text-right">La salle du haut</h2>
                    </motion.div>
                    <motion.div
                        initial="hiddenLeft"
                        whileInView="visibleLeft"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="relative h-[500px]"
                    >
                        <Image key="img" src='/img/TEST/IMG_COOKER-001.jpeg' alt="" fill className="object-cover"/>
                    </motion.div>
                    <motion.div
                        initial="hiddenBottom"
                        whileInView="visibleBottom"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={imagesVariants}
                        className="pt-8"
                    >
                        <p className="text-salmon text-center font-theSeasons">
                            Lorem ipsum color sit amet consectetur adipisicing elit. Vitae ea deleniti excepturi sint laborum blanditiis placeat officia sit ipsam, eaque odio molestias tempora recusandae dolores dolore debitis nam soluta, quos voluptate dolorem enim obcaecati distinctio. Corporis inventore, expedita vel consectetur vitae sed, provident totam nostrum dolores sequi corrupti saepe possimus!
                        </p>
                    </motion.div>               
                </div>
            </div>
        </div>
        <div className="mt-10 flex justify-center">
            <Link
                href="/reservation"
                className="bg-salmon hover:bg-transparent border hover:border-salmon text-blueDark font-lg hover:text-salmon w-fit duration-200 px-4 py-3 hover:px-5 hover:py-4 hover:font-bold font-typewriter"
            >
                Réserver
            </Link>
        </div>
    </div>
    </>
  );
}

export default IntroSalles