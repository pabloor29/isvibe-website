"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog"


const links = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Variants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "linear",
      duration: 1,
      delay: 0.5,
    },
  },
};

function Navbar() {
  return (
    <nav className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "30%" }}
        variants={Variants}
        className="fixed w-full h-16 backdrop-blur justify-between items-center text-white px-8 z-50 hidden lg:flex bg-blueDark/50"
      >
        <div className="flex justify-start w-1/5">
          <a href="#" className="h-full">
            <h1 className="font-tanBuster text-2xl text-salmon pt-2">V!BES</h1>
          </a>
        </div>
        <div>
          <li className="flex justify-center space-x-12 font-typewriter text-salmon">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="leading-none text-2xl block transition-transform duration-200 hover:-translate-y-2"
              >
                {link.label}
              </a>
            ))}
          </li>
        </div>
        <div className="w-1/5 flex justify-end">
          <Link
            href="/reservation"
            className="leading-none text-2xl font-typewriter text-salmon transition-transform duration-200 hover:-translate-y-2"
          >
            Réservation
          </Link>
        </div>
      </motion.div>

      <div className="lg:hidden fixed top-6 z-50 flex justify-between w-full overflow-hidden">
        <Sheet key="left">
          <SheetTrigger className="overflow-hidden flex justify-center items-center w-10 h-10 rounded-full bg-blueDark/50 ml-6">
            <Menu color="#FBC3BC"/>
          </SheetTrigger>
          <a
            href="/reservation"
            className="shadow cursor-pointer overflow-hidden h-10 rounded-full bg-blueDark/50 mr-8 px-2"
          >
            <h3 className="text-2xl font-typewriter tracking-wide text-salmon">Réserver</h3>
          </a>
          <SheetContent className="bg-blueDark">
            <SheetHeader className="flex flex-row justify-between">
              <SheetDescription className="flex flex-col w-3/4">
                {links.map((items) => (
                  <a
                    key={items.label}
                    href={items.href}
                    className="overflow-hidden h-20 w-3/5 flex items-center hover:bg-black duration-300 px-5 py-3 cursor-pointer"
                  >
                    <h3 className="text-3xl tracking-wide font-typewriter text-salmon">
                      {items.label}
                    </h3>
                  </a>
                ))}
              </SheetDescription>
              <SheetPrimitive.Close className="flex">
                <X color="#FBC3BC" className="h-10 w-10 mr-4"/>
                <span className="sr-only">Close</span>
              </SheetPrimitive.Close>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
