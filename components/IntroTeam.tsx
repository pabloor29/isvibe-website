import Image from 'next/image';
import React from 'react'

function IntroTeam() {
  return (
    <>
    <div className="bg-blueDarkBG pb-8 py-28">
        <div className="w-ful flex justify-center">
            <div className="w-4/5">
                <h1 className="font-tanBuster text-salmon text-3xl text-right pb-3">Une équipe de choc !</h1>
            </div>
        </div>
        <div className="w-full pt-8 flex flex-col justify-center items-center">
            <div className="w-4/5">
                <div className="flex md:flex-row flex-col gap-10">
                    <div className="relative w-1/3 h-[600px] -top-44 rotate-3">
                        <Image key="img" src='/img/TEST/IMG_COOKER-001.jpeg' alt="" fill className="object-cover"/>
                    </div>
                    <div className="w-2/3">
                        <p className="text-salmon text-right font-theSeasons">
                            Lorem ipsum color sit amet consectetur adipisicing elit. Vitae ea deleniti excepturi sint laborum blanditiis placeat officia sit ipsam, eaque odio molestias tempora recusandae dolores dolore debitis nam soluta, quos voluptate dolorem enim obcaecati distinctio. Corporis inventore, expedita vel consectetur vitae sed, provident totam nostrum dolores sequi corrupti saepe possimus!
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-10">
                    <div className="w-2/3">
                        <p className="text-salmon text-left font-theSeasons">
                            Lorem ipsum color sit amet consectetur adipisicing elit. Vitae ea deleniti excepturi sint laborum blanditiis placeat officia sit ipsam, eaque odio molestias tempora recusandae dolores dolore debitis nam soluta, quos voluptate dolorem enim obcaecati distinctio. Corporis inventore, expedita vel consectetur vitae sed, provident totam nostrum dolores sequi corrupti saepe possimus!
                        </p>
                    </div>
                    <div className="relative w-1/3 h-[600px] -top-64 -rotate-3">
                        <Image key="img" src='/img/TEST/IMG_COOKER-001.jpeg' alt="" fill className="object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default IntroTeam