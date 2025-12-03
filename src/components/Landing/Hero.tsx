'use client'
import Link from "next/link"
import Image from "next/image"
import LogoCarousel from "../LogoCarousel"
import SlideshowCarousel from "../SlideshowCarousel"
import Card from "../SquishyCard"
import { motion } from "framer-motion"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const logos = [
    "/6wind.png",
    "/adb.png",
    "/tplink.png",
    "/benton.png",
    "/aspire.png",
    "/netadmin.png",
    "/wav.png",
    "/radd.png"
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
        <div className="w-full bg-[#ffffff] py-10 px-12">
            <div className="flex flex-row items-start justify-between space-x-8">
                <div className="w-[60%]">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex -space-x-2">
                            <Image src="/image 1.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover" />
                            <Image src="/profile 1.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover" />
                            <Image src="/image 3.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover" />
                            <Image src="/profile 2.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 text-[#f5b942]">
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="ml-2 text-[#000000] text-sm font-semibold">4.8 (10+)</span>
                            </div>
                            <span className="text-gray-600 text-sm">Trusted by 4+ Students Worldwide</span>
                        </div>
                    </div>
                    <div className="text-[#000000] text-[64px] leading-[1.2] text-left">
                        Advancing Careers Through Specialized Training
                    </div>
                    <div className="text-[20px] font-[300] pt-5 text-left w-[80%]">
                        Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.                     
                    </div>
                    <div className="flex gap-6 mt-8">
                        <Link
                            href="/contact"
                            className="bg-[#122461] rounded-[8px] px-6 py-3 flex justify-center items-center gap-2 group transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                            <p className="text-[#FFFFFF] text-[12px] sm:text-[14px] font-[500] flex">
                                Book Consultation Call
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
                            href="/contact"
                            className="border-[1px] border-black rounded-[8px] px-6 py-3 flex justify-center items-center gap-2 group cursor-pointer whitespace-nowrap"
                        >
                            <p className="text-[12px] sm:text-[14px] font-[500] flex">
                                Learn More About Skarion
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="w-[35%] mt-12">
                    <motion.div whileHover="hover" className="relative bg-[#EBEBEB] border border-[#EBEBEB] rounded-[14px] h-[180px]">
                        <TeamBackground />
                        <div className="absolute bottom-0 bg-[#ffffff] border rounded-[14px] h-[150px] z-5 w-full">
                        </div>
                    </motion.div>
                    <div className="text-[16px] font-[400] pt-5 pb-7 text-left">
                        Upskilling teams in 20+ companies
                    </div>
                    <LogoCarousel logos={logos} />
                </div>
            </div>
            <div className="flex flex-row items-start justify-between space-x-8 pt-12">
            <div className="flex flex-col gap-8 w-[62%] h-[500px]">
                <div className="rounded-[14px] relative flex-2 bg-[#122461]">
                </div>
                <div className="flex flex-row items-start justify-between flex-1 space-x-8">
                    <div className="flex flex-col justify-between bg-[#c3ddf5] rounded-[14px] w-[70%] h-full pt-4 pb-6 px-6">
                    </div>
                        <div className="w-[30%] h-full">
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
                                  className="block origin-top-left text-[#ffffff] text-[72px] font-[600] leading-[1.1]"
                                >
                                  50+
                                </motion.span>
                                <p className="text-[#ffffff] text-[14px] font-[500] leading-[1.3]">
                                  Candidates Have Trusted Skarion to Launch Their Careers
                                </p>
                              </div>
                            <Background />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 bg-[#fffff] rounded-[14px] w-full md:w-[35%] min-h-[200px] sm:min-h-[260px] md:min-h-[495px]">
                <SlideshowCarousel logos={images} />
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

const TeamBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-visible w-full h-full"
      variants={{
        hover: {
          scale: 1,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.img
        src="/arifin.png"
        alt="arifin"
        className="w-[100%] h-[100%] object-contain"
        variants={{
          hover: {
            y: -80,
            scale: 1.5,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
      />
    </motion.div>
  );
};
