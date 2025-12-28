"use client"
import Link from 'next/link'
import Image from 'next/image'
import LogoCarousel from "../LogoCarousel"
import { useState } from 'react'

const logos = [
    "/benton.png",
    "/circet.png",
    "/gme.png",
    "/radd.png",
    "/westell.png",
    "/american-products.png",
    "/6wind.png",
    "/charles.png"
]

export default function About() {
  const [currentImage, setCurrentImage] = useState('/info.png')
  const [hovered, setHovered] = useState(false)

  const sections = {
    information: {
      text: "We deliver intensive, niche-skill programs that transform complete beginners into job-ready professionals—immersing you in production-grade tools, guiding you through real-world projects, and providing 1-on-1 mentorship until you secure the role.",
      img: '/info.png'
    },
    mission: {
      text: "We exist to unlock human potential by turning ambitious beginners into indispensable experts—delivering immersive, mentor-driven programs that close skill gaps, create economic mobility, and set a new gold standard for talent in every niche we touch.",
      img: '/image.png'
    },
    vision: {
      text: "To become the world’s most trusted launchpad for niche tech talent—where every graduate not only lands a life-changing career but also becomes a co-creator of the next generation of breakthrough companies.",
      img: '/vision.jpg'
    }
  }

  const currentSection = Object.entries(sections).find(([_, v]) => v.img === currentImage)?.[0] || 'information'

  return (
    <div className="w-full bg-[#ffffff] sm:py-10 py-5 sm:px-12 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-8">
            <div className="text-[#000000] text-[36px] sm:text-[48px] md:text-[64px] leading-[1.2] text-left w-full">
                The Skarion Story
                <p className="text-[16px] font-[300] pt-10 text-left w-full">
                From zero-day ideation to Series B and beyond, we embed ourselves as co-founders—writing the first lines of code, modeling unit-economics down to the cent, and recruiting the exact talent required to win.  
                Our engine combines engineering, strategy, and execution. The result is a portfolio of businesses that do not just enter markets—they rewrite their economics.
                </p> 
            </div>
        </div>
        <div className='border-t border-black/20 mt-10'/>
        <div className="mt-10"/>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-gray-600 text-sm md:text-base gap-4 md:gap-0">
          <div className="justify-self-start flex flex-wrap gap-4 md:gap-6">
            {Object.entries(sections).map(([key, { img }]) => (
              <button
                key={key}
                onClick={() => setCurrentImage(img)}
                className="text-[16px] md:text-[18px] hover:text-black cursor-pointer transition-colors duration-200 capitalize"
              >
                {key}
              </button>
            ))}
          </div>
          <div className="justify-self-start md:justify-self-center text-[16px] md:text-[18px] text-black font-semibold ml-0 md:ml-auto mt-4 md:mt-0">
            <span className="font-normal text-black font-semibold text-[16px] md:text-[18px]">United States</span>
            <span className="font-normal text-black text-[16px] md:text-[18px] ml-4 sm:ml-8 md:ml-20">+1 (415) 555 0199</span>
          </div>
        </div>
        <div className="mt-10 rounded-[12px] overflow-hidden">
          <div
            className="relative w-full h-[420px] md:h-[700px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              key={currentImage}
              src={currentImage}
              alt="hero"
              width={1600}
              height={900}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
            {/* Default gradient overlay always present */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            {/* Darken overlay shown on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent transition-opacity duration-300 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'}`} />
            {/* Text shown only on hover */}
            <div className={`absolute top-10 left-10 p-8 w-[55%] text-white transition-opacity duration-300 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'}`}>
              <i className="text-[42px] max-w-2xl">{sections[currentSection as keyof typeof sections].text}</i>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3 text-sm md:text-base text-gray-700 mt-20">
            <h2 className="text-3xl font-semibold text-black">Our Graduates are working with </h2>
        </div>
        <div className="flex justify-center mt-3 text-sm md:text-base text-gray-700 mt-10">
            <LogoCarousel logos={logos} />
        </div>
    </div>
  )
}
