"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Skarion?",
    answer:
      "Skarion is a career placement program that trains and prepares you for full-time OSP and telecom engineering roles.",
  },
  {
    question: "Why choose Skarion over free courses?",
    answer:
      "Free courses teach concepts. Skarion prepares you for employment with hands-on training, resume grooming, interview preparation, and active job placement support.",
  },
  {
    question:
      "Why should I consider switching to the telecom industry if my degree is in a different field?",
    answer:
      "The telecom industry is experiencing growing demand, with numerous job opportunities available. It offers an entry point into engineering roles and provides a stable, long-term career path.",
  },
  {
    question: "Does Skarion guarantee jobs?",
    answer: "Yes we do.",
  },
  {
    question: "What if I don’t get a job?",
    answer:
      "If you don’t get placed within 90 days, your initial deposit is refunded (terms apply).",
  },
  {
    question: "Will someone assist me personally?",
    answer:
      "Yes, a dedicated team supports your training, applications, and interviews.",
  },
  {
    question: "What kind of hands-on projects will I build during the program?",
    answer:
      "You pay a small deposit to start, and the full $6,000 fee is paid only after job placement.",
  },
  {
    question: "Are discounts available?",
    answer: "Yes, limited discounts and flexible options may be available.",
  },
  {
    question: "Who is this for?",
    answer:
      "Beginners, career switchers, and international students serious about full-time telecom roles.",
  },
  {
    question: "How long does the program take?",
    answer:
      "Training typically takes a few months, followed by placement support.",
  },
  {
    question: "Do I need any prior experience?",
    answer: "No prior experience is required.",
  },
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
    <div className="w-full bg-[#ffffff] sm:py-10 py-5 sm:px-12 px-6 max-w-[1440px] mx-auto">
      <div className="text-[#000000] text-[40px] sm:text-[64px] leading-[1.2] text-left mb-6 sm:mb-12 mt-10">
        Frequently Asked Questions
      </div>
      <div className="w-full mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center gap-2">
          <Input
            id="faq-search"
            placeholder="Search questions or answers"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setQuery("");
            }}
            className="h-10"
          />
          {query && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setQuery("")}
            >
              Clear
            </Button>
          )}
        </div>
        <div className="mt-6 text-sm text-gray-600 ml-auto w-fit">
          {filteredFaq.length} of {faqData.length} results
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
        <div className="mt-6 text-center text-sm text-gray-500">
          No matching questions found.
        </div>
      )}
    </div>
  );
};

export default FAQPage;
