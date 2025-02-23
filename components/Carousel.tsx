"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute h-full lg:w-28 left-0 top-0 transform bg-gray-800/70 p-2 grid place-items-center text-white z-20"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="scale-150" />
      </button>

      <button
        className="absolute h-full lg:w-28 right-0 top-0 transform bg-gray-800/70 p-2 grid place-items-center text-white z-20"
        onClick={goToNextSlide}
      >
        <ChevronRight className="scale-150" />
      </button>

      <div className="relative w-full h-[620px] z-10">
        <Image
          src={`/${images[currentIndex]}.webp`}
          alt={`Slide ${currentIndex}`}
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
