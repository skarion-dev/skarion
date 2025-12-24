"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollContainer } from "../Common/ScrollContainerContext";

interface ITestimonial {
  name: string;
  text: string;
  avatar: string;
}

const testimonials: ITestimonial[] = [
  {
    name: "Lauren Layre",
    text: "Skarion's hands-on approach gave me the real-world skills I needed to jumpstart my career in OSP Engineering. The training was both practical and challenging!",
    avatar: "/lauren.avif",
  },
  {
    name: "Tanvi Rakshe",
    text: "I’ve gained valuable industry insights and practical knowledge from Skarion's focused bootcamp. The career support they offer is unparalleled.",
    avatar: "/hadria.avif",
  },
  {
    name: "Bobby Shaw",
    text: "The comprehensive curriculum and expert instructors at Skarion provided me with all the tools to succeed in fiber-optic design. Highly recommend!",
    avatar: "/nicolas.avif",
  },
  {
    name: "Arnold Wei",
    text: "Skarion’s real-world training environment helped me build confidence and gave me the technical skills to land a job in telecom engineering.",
    avatar: "/steffan.avif",
  },
  {
    name: "Hadria",
    text: "What I loved most about Skarion was the collaboration with people from diverse backgrounds, creating an enriching learning environment that mirrors the workplace.",
    avatar: "/andy.avif",
  },
  {
    name: "Neer Chaudhury",
    text: "Skarion provided me with practical training that directly applies to the job market, and their job placement assistance helped me secure my position.",
    avatar: "/jake.avif",
  },
  {
    name: "Mariam Gagnidze",
    text: "Skarion’s bootcamp reflects real-life work scenarios with industry professionals guiding us every step of the way. It's been a game-changer for my career.",
    avatar: "/neer.avif",
  },
  {
    name: "Esther Plaatsman",
    text: "The hands-on training and mentorship I received at Skarion gave me the confidence and skills to succeed in my OSP engineering role.",
    avatar: "/bobby.avif",
  },
  {
    name: "Steffan Morris Hernandez",
    text: "Thanks to Skarion, I gained the technical expertise and job-readiness that allowed me to thrive in my new engineering position. A great investment in my future!",
    avatar: "/mariam.avif",
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
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-1000, 900]);

  return (
    <div className="w-full bg-[#ffffff] py-10 sm:px-12 px-6 h-[60vh] overflow-hidden max-w-[1440px] mx-auto">
      <div ref={container} className="flex gap-6 overflow-hidden">
        <Column
          testimonials={[
            testimonials[0],
            testimonials[1],
            testimonials[2],
            testimonials[3],
            testimonials[4],
            testimonials[5],
            testimonials[0],
            testimonials[1],
            testimonials[2],
          ]}
          y={y1}
          className="w-full sm:w-1/2 lg:w-1/3 "
        />
        <Column
          testimonials={[
            testimonials[0],
            testimonials[1],
            testimonials[2],
            testimonials[3],
            testimonials[4],
            testimonials[5],
            testimonials[0],
            testimonials[1],
            testimonials[2],
          ]}
          y={y3}
          className="hidden sm:flex sm:w-1/2 lg:w-1/3 "
        />
        <Column
          testimonials={[
            testimonials[0],
            testimonials[1],
            testimonials[2],
            testimonials[3],
            testimonials[4],
            testimonials[5],
            testimonials[0],
            testimonials[1],
            testimonials[2],
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
            className={`break-inside-avoid mb-6 border border-gray-300 rounded-xl p-5 flex flex-col will-change-transform transform-gpu`}
          >
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-[30px] h-[30px] rounded-[10px]"
              />
              <span className="text-[16px] font-[500]">{item.name}</span>
            </div>
            <p className="text-[16px] font-[400] mt-3">{item.text}</p>
          </div>
        );
      })}
    </motion.div>
  );
};
