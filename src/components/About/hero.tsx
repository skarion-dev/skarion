"use client"
import Link from 'next/link'
import Image from 'next/image'
import LogoCarousel from "../LogoCarousel"
import { useState } from 'react'

export default function About() {
    const [currentImage, setCurrentImage] = useState('/Team image.jpg')

  return (
    <div className="w-full bg-[#ffffff] sm:py-10 py-5 sm:px-12 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-8">
            <div className="text-[#000000] text-[36px] sm:text-[48px] md:text-[64px] leading-[1.2] text-left">
                The Skarion Story 
            </div>
            {/* <div className="text-[18px] font-semibold font-[300] pt-5 text-left w-full md:w-[40%] lg:w-[30%] ml-auto">
                <p>
                From zero-day ideation to Series B and beyond, we embed ourselves as co-founders: writing the first lines of code, modeling unit-economics down to the cent, and recruiting the exact talent required to win.  
                Our engine combines engineering, strategy, and execution. The result is a portfolio of businesses that do not just enter markets—they rewrite their economics.
                </p>
            </div> */}
        </div>
        {/* <div className='border-t border-black/20 mt-10'/> */}
        <div className="mt-10"/>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-gray-600 text-sm md:text-base gap-4 md:gap-0">
          <div className="justify-self-start flex flex-wrap gap-4 md:gap-6">
            <button onClick={() => setCurrentImage('/Team image.jpg')} className="text-[16px] md:text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Information</button>
            <button onClick={() => setCurrentImage('/Team image2.jpg')} className="text-[16px] md:text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Mission</button>
            <button onClick={() => setCurrentImage('/Team image3.jpg')} className="text-[16px] md:text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Vision</button>
            <button onClick={() => setCurrentImage('/Team image4.jpg')} className="text-[16px] md:text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Archive</button>
          </div>
          <div className="justify-self-start md:justify-self-center text-[16px] md:text-[18px] text-black font-semibold ml-0 md:ml-auto mt-4 md:mt-0">
            <span className="font-normal text-black font-semibold text-[16px] md:text-[18px]">United States</span>
            <span className="font-normal text-black text-[16px] md:text-[18px] ml-4 sm:ml-8 md:ml-20">+1 (415) 555 0199</span>
          </div>
        </div>
        <div className="mt-10 rounded-[12px] overflow-hidden">
          <div className="relative w-full h-[420px] md:h-[700px]">
            <Image
              key={currentImage}
              src={currentImage}
              alt="hero"
              width={1600}
              height={900}
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            />
          </div>
        </div>
    </div>
  )
}

