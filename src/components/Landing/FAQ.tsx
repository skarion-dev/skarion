"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  group: string;
}

const faqData: FAQItem[] = [
  // — General
  {
    group: "General",
    question: "What is Skarion?",
    answer:
      "Skarion is a success-based career acceleration and placement company. We help international graduates and early-career professionals break into specialized, less-saturated U.S. career pathways by mapping their background to the right field, closing practical skill gaps, positioning their profile, and running a curated job-search campaign on their behalf. You pay only after you're placed.",
  },
  {
    group: "General",
    question: "Why choose Skarion over free courses or generic job boards?",
    answer:
      "Free courses teach concepts and hope they stick. Generic job boards leave you to apply alone. Skarion does something different: we start by finding the right pathway for your background, then manage the entire job-search process alongside you — resume, applications, interviews, and onboarding. And our success-based model means our incentives are aligned with yours.",
  },
  {
    group: "General",
    question: "Will I get personal support throughout the process?",
    answer:
      "Yes. Once you enroll, a dedicated team of instructors, managers, and industry experts backs your training, job search, and applications every step of the way.",
  },
  {
    group: "General",
    question: "How long does the process typically take?",
    answer:
      "It varies by pathway and individual background. Many candidates target placement within about 120 days of enrolling. We'll give you an honest, personalized timeline estimate during your free consultation — not a generic promise.",
  },
  {
    group: "General",
    question: "Do I need prior experience in the field?",
    answer:
      "Not necessarily. Many candidates come from adjacent or unrelated backgrounds. What matters more is your commitment, transferable skills, and work-authorization situation. Our free career assessment will tell you honestly what your prospects look like.",
  },
  // — Career Pathways
  {
    group: "Career Pathways",
    question: "What career pathways does Skarion support?",
    answer:
      "We currently support three pathways: Engineering & Infrastructure (our flagship — includes OSP/telecom, GIS, CAD, and civil-adjacent roles), Technology & Data (software, analytics, QA, cloud, and applied AI), and Business & Operations (accounting, financial analysis, business systems, supply chain, and project coordination). Each pathway has dedicated hiring relationships and a tailored process.",
  },
  {
    group: "Career Pathways",
    question: "What is the Engineering & Infrastructure pathway?",
    answer:
      "This is our flagship pathway, built on our roots in outside plant (OSP) fiber network design. It covers telecom & OSP engineering, GIS & geospatial analysis, utility and civil support roles, AutoCAD and permitting, and construction/project engineering. We have direct hiring relationships with employers in this space and the strongest placement track record here.",
  },
  {
    group: "Career Pathways",
    question: "I'm not from an engineering background. Can Skarion still help me?",
    answer:
      "Yes. Our Technology & Data and Business & Operations pathways are designed for candidates from CS, data, accounting, business systems, and adjacent fields. Your first step is a free consultation where we review your background and identify the pathway where you're most likely to succeed.",
  },
  {
    group: "Career Pathways",
    question: "How do I know which pathway is right for me?",
    answer:
      "That's exactly what our free career consultation is for. We review your education, experience, work-authorization situation, and goals, then recommend the pathway and specific roles where you're most likely to get hired. No pressure, no upfront cost.",
  },
  {
    group: "Career Pathways",
    question: "What skill-development courses does Skarion offer?",
    answer:
      "Our flagship course is Outside Plant Engineering (21 modules — fiber optics, OSP design, splicing, network layout). We also offer Introduction to AutoCAD (11 modules) and GIS Essentials (coming soon, 13 modules). Courses are used when a specific skill gap stands between you and your target role — they're one part of the process, not the whole service.",
  },
  // — Payment & Model
  {
    group: "Payment & Model",
    question: "When do I have to pay?",
    answer:
      "Skarion runs on a success-based model for our placement service. Fees become applicable only after you're successfully placed in a role, exactly as defined in your signed agreement. There is no upfront tuition for the placement service. Note: standalone skill-development courses may have their own pricing — your consultation will clarify what applies to your situation.",
  },
  {
    group: "Payment & Model",
    question: "Is the placement service free?",
    answer:
      "It's not free — it's success-based. The distinction matters: you don't pay upfront tuition, but a fee does apply after successful placement, per your signed agreement. We use the term \"success-based\" or \"pay-when-hired\" rather than \"free\" to be accurate and transparent.",
  },
  {
    group: "Payment & Model",
    question: "What if I don't get placed?",
    answer:
      "We work hard to find the right fit, but we don't make guarantees. We can't and don't promise a specific job, salary, timeline, or sponsorship. The terms governing what happens in various scenarios are set out clearly in your signed agreement before you commit.",
  },
  {
    group: "Payment & Model",
    question: "Are discounts or flexible options available?",
    answer:
      "Limited options may be available. The best way to understand what applies to your situation is to book a free consultation — we'll walk you through the model in full.",
  },
  // — International Candidates
  {
    group: "International Candidates",
    question: "Is this program open to international students and OPT holders?",
    answer:
      "Yes. Many of our candidates are international graduates on OPT or STEM OPT. We have direct experience helping this group navigate the U.S. job market and are upfront about work-authorization realities — including which employers are realistically accessible on different visa types.",
  },
  {
    group: "International Candidates",
    question: "Will Skarion guarantee sponsorship or an H-1B visa?",
    answer:
      "No. We never promise sponsorship or specific visa outcomes. What we do is help you target roles and employers where sponsorship is realistically possible, position your profile as strongly as possible, and make the most of your available time on OPT or STEM OPT. Honest guidance beats false hope.",
  },
  {
    group: "International Candidates",
    question: "What should I know about the OPT/STEM OPT timeline?",
    answer:
      "OPT gives you 12 months of work authorization after graduation; a STEM OPT extension adds up to 24 more months if you graduated from a STEM program and your employer files an E-Verify-compliant I-983. Timing matters — the earlier you start the placement process, the more runway you have. We factor your specific situation into the roadmap during your consultation.",
  },
  {
    group: "International Candidates",
    question: "I have a foreign degree or foreign work experience. Can Skarion still help?",
    answer:
      "Yes. Repositioning foreign credentials for the U.S. market is something we do regularly. Part of the profile-optimization work is translating your experience into language and formats that U.S. hiring managers recognize and value.",
  },
];

