'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SlideshowCarousel({ logos }: { logos: string[] }) {
  const extendedLogos = [...logos, ...logos, ...logos];
  const middleStart = logos.length; // start in the middle block

  const [currentIndex, setCurrentIndex] = useState(middleStart);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // when we go too far into the last block, snap back to middle
        if (prev >= 2 * logos.length) {
          return middleStart;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length, middleStart]);
    return (
        <div
            className="relative rounded-[14px] w-full h-[495px] overflow-hidden hover:scale-[1.01] duration-700">
            {/* <div className="flex h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {logos.map((color, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full rounded-[14px]" style={{ backgroundColor: color }}/>
                ))}
            </div> */}

            <div className="flex h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full relative">
                        <Image
                            src={logo}
                            alt="logo"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}
