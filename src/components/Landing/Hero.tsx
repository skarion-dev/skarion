"use client";
import Link from "next/link";
import LogoCarousel from "../LogoCarousel";
import { motion } from "framer-motion";
import Image from "next/image";
import SwiperComponent from "../SwiperComponent";
import SocialCards from "../SocialCards";
import Counter from "../Counter";
import Steps from "../Steps";

const logos = [
  "/benton.png",
  "/circet.png",
  "/gme.png",
  "/radd.png",
  "/westell.png",
];

const images = [
  "/image 1.jpg",
  "/image 3.jpg",
  "/image 2.jpg",
  "/profile 1.jpg",
  "/profile 2.jpg",
  "/rabbi.png",
];

export default function Hero() {
  return (
    <div className="w-full bg-[#ffffff] py-10 sm:px-12 px-6 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:space-x-8">
        <div className="w-full lg:w-[60%]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-5 mt-2">
              <div className="flex -space-x-2">
                  <Image src="/image 1.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
                  <Image src="/profile 1.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
                  <Image src="/image 3.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
                  <Image src="/profile 2.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
              </div>
              <div className="flex flex-col justify-between">
                  <div className="flex items-center gap-[2px] text-[#f5b942]">
                      <span className="text-base">★</span>
                      <span className="text-base">★</span>
                      <span className="text-base">★</span>
                      <span className="text-base">★</span>
                      <span className="text-base">★</span>
                      <span className="ml-[8px] text-gray-500 text-[12px] font-[600]">4.8 (10+)</span>
                  </div>
                  <span className="text-[12px] font-[400]">Trusted by 20+ Students Worldwide</span>
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
        <div className="w-full lg:w-[35%]">
            <div className="rounded-[14px] h-[200px] relative flex-2 bg-[#122461] mt-4">
            </div>
            <div className="text-[16px] font-[400] pt-10 pb-7 text-left">
                Upskilling teams in 20+ companies
            </div>
            <LogoCarousel logos={logos} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:space-x-8 pt-12">
        <div className="flex flex-col gap-8 w-full lg:w-[62%] h-auto lg:h-[500px]">
          <div className="relative rounded-[14px] flex-2"> 
            <Steps />
          </div>
          <div className="flex flex-row items-start justify-between flex-1 space-x-8">
            <div className="flex justify-between bg-[#122461] rounded-[14px] w-[70%] h-full pt-2 py-6 px-6"></div>
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
                className="w-full h-full relative shrink-0 overflow-hidden rounded-xl bg-indigo-500 py-[8px] px-[18px]"
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
                    <Counter value={50} />
                  </motion.span>
                  <p className="text-[#ffffff] text-[14px] font-[500] leading-[1.3] mt-[1px]">
                    Candidates Have Found a Career in the US Through Skarion
                  </p>
                </div>
                <Background />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-8 bg-[#ffffff] rounded-[14px] w-full md:w-[35%] min-h-[200px] sm:min-h-[280px] md:min-h-[500px] h-[200px] sm:h-[260px] md:h-[510px]">
          <SwiperComponent images={images} />
        </div>
      </div>
    </div>
  );
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
