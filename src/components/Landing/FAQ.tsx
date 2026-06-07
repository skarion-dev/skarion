"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    "question": "What is OSP (Outside Plant) Engineering?",
    "answer": "OSP engineering involves designing and building the fiber-optic and telecom infrastructure outside buildings, such as on streets, poles, and underground routes."
  },
  {
    "question": "How does a career in the OSP industry look?",
    "answer": "OSP engineers work in a stable, high-demand field with growth potential, involving tasks like fiber network design, installation, testing, and maintenance."
  },
  {
    "question": "What is Skarion?",
    "answer": "Skarion is a career-focused bootcamp that equips you with job-ready skills and helps you get hired through expert training and personalized support."
  },
  {
    "question": "Why choose Skarion over free courses?",
    "answer": "Free courses teach concepts. Skarion prepares you for employment with hands-on training, resume grooming, interview preparation, and active job placement support."
  },
  {
    "question": "What if I don’t get a job?",
    "answer": "If you don’t get placed within 120 days, your initial deposit is refunded (terms apply)."
  },
  {
    "question": "Is there a money-back guarantee if I don’t get a job?",
    "answer": "Yes, if you don’t get placed within 120 days, your deposit is refunded (terms apply)."
  },
  {
    "question": "How does this process work?",
    "answer": "You train → practice job-ready skills → get resume & interview prep → apply with guidance → get placed."
  },
  {
    "question": "Will someone assist me personally?",
    "answer": "Yes, a dedicated team supports your training, applications, and interviews."
  },
  {
    "question": "When do I have to pay?",
    "answer": "You pay a small deposit to start, and the remaining amount is paid only after job placement."
  },

  {
    "question": "How does the payment method work?",
    "answer": "You start by paying a small deposit, and the remaining amount is only paid after you land a job."
  },
  {
    "question": "Are discounts available?",
    "answer": "Yes, limited discounts and flexible options may be available."
  },
  {
    "question": "Who is this for?",
    "answer": "Beginners, career switchers, and international students serious about full-time telecom roles."
  },
  {
    "question": "How long does the program take?",
    "answer": "Training typically takes 3-4 weeks, followed by placement support."
  },
  {
    "question": "What is the time commitment for this program?",
    "answer": "It requires consistent effort over a few weeks (3-4), with flexible schedules to suit your pace."
  },
  {
    "question": "Do I need prior experience?",
    "answer": "No prior experience is required; commitment matters more."
  },
  {
    "question": "What help will I get from Skarion in landing a job?",
    "answer": "Skarion provides resume building, interview preparation, job application support, and connects you with placement opportunities."
  },
  {
    "question": "Do I need to pay the full amount upfront for the program?",
    "answer": "No, only the deposit is required upfront; you pay the rest only after job placement."
  },
  {
    "question": "Will I get a certificate after I complete the program?",
    "answer": "Yes, you will get a Skarion certificate upon completing the program, but the main focus is on getting you hired."
  },
  {
    "question": "Is this program just for U.S. residents, or can international students apply?",
    "answer": "This program is open to anyone residing in the U.S., including U.S. citizens, green card holders, and international students, especially those on OPT/CPT."
  },
  {
    "question": "What happens after I complete the training?",
    "answer": "You receive placement support, help with resume building, and job application assistance to land a full-time role."
  },
  {
    "question": "How does the program differ from other courses or bootcamps?",
    "answer": "Skarion provides hands-on training tailored to real-world projects and direct support to help you get hired."
  },
  {
    "question": "Do I get personalized support during the program?",
    "answer": "Yes, you get personalized mentorship and support throughout the training to help you succeed."
  },
  {
    "question": "What are the job prospects after completing the program?",
    "answer": "The program prepares you for full-time positions like OSP Engineer, OSP Designer, and Fiber Network Engineer, with placement support in the U.S."
  },
  {
    "question": "Is the program suitable for someone without prior experience?",
    "answer": "Yes, no prior experience is required; a commitment to learning is most important."
  },
  {
    "question": "What kind of support can I expect from Skarion in landing a job?",
    "answer": "Skarion provides resume building, interview preparation, and direct placement assistance to help you land a full-time role."
  }
];

const FAQPage: React.FC = () => {
  const [query, setQuery] = React.useState("");
  const normalizedQuery = query.trim();
  const filteredFaq = React.useMemo(() => {
    if (!normalizedQuery) return faqData;
    const q = normalizedQuery.toLowerCase();
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q),
    );
  }, [normalizedQuery]);
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const highlight = (text: string, q: string) => {
    if (!q) return text;
    const re = new RegExp(`(${escapeRegExp(q)})`, "ig");
    const parts = text.split(re);
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 px-0.5 rounded-sm">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  };
  return (
    <div className="w-full bg-[#ffffff] py-5 mt-8 sm:px-12 px-6 max-w-[1440px] mx-auto">
      <h1 className="text-[#000000] text-[40px] sm:text-[64px] leading-[1.2] text-left mb-6 sm:mb-12">
        Frequently Asked Questions
      </h1>
      <div className="w-full mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="faq-search"
            placeholder="Search questions or answers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setQuery("");
            }}
            className="pl-12 pr-12 h-12 rounded-md border-gray-200 bg-gray-50/50 text-base"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
          Showing {filteredFaq.length} of {faqData.length} FAQs
        </div>
      </div>
      <Accordion type="multiple" className="w-full">
        {(normalizedQuery ? filteredFaq : faqData).map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border-b border-[#EBEBEB] last:border-b-0"
          >
            <AccordionTrigger className="hover:no-underline text-left py-3 sm:py-4 md:py-5">
              <span className="font-[400] text-[14px] sm:text-[16px] md:text-[18px] text-gray-800">
                {highlight(item.question, normalizedQuery)}
              </span>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              <div className="pb-3 sm:pb-4 md:pb-5 text-gray-600 text-[13px] sm:text-[14px] md:text-[16px]">
                {highlight(item.answer, normalizedQuery)}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {normalizedQuery && filteredFaq.length === 0 && (
        <div className="my-6 text-center text-sm text-gray-500">
          No matching questions found.
        </div>
      )}
    </div>
  );
};

export default FAQPage;