const groups = Array.from(new Set(faqData.map((f) => f.group)));

const FAQPage: React.FC = () => {
  const [query, setQuery] = React.useState("");
  const [activeGroup, setActiveGroup] = React.useState<string>("All");
  const normalizedQuery = query.trim();

  const filteredFaq = React.useMemo(() => {
    let items = faqData;
    if (activeGroup !== "All") {
      items = items.filter((item) => item.group === activeGroup);
    }
    if (!normalizedQuery) return items;
    const q = normalizedQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [normalizedQuery, activeGroup]);

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
      )
    );
  };

  return (
    <div className="w-full bg-[#ffffff] py-5 mt-8 sm:px-12 px-6 max-w-[1440px] mx-auto">
      <h2 className="text-[#000000] text-[40px] sm:text-[64px] leading-[1.2] text-left mb-4 sm:mb-6 font-[700]">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-[15px] sm:text-[16px] font-[300] mb-8 max-w-2xl leading-relaxed">
        Questions about pathways, the success-based model, international
        candidates, and more.
      </p>

      {/* Group filter chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", ...groups].map((g) => (
          <button
            key={g}
            onClick={() => setActiveGroup(g)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-[500] border transition-colors duration-200 ${
              activeGroup === g
                ? "bg-[#122461] text-white border-[#122461]"
                : "bg-white text-gray-600 border-[#EBEBEB] hover:border-[#122461] hover:text-[#122461]"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="w-full mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
          Showing {filteredFaq.length} of {faqData.length} questions
        </div>
      </div>

      <Accordion type="multiple" className="w-full">
        {filteredFaq.map((item, index) => (
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
