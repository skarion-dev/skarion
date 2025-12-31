"use client";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';

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
  {
    question: 'Is there any prerequisite coding experience required to enroll?',
    answer: 'No prior experience is required for our beginner-friendly tracks. We start with foundational concepts and gradually progress to advanced topics. For specialized courses like AI/ML or DevOps, we provide preparatory modules to ensure everyone starts on equal footing. Our mentors also conduct weekly beginner clinics to help you ramp up quickly.',
  },
  {
    question: 'What kind of hands-on projects will I build during the program?',
    answer: 'You will build 12+ production-grade projects including a full-stack e-commerce platform, real-time chat application, CI/CD pipeline for microservices, and an end-to-end machine-learning pipeline. Each project is code-reviewed by senior engineers and deployed to live cloud environments so you graduate with a portfolio that impresses recruiters.',
  },
  {
    question: 'How quickly can I expect to land a job after graduation?',
    answer: 'Our average placement time is 92 days. Graduates who actively engage with career services, attend hiring drives, and apply to at least five curated openings per week typically receive their first offer within 60–75 days. We stay accountable: if you do not secure interviews within 120 days, we provide an additional 1-on-1 career coach at no charge.',
  },
  {
    question: 'Are the instructors active industry professionals?',
    answer: 'Yes, every instructor is currently employed as a senior or staff engineer at companies like Google, Amazon, or Stripe. They teach part-time so the curriculum stays aligned with real-world practices. You will learn the exact stack, tooling, and deployment patterns these companies use today, not outdated academic theory.',
  },
  {
    question: 'What financing options or scholarships are available?',
    answer: 'We offer 0 % interest monthly installment plans for up to 24 months, early-bird discounts up to 30 %, and diversity scholarships that cover 50 % tuition for underrepresented groups. Veterans can use GI Bill benefits, and we partner with SkillsFund for low-rate student loans. Application decisions are released within 48 hours.',
  },
  {
    question: 'Will I receive a certificate recognized by employers?',
    answer: 'Upon successful completion you receive a blockchain-verified digital certificate that employers can instantly authenticate. The certificate lists the exact skills mastered, GitHub portfolio links, and a unique verification ID. Over 850 companies have hired our graduates and actively recruit from our alumni pool.',
  },
  {
    question: 'How much time should I dedicate each week?',
    answer: 'We recommend 10–12 hours per week for working professionals: 3 hours for live sessions, 4 hours for project work, and 3–5 hours for self-paced videos and quizzes. The schedule is flexible—if you need to pause, you can freeze your membership for up to 3 months and resume without losing progress.',
  },
  {
    question: 'Do you offer mentorship outside class hours?',
    answer: 'Yes, mentors are available 7 days a week via Slack with a median response time of 37 minutes. You can book unlimited 30-minute screen-share sessions, post code snippets for review, or join daily office-hour Zoom rooms. Mentors also conduct mock white-board sessions every weekend to sharpen your algorithmic thinking.',
  },
  {
    question: 'What technologies and tools are covered in the curriculum?',
    answer: 'The stack includes React 18, Next.js 14, TypeScript, Node.js, Express, PostgreSQL, Redis, Docker, Kubernetes, AWS CDK, GitHub Actions, Jest, Cypress, Terraform, and Prometheus. You will also use industry-standard tools such as Figma, Linear, Notion, and Datadog to simulate a real development workflow.',
  },
  {
    question: 'How do you keep the curriculum updated with industry changes?',
    answer: 'Our curriculum council meets bi-weekly to analyze release notes from major frameworks, job-board trend data, and recruiter feedback. When a significant update occurs—like React Server Components or AWS Lambda response streaming—we film new lessons within 10 days and deprecate outdated videos, ensuring you always learn the latest best practices.',
  },
];

const FAQPage: React.FC = () => {
  return (
    <div className="w-full bg-[#ffffff] sm:py-5 sm:pl-2  max-w-[1440px] mx-auto">
      <div className="max-w-4xl">
        <p className="text-gray-400 text-[14px] font-medium uppercase tracking-wider mb-2">FAQ</p>
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.4] font-[500] text-[#0a0a0a] mb-8 text-left">
          Got a question?
        </h3>
        <Accordion type="multiple" className="w-full space-y-3">
          {faqData.slice(0, 6).map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-[#EBEBEB] rounded-lg bg-transparent px-2 last:border-b"
            >
              <AccordionTrigger className="hover:no-underline py-4 justify-start gap-3 group [&>svg:last-child]:hidden">
                <ChevronRightIcon className="size-5 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-90 shrink-0" />
                <span className="font-[400] text-[16px] sm:text-[18px] text-black text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-8 sm:pl-8">
                <div className="text-gray-700 text-[14px] font-[300] leading-relaxed">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
