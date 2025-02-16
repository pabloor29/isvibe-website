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
        delay: i * 0.2, // Délai progressif pour chaque lettre
      },
    }),
  };

function HeroBanner() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-[#001F50] to-[#002E6D]">
      <div className="h-screen w-full flex justify-center items-center bg-black/60 absolute z-10"></div>
      <img
        src="#"
        alt=""
        className="w-full h-screen object-cover absolute z-0"
      />
      <div className="relative z-20 flex flex-col items-center justify-center leading-none">
        <div className="flex flex-row">
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={1}
            className="z-30 text-white text-7xl"
            >
            V
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={3}
            className="z-30 text-white text-7xl"
            >
            I
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={5}
            className="z-30 text-white text-7xl"
            >
            B
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={7}
            className="z-30 text-white text-7xl"
            >
            E
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={9}
            className="z-30 text-white text-7xl"
            >
            '
            </motion.h1>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={11}
            className="z-30 text-white text-7xl"
            >
            S
            </motion.h1>
        </div>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          custom={13}
          className="z-10 text-white/90 lg:text-5xl text-2xl pt-10"
        >
          BISTRONOMIE
        </motion.h3>
      </div>
    </div>
  );
}

export default HeroBanner;
