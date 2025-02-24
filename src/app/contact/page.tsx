import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { Banknote, CreditCard, Coins, Ticket } from "lucide-react";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="md:h-screen w-full flex md:flex-row flex-col gap-20 bg-blueDark">
        <div className="bg-blueDark h-screen md:w-3/5 w-full flex items-center justify-center md:pt-0 pt-36">
          <div className="w-4/5 flex md:flex-row flex-col justify-between gap-10">
            <div className="">
              <h1 className="font-tanBuster text-salmon text-3xl">V!BES</h1>
              <h2 className="font-typewriter text-salmon text-xl">Cuisine sensorielle</h2>
                <div className="text-salmon font-theSeasons flex flex-col space-y-3 items-center lg:items-start justify-center py-8">
                  <a
                    className=""
                    href="https://www.google.fr/maps/place/3+Pl.+Carnot,+11000+Carcassonne/@43.2131412,2.3498521,16z/data=!3m1!4b1!4m6!3m5!1s0x12ae2c39fa9ef60b:0x8ce60753b894c35a!8m2!3d43.2131373!4d2.352427!16s%2Fg%2F11c2h87wvp?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  >
                    3 place Carnot, 11000 Carcassonne
                  </a>
                  <a href="tel:+33">Fixe : +33  </a>
                  <a href="tel:+33">Mobile : +33 </a>
                </div>
                <div className="text-salmon font-theSeasons w-full flex flex-col space-y-3 items-center lg:items-start justify-center">
                  <p>Modes de paiment</p>
                  <div className="flex items-center space-x-10">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="scale-125">
                            <CreditCard />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="w-full bg-blueDark rounded-xl text-salmon">
                          <p>Carte de crédit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="scale-125">
                            <Banknote />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="w-full bg-blueDark rounded-xl text-salmon">
                          <p>Chèques bancaires et postaux</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="scale-125">
                            <Coins />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="w-full bg-blueDark rounded-xl text-salmon">
                          <p>Espèces</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="scale-125">
                            <Ticket />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="w-full bg-blueDark rounded-xl text-salmon">
                          <p>Ticket Restaurant</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
            </div>
            <div className="">
              <div className="text-salmon border-4 w-fit px-8 border-salmon flex flex-col items-center justify-center space-y-6">
                <h3 className="w-full text-center z-10 text-salmon border-b-4 border-salmon font-typewriter text-5xl tracking-wide">
                  Horaires
                </h3>

                <div className="flex flex-col items-center justify-center font-theSeasons">
                  <p>Juillet - Aout</p>
                  <p>Lundi - Samedi </p>
                  <p className="font-theSeasons md:text-2xl text-lg">
                    {" "}
                    12:00 - 14:00 & 18:00 - 22:00
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center font-theSeasons">
                  <p>Septembre - Juin</p>
                  <p>Mardi - Samedi </p>
                  <p className="font-theSeasons md:text-2xl text-lg pb-3
                  ">
                    {" "}
                    12:00 - 14:00 & 18:00 - 22:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blueDark md:w-2/5 w-full flex items-center justify-center md:mb-0 mb-20">
          <div className="w-4/5 md:h-[600px] h-[400px]">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5815.651768792002!2d2.349852076336333!3d43.21314118078109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae2c39fa9ef60b%3A0x8ce60753b894c35a!2s3%20Pl.%20Carnot%2C%2011000%20Carcassonne!5e0!3m2!1sfr!2sfr!4v1740423404776!5m2!1sfr!2sfr"
              className="rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
