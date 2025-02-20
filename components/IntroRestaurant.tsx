"use client";

import React from 'react'
import { Variants, motion } from "framer-motion";
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

function IntroRestaurant() {
  return (
    <>
    <div className="w-full flex flex-col items-center justify-center py-14 bg-blueDarkBG">
        <div className="flex md:flex-row flex-col md:w-4/5 w-5/6 md:gap-32 gap-10 text-center text-salmon">
            <motion.div
                initial="hiddenRight"
                whileInView="visibleRight"
                viewport={{ once: true, margin: "-20%" }}
                variants={imagesVariants}
                className="font-theSeasons"
            >
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis! Perspiciatis repellat et quia accusantium voluptatum, dolor quos quas pariatur suscipit veniam in officia magnam deserunt itaque dolore ducimus amet.
            </p>
            </motion.div>
            <motion.div
                initial="hiddenLeft"
                whileInView="visibleLeft"
                viewport={{ once: true, margin: "-20%" }}
                variants={imagesVariants}
                className="font-theSeasons"
            >
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis! Perspiciatis repellat et quia accusantium voluptatum, dolor quos quas pariatur suscipit veniam in officia magnam deserunt itaque dolore ducimus amet.
            </p>
            </motion.div>
        </div>
        <div className="md:w-1/5 w-2/5 h-1 bg-salmon my-12">
        </div>
        <div className="relative w-screen md:h-[500px] h-[250px]">
            <Image src='/img/TEST/IMG_RESTAURANT_TEST-001.jpeg' alt="restaurant" fill className="object-cover"/>
        </div>
    </div>
    </>
  );
}

export default IntroRestaurant