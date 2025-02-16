import React from 'react'
import Image from 'next/image';

const images = [
    {
      title: "Accueil",
      href: "/img/EVENT/EVENT_saint-valentin.jpg",
    },
    {
      title: "A propos",
      href: "/img/EVENT/EVENT_festival-1.jpg",
    },
  ];

function Event() {
  return (
    <div className="py-24 flex flex-col items-center">
        <div className="w-2/3">
            <div className="">
                <h1>Évènements à venir</h1>
            </div>
            <div className="">
                <h1>Évènements passés</h1>
                <div className="w-full flex md:justify-start justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {images.map((image) => (
                        <Image key={image.title} src={image.href} alt={image.title} width={200} height={1}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Event;