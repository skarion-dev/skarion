"use client";

import { useState } from "react";
import Image from "next/image";

type CardId = "dribbble" | "behance" | "linkedin" | "twitter" | "hired" | "coaching";

const steps = [
  {
    title: "Step 1 — Career Assessment",
    detail:
      "We’ll start with a consultation to understand your background, skills, and career goals. Then, we will look at your experience to create a customized plan for your ideal roles.",
    image: "/step1.jpg",
  },
  {
    title: "Step 2 — Personalized Roadmap",
    detail:
      "Receive tailored job search strategies and industry guidance specific to your situation. This includes identifying target companies, required certifications, skill gaps to address, and timeline expectations.",
    image: "/step2.jpg",
  },
  {
    title: "Step 3 — Skill Development",
    detail: "If you want a skill that gets you hired quickly, we offer courses to help you master AutoCAD, GIS, fiber optic design, and permitting processes through real-world projects and hands-on practice.",
    image: "/step3.jpg",
  },
  {
    title: "Step 4 — Resume & Profile Optimization",
    detail: "We will build an ATS-friendly resume and a LinkedIn profile that highlights your skills and experience. This ensures your application passes automated screening and catches hiring managers' attention.",
    image: "/step4.jpg",
  },
  {
    title: "Step 5 — Active Job Placement",
    detail: "We apply for roles on your behalf, targeting positions that match your skills and career goals. Our team maintains direct relationships with hiring managers, giving you access to unadvertised opportunities.",
    image: "/step5.jpg",
  },
  {
    title: "Step 6 — Interview Coaching",
    detail: "Prepare for interviews with mock sessions tailored to the specific roles you're pursuing. We cover technical questions, behavioral scenarios, salary negotiations, and company research strategies.",
    image: "/pay when hired.jpg",
  },
];

export default function SocialCards() {
  const [activeCard, setActiveCard] = useState<CardId>("dribbble");
  const [activeStep, setActiveStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "reverse">("forward");
  const cardIds: CardId[] = [
    "dribbble",
    "behance",
    "linkedin",
    "twitter",
    "hired",
    "coaching"
  ];

  return (
    <div className="cards w-full min-h-[330px] h-full h-auto" data-direction={direction}>
      {cardIds.map((id, idx) => (
        <div
          key={id}
          className={`card ${activeCard === id ? "active" : ""}`}
          id={id}
        >
          <button
            type="button"
            className={`card-toggle ${activeStep === idx + 1 && activeCard === id ? "active" : "inactive"}`}
            onClick={() => {
              setDirection(idx + 1 > activeStep ? "forward" : "reverse");
              setActiveCard(id);
              setActiveStep(idx + 1);
            }}
          >
            <i>{idx + 1}</i>
          </button>

          <div className="card-content text-white relative w-full h-full overflow-hidden">
            <Image
              src={steps[idx].image}
              alt={steps[idx].title}
              fill
              className="object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
            <div className="row h-full relative z-10">
              <div className="left col px-8">
                <span className="px-3 py-1 rounded-full bg-white/20 text-[12px] sm:text-[14px] md:text-[14px] lg:text-[12px] inline-block">
                  SKARION PROGRAM STEPS
                </span>
                <h2 className="mt-5 text-[24px] sm:text-[28px] md:text-[30px] lg:text-[36px] font-[600]">
                  {steps[idx].title}
                </h2>
                <p className="mt-2 max-w-lg text-white/90 text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                  {steps[idx].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
