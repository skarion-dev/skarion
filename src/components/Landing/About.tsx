"use client"
import Link from 'next/link'
import Image from 'next/image'
import LogoCarousel from "../LogoCarousel"
import { useState } from 'react'

export default function About() {
    const [currentImage, setCurrentImage] = useState('/Team image.jpg')

  return (
    <div className="w-full bg-[#ffffff] py-10 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-8">
            <div className="text-[#000000] text-[36px] sm:text-[48px] md:text-[64px] leading-[1.2] text-left">
                The Skarion Story 
            </div>
            <div className="text-[18px] font-bold font-[300] pt-5 text-left w-full md:w-[40%] lg:w-[30%] ml-auto">
                <p>
                From zero-day ideation to Series B and beyond, we embed ourselves as co-founders: writing the first lines of code, modeling unit-economics down to the cent, and recruiting the exact talent required to win.  
                Our engine combines engineering, strategy, and execution. The result is a portfolio of businesses that do not just enter markets—they rewrite their economics.
                </p>
            </div>
        </div>
        <div className='border-t border-black/20 mt-10'/>
        <div className="mt-10"/>
        <div className="grid grid-cols-3 items-center text-gray-600 text-sm md:text-base">
          <div className="justify-self-start flex gap-6">
            <button onClick={() => setCurrentImage('/Team image.jpg')} className="text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Information</button>
            <button onClick={() => setCurrentImage('/Team image2.jpg')} className="text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Work</button>
            <button onClick={() => setCurrentImage('/Team image3.jpg')} className="text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Journal</button>
            <button onClick={() => setCurrentImage('/Team image4.jpg')} className="text-[18px] hover:text-black cursor-pointer transition-colors duration-200">Archive</button>
          </div>
          <div className="justify-between text-[18px] text-black font-semibold ml-auto">
            United States 
            <br/>
            <span className="ml-5 font-normal text-gray-500 text-[16px]">Bangladesh</span>
          </div>
          <div className="justify-self-center text-[18px]">+1 (415) 555 0199</div>
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

