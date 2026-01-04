"use client";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const projects = [
  {
    title: "Step 1 — Consultation",
    description:
      "Begin with a personalized assessment to understand your background, goals, and the best path into OSP engineering.",
    src: "/step1.webp",
    color: "#1a5244ff",
  },
  {
    title: "Step 2 — Enroll & Learn",
    description:
      "Join an industry-aligned bootcamp with live classes, structured modules, and real telecom workflows.",
    src: "/step2.webp",
    color: "#3372a5ff",
  },
  {
    title: "Step 3 — Build Experience",
    description:
      "Develop a project portfolio through simulated OSP design projects, AutoCAD tasks, and real-world scenarios.",
    src: "/step3.webp",
    color: "#c9af6aff",
  },
  {
    title: "Step 4 — Career Support",
    description:
      "Get resume grooming, LinkedIn optimization, mock interviews, and job search guidance tailored to telecom roles.",
    src: "/step4.webp",
    color: "#c96a6aff",
  },
  {
    title: "Step 5 — Get Hired & Pay Later",
    description:
      "Secure a job through Skarion's placement support and pay the bulk of your program fee only after you're hired.",
    src: "/step5.webp",
    color: "#bdbdbdff",
  },
];

interface CardProps {
  title: string;
  description: string;
  src: string;
  color: string;
  i: number;
}

const Card = ({ title, description, src, color, i }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    axis: "x",
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div
      ref={container}
      className="h-[80vh] sm:h-screen flex items-center justify-center sticky top-50 lg:top-24 px-4 sm:px-12 my-10"
    >
      <div
        className="relative flex flex-col sm:flex-row justify-between items-center h-auto min-h-[350px] sm:h-[400px] w-full lg:w-full rounded-2xl p-6 sm:p-10 gap-5 shadow-lg overflow-hidden"
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="flex flex-col gap-3 sm:gap-5 w-full sm:w-[45%] z-0">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[30px] font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[18px] lg:text-[18px] text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="relative w-full sm:w-[55%] h-[200px] sm:h-full rounded-xl overflow-hidden shadow-md group">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
             <Image
              fill
              src={src}
              alt={title}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between relative w-full sm:py-10 py-5 sm:px-12 px-6 max-w-[1440px] mx-auto">
      <div className="w-full lg:w-1/2 sticky top-16 sm:top-20 md:top-24 lg:top-24 h-auto lg:h-screen flex flex-col justify-center py-3 lg:py-3 bg-white z-5">
        <div className="text-[#000000] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] text-left">
              Advancing Careers Through Specialized Training
          </div>
          <div className="text-[16px] sm:text-[18px] md:text-[20px] font-[300] pt-5 text-left w-full lg:w-[80%]">
              Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.                     
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
            {/* <Link
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
            </Link> */}
        </div>
      </div>
      <div className="lg:w-1/2">
        {projects.map((p, i) => (
          <Card
            key={p.title}
            {...p}
            i={i}
          />
        ))}
      </div>
    </div>
  );
}
