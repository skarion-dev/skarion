"use client";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What career support do you offer after course completion?',
    answer: 'We provide end-to-end career support that includes one-on-one résumé reviews, LinkedIn profile optimization, mock interviews with industry mentors, and curated job-board access for life. Our dedicated placement team actively connects graduates to partner companies and schedules on-campus hiring drives every month. You also gain lifetime access to our alumni network and quarterly career-growth webinars led by senior engineers and recruiters from top tech firms.',
  },
  {
    question: 'How long do I retain access to course materials and future updates?',
    answer: 'Your enrollment grants you lifetime access to all video lectures, code repositories, reading materials, and every future update at no extra cost. We continuously refresh the curriculum to reflect the newest industry standards—be it a React 19 upgrade or the latest AWS certification objectives—so your knowledge stays future-proof. You can revisit lessons, download supplementary resources, and practice on cloud labs whenever you need a refresher.',
  },
  {
    question: 'Can I switch tracks or upgrade my course bundle later?',
    answer: 'Absolutely. You can upgrade from a single track to a full-stack bundle or add specialized modules like DevOps, Data Engineering, or AI/ML within six months of purchase by paying only the price difference. Our academic advisors evaluate your progress, recommend the best learning path, and transfer your existing assignments so you do not lose momentum or repeat completed work.',
  },
  {
    question: 'Do you provide any money-back guarantee or refund policy?',
    answer: 'We offer a 14-day no-questions-asked refund policy on all individual courses and a 30-day refund window on bundled programs. If you feel the content, mentorship, or career services do not meet your expectations, simply email support@company.com with your invoice and we will process a full refund within 5–7 business days. Refunds are eligible as long as you have completed less than 25 % of the curriculum to protect our intellectual property.',
  },
  {
    question: 'How are the classes delivered and what if I miss a live session?',
    answer: 'Each course blends weekly live Zoom sessions with senior instructors and self-paced pre-recorded modules hosted on our LMS. Every live class is recorded in high definition and uploaded within two hours, accompanied by timestamped notes and downloadable code. If you miss a session, you can watch the replay, post questions in the class forum, and book a free 15-minute doubt-clearing slot with the instructor before the next live meeting.',
  },
];

const FAQPage: React.FC = () => {
  return (
    <div className="w-full bg-[#ffffff] py-5 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
        Frequently Asked Questions
      </h1>
      <Accordion type="multiple" className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border-b border-[#EBEBEB] last:border-b-0"
          >
            <AccordionTrigger className="hover:no-underline text-left py-3 sm:py-4 md:py-5">
              <span className="font-medium text-[14px] sm:text-[16px] md:text-[18px] text-gray-800">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              <div className="pb-3 sm:pb-4 md:pb-5 text-gray-600 text-[13px] sm:text-[14px] md:text-[16px]">
                {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQPage;