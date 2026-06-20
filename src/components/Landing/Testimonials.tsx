"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollContainer } from "../Common/ScrollContainerContext";
import Image from "next/image";

interface ITestimonial {
  src: string;
}

const testimonials: ITestimonial[] = [
  {
    src: "/testimonial-1.png",
  },
  {
    src: "/testimonial-2.png",
  },
  {
    src: "/testimonial-3.png",
  },
  {
    src: "/testimonial-4.png",
  },
  {
    src: "/testimonial-5.png",
  },
  {
    src: "/testimonial-6.png",
  },
  {
    src: "/testimonial-7.png",
  },
  {
    src: "/testimonial-8.png",
  },
  {
    src: "/testimonial-9.png",
  },
];

export default function Testimonials() {
  const container = useRef(null);
  const scrollContainerRef = useScrollContainer();

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-500, 700]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-600, 1200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-1000, 900]);

  return (
    <div className="w-full bg-[#ffffff] py-10 sm:px-12 px-6 h-[200vh] overflow-hidden max-w-[1440px] mx-auto">
      <h1 className="text-[#000000] text-[40px] sm:text-[64px] leading-[1.2] text-left">
              Success Stories
            </h1>
            <div className="text-sm sm:text-base md:text-lg font-[300] pt-5 text-left w-full lg:w-[50%]">
              Discover how our guidance helps driven professionals overcome hiring obstacles and step confidently into the next chapter of their careers.
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-5 mt-8">
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
                  <span className="ml-[8px] text-gray-500 text-[12px] font-[600]">4.8 (30+)</span>
                </div>
                <span className="text-[12px] font-[400]">Trusted by 70+ Professionals Worldwide</span>
              </div>
            </div>
      <div ref={container} className="flex gap-6 overflow-hidden">
        <Column
          testimonials={[
            testimonials[6],
            testimonials[7],
            testimonials[8],
            testimonials[6],
            testimonials[7],
            testimonials[8],
          ]}
          y={y1}
          className="w-full sm:w-1/2 lg:w-1/3 "
        />
        <Column
          testimonials={[
            testimonials[0],
            testimonials[1],
            testimonials[2],
            testimonials[0],
            testimonials[1],
            testimonials[2],
          ]}
          y={y3}
          className="hidden sm:flex sm:w-1/2 lg:w-1/3 "
        />
        <Column
          testimonials={[
            testimonials[3],
            testimonials[4],
            testimonials[5],
            testimonials[3],
            testimonials[4],
            testimonials[5],
          ]}
          y={y2}
          className="hidden lg:flex lg:w-1/3 "
        />
      </div>
    </div>
  );
}

const Column = ({
  testimonials,
  y,
  className = "",
}: {
  testimonials: ITestimonial[];
  y: MotionValue<number>;
  className?: string;
}) => {
  return (
    <motion.div style={{ y }} className={`flex flex-col ${className}`}>
      {testimonials.map((item, i) => {
        return (
          <div
            key={i}
            className={`break-inside-avoid mb-6 border border-gray-300 rounded-xl flex flex-col will-change-transform transform-gpu`}
          >
            <Image
              src={item.src}
              alt="Testimonial"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
