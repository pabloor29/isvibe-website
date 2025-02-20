"use client";

import { Variants, motion } from "framer-motion";
import React from "react";

const textVariants: Variants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
        delay: i * 0.2,
      },
    }),
  };

function HeroBanner() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-blueDark">
      <div className="relative z-20 flex flex-col items-center justify-center leading-none">
        <div className="flex flex-row">
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={1}
            className="z-30 text-salmon md:text-9xl text-6xl font-tanBuster"
            >
            V
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={2}
            className="z-30 text-salmon md:text-9xl text-6xl font-tanBuster"
            >
            !
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={3}
            className="z-30 text-salmon md:text-9xl text-6xl font-tanBuster"
            >
            B
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={4}
            className="z-30 text-salmon md:text-9xl text-6xl font-tanBuster"
            >
            E
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={5}
            className="z-30 text-salmon md:text-9xl text-6xl font-tanBuster"
            >
            '
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={6}
            className="z-30 text-salmon md:text-9xl text-6xl font-tanBuster"
            >
            S
            </motion.h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={9}
            className="z-10 text-salmon/90 lg:text-4xl text-2xl pt-5 font-typewriter"
          >
            CUISINE
          </motion.h3>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={9}
            className="z-10 text-salmon/90 lg:text-2xl text-2xl pt-5 font-typewriter"
          >
            SENSORIELLE
          </motion.h3>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
