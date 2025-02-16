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
import { Variants, motion } from "framer-motion";

const links = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "A propos",
    href: "/a-propos",
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
        className="fixed w-full h-16 backdrop-blur justify-between items-center text-white px-8 z-50 hidden lg:flex"
      >
        <a href="#" className="h-16 w-16 py-2">
          <img src="#" alt="logo" />
        </a>
        <div>
          <li className="flex justify-center space-x-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="leading-none text-2xl"
              >
                {link.label}
              </a>
            ))}
          </li>
        </div>
        <Link
          href="/reservation"
          className="leading-none text-2xl"
        >
          Réservation
        </Link>
      </motion.div>

      <div className="lg:hidden fixed top-6 z-50 flex justify-between w-full px-6">
        <Sheet key="left">
          <SheetTrigger className="overflow-hidden flex justify-center items-center w-10 h-10 rounded-full shadow bg-greenBottle/50">
            <img src="#" alt="hamburger menu icon" />
          </SheetTrigger>
          <SheetContent className="bg-red-500">
            <SheetHeader>
              <SheetDescription className="flex flex-col">
                {links.map((items) => (
                  <a
                    key={items.label}
                    href={items.href}
                    className="overflow-hidden h-20 w-4/5 flex items-center text-white hover:bg-black duration-300 px-5 py-3 cursor-pointer"
                  >
                    <h3 className="text-3xl tracking-wide">
                      {items.label}
                    </h3>
                  </a>
                ))}
                <a
                  href="/reservation"
                  className="overflow-hidden h-20 w-4/5 flex items-center text-white hover:bg-black duration-300 px-5 py-3 cursor-pointer"
                >
                  <h3 className="text-3xl tracking-wide">
                    Réservation
                  </h3>
                </a>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <a
          href="/reservation"
          className="shadow cursor-pointer overflow-hidden h-10 px-3 rounded-full bg-black/50 flex items-center justify-center"
        >
          <h3 className="text-2xl tracking-wide text-white">Réserver</h3>
        </a>
        {/* <a href="/reservation" className="shadow cursor-pointer overflow-hidden w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <Utensils />
        </a> */}
      </div>
    </nav>
  );
}

export default Navbar;
