"use client";

import React from 'react';
import { Variants, motion } from "framer-motion";
import CarouselRestaurant from './CarouselRestaurant';


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

function IntroCuisine() {
  return (
    <>
    <div className="bg-blueDarkBG py-20">
        <div className="w-full flex justify-center">
            <motion.div
                initial="hiddenRight"
                whileInView="visibleRight"
                viewport={{ once: true, margin: "-20%" }}
                variants={imagesVariants}
                className="w-4/5"
            >
                <h1 className="font-tanBuster text-salmon text-3xl text-left pb-3">Notre cuisine</h1>
            </motion.div>
        </div>
        <div className="w-full flex justify-center pb-10">
            <motion.div
                initial="hiddenBottom"
                whileInView="visibleBottom"
                viewport={{ once: true, margin: "-20%" }}
                variants={imagesVariants}
                className="w-4/5"
            >
                <p className="text-salmon text-center font-theSeasons">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores eos ipsa? Esse voluptas cum maiores doloremque nobis! Inventore ratione commodi porro, expedita quibusdam esse numquam eos nobis atque libero eum accusamus praesentium consequatur nostrum blanditiis delectus nulla suscipit perferendis accusantium deleniti, odit beatae. Commodi ipsa, incidunt distinctio dicta eaque molestias sit quasi rerum quae fugit amet. Quidem ducimus suscipit et nemo veniam architecto animi, nam recusandae ipsa minima beatae iure asperiores ratione, tempore inventore est dolores temporibus praesentium rerum! Nemo, quis dolore blanditiis omnis quaerat pariatur, quod et eum quasi mollitia unde? Blanditiis facilis, et aspernatur provident ex tenetur.
                </p>
            </motion.div>
        </div>
        <CarouselRestaurant />
    </div>
    </>
  );
}

export default IntroCuisine