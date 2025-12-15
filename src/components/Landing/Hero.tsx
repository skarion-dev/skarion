'use client'
import Link from "next/link"
import LogoCarousel from "../LogoCarousel"
import { motion } from "framer-motion"
import Image from "next/image"
import SwiperComponent from "../SwiperComponent"
import Counter from "../Counter"
import Steps from "../Steps"

const logos = [
    "/benton.png",
    "/circet.png",
    "/gme.png",
    "/radd.png",
    "/westell.png",
]

const images=[
    "/image 1.jpg",
    "/image 3.jpg",
    "/image 2.jpg",
    "/profile 1.jpg",
    "/profile 2.jpg"
]

export default function Hero() {
    return (
        <div className="w-full bg-[#ffffff] py-10 px-4 sm:px-12 px-6 ">
            {/* Top section: two columns on desktop, stack on small screens */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:space-x-8">
                {/* Left column: text & CTA */}
                <div className="w-full lg:w-[60%]">
                    <div className="flex items-center gap-4 mb-5 mt-2">
                        <div className="flex -space-x-2">
                            <Image src="/image 1.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                            <Image src="/profile 1.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                            <Image src="/image 3.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                            <Image src="/profile 2.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex items-center gap-[2px] text-[#f5b942]">
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="ml-[8px] text-gray-500 text-[14px] font-[600]">4.8 (10+)</span>
                            </div>
                            <span className="text-[14px] font-[400]">Trusted by 20+ Students Worldwide</span>
                        </div>
                    </div>
                    <div className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.2] text-left">
                        Advancing Careers Through Specialized Training
                    </div>
                    <div className="text-base sm:text-lg md:text-[20px] font-[300] pt-5 text-left w-full lg:w-[80%]">
                        Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.                     
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                        <Link
                            href="https://outlook.office.com/book/SkarionConsultationCall@inuberry.com/?ismsaljsauthenabled"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#122461] rounded-[8px] px-6 py-3 flex justify-center items-center gap-2 group transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                            <p className="text-[#FFFFFF] text-[12px] sm:text-[14px] font-[500] flex">
                                Book a Consultation Call
                                <span className="inline-block w-0 overflow-hidden group-hover:w-[72px] transition-all duration-300 whitespace-nowrap">
                                    , It&apos;s FREE!
                                </span>
                            </p>
                            <svg
                                className="my-auto"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.834 10.4998C18.834 5.89984 15.1007 2.1665 10.5007 2.1665C5.90065 2.1665 2.16732 5.89984 2.16732 10.4998C2.16732 15.0998 5.90065 18.8332 10.5007 18.8332C15.1007 18.8332 18.834 15.0998 18.834 10.4998ZM10.4757 13.4415C10.3507 13.3165 10.2923 13.1582 10.2923 12.9998C10.2923 12.8415 10.3507 12.6832 10.4757 12.5582L11.909 11.1248L7.58399 11.1248C7.24232 11.1248 6.95899 10.8415 6.95899 10.4998C6.95899 10.1582 7.24232 9.87484 7.58399 9.87484L11.909 9.87484L10.4757 8.4415C10.234 8.19984 10.234 7.79984 10.4757 7.55817C10.7173 7.3165 11.1173 7.3165 11.359 7.55817L13.859 10.0582C14.1007 10.2998 14.1007 10.6998 13.859 10.9415L11.359 13.4415C11.1173 13.6832 10.7173 13.6832 10.4757 13.4415Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/About"
                            className="border-[1px] border-black rounded-[8px] px-6 py-3 flex justify-center items-center gap-2 group cursor-pointer whitespace-nowrap"
                        >
                            <p className="text-[12px] sm:text-[14px] font-[500] flex">
                                Learn More About Skarion
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Right column: placeholder + logos */}
                <div className="w-full lg:w-[35%]">
                    <div className="rounded-[14px] h-[200px] relative flex-2 bg-[#122461] mt-4">
                    </div>
                    <div className="text-[16px] font-[400] pt-10 pb-7 text-left">
                        Upskilling teams in 20+ companies
                    </div>
                    <LogoCarousel logos={logos} />
                </div>
            </div>

            {/* Bottom section: two columns on desktop, stack on small screens */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:space-x-8 pt-12">
                {/* Left block: Steps + stats */}
                <div className="flex flex-col gap-8 w-full lg:w-[62%] h-auto lg:h-[500px]">
                    <div className="relative rounded-[14px] text-white flex-2 bg-[#122461]"> 
                      <Steps />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start justify-between flex-1 gap-4 sm:space-x-4 lg:space-x-8">
                        <div className="text-left grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-[14px] w-full h-full pt-4 pb-6 px-6">
                            {/* <div className="flex flex-col items-start justify-center">
                                <Counter value={100} duration={2} />
                                <p className="text-[#122461] text-lg md:text-[24px] font-[600] leading-[1.3] mt-1">Total Registration</p>
                            </div>
                            <div className="flex flex-col items-start justify-center ">
                                <Counter value={50} duration={2} />
                                <p className="text-[#122461] text-lg md:text-[24px] font-[600] leading-[1.3] mt-1">Total Certifications</p>
                            </div>
                            <div className="flex flex-col items-start justify-center ">
                                <Counter value={20} duration={2} />
                                <p className="text-[#122461] text-lg md:text-[24px] font-[600] leading-[1.3] mt-1">Job Placements</p>
                            </div> */}
                        </div>
                        {/* 50+ card */}
                        <div className="w-full sm:w-auto h-auto sm:min-w-[10%] min-h-[80%] lg:h-full">
                            <motion.div
                              whileHover="hover"
                              transition={{
                                duration: 1,
                                ease: "backInOut",
                              }}
                              variants={{
                                hover: {
                                  scale: 1.05,
                                },
                              }}
                              className="w-full h-full relative shrink-0 overflow-hidden rounded-xl bg-indigo-500 py-[5px] px-[18px]"
                            >
                              <div className="relative flex flex-col justify-between z-10 text-white">
                                <motion.span
                                  initial={{ scale: 0.85 }}
                                  variants={{
                                    hover: {
                                      scale: 1,
                                    },
                                  }}
                                  transition={{
                                    duration: 1,
                                    ease: "backInOut",
                                  }}
                                  className="block origin-top-left text-[#ffffff] text-5xl md:text-[72px] font-[600] leading-[1.1]"
                                >
                                  50+
                                </motion.span>
                                <p className="text-[#ffffff] text-sm md:text-[14px] font-[500] leading-[1.3]">
                                  Candidates Have Trusted Skarion to Launch Their Careers
                                </p>
                              </div>
                            <Background />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Right block: image swiper */}
            <div className="relative flex flex-col gap-8 bg-[#ffffff] rounded-[14px] w-full lg:w-[35%] min-h-[200px] sm:min-h-[260px] md:min-h-[495px] h-[200px] sm:h-[260px] md:h-[500px]">
                <SwiperComponent images={images} />
            </div>
        </div>
        </div>
    )
}

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 170 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 3,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            y: -5,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#122461"
      />
    </motion.svg>
  );
};
