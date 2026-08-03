import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface PathwayRole {
  title: string;
  salary: string;
  description: string;
}

export interface PathwayStep {
  step: string;
  title: string;
  description: string;
}

export interface PathwayFAQ {
  question: string;
  answer: string;
}

export interface PathwayTemplateProps {
  /** e.g. "engineering-infrastructure" */
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  /** Short stats shown under the hero */
  stats: { value: string; label: string }[];
  /** What you'll learn / core areas */
  coreAreas: { icon: React.ReactNode; title: string; description: string }[];
  /** Target roles with salary ranges */
  roles: PathwayRole[];
  /** Skills & technologies grouped */
  skillGroups: { category: string; skills: string[] }[];
  /** How the pathway works — numbered steps */
  steps: PathwayStep[];
  /** Ideal candidate bullets */
  idealFor: string[];
  /** FAQ items */
  faqs: PathwayFAQ[];
  /** Other pathway links */
  otherPathways: { title: string; href: string; description: string }[];
}

export default function PathwayTemplate({
  badge,
  title,
  subtitle,
  heroDescription,
  stats,
  coreAreas,
  roles,
  skillGroups,
  steps,
  idealFor,
  faqs,
  otherPathways,
}: PathwayTemplateProps) {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative w-full bg-[#ffffff] overflow-hidden">
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto sm:px-12 px-6 sm:py-24 py-16">
          {badge && (
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[12px] font-[600] bg-[#122461]/10 text-[#122461] border border-[#122461]/20 mb-6 tracking-wide uppercase">
              {badge}
            </span>
          )}
          <h1 className="text-[#000000] text-[36px] sm:text-[52px] md:text-[64px] leading-[1.08] font-[700] max-w-3xl mb-5">
            {title}
          </h1>
          <p className="text-gray-600 text-[18px] sm:text-[22px] font-[300] leading-[1.5] max-w-2xl mb-6">
            {subtitle}
          </p>
          <p className="text-gray-500 text-[15px] sm:text-[16px] font-[300] leading-relaxed max-w-2xl mb-10">
            {heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/book"
              className="bg-[#122461] text-white rounded-[8px] px-8 py-3.5 text-[14px] sm:text-[15px] font-[600] hover:bg-[#122461]/90 transition-colors text-center whitespace-nowrap"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/#pathways"
              className="border border-[#122461] text-[#122461] rounded-[8px] px-8 py-3.5 text-[14px] sm:text-[15px] font-[500] hover:bg-gray-50 transition-colors text-center whitespace-nowrap"
            >
              View All Pathways
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#EBEBEB] pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[#000000] text-[28px] sm:text-[36px] font-[700] leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-[13px] sm:text-[14px] font-[400]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Areas / What You'll Build Expertise In ── */}
      <section className="w-full sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
            CORE FOCUS AREAS
          </p>
          <h2 className="text-[#000000] text-[28px] sm:text-[40px] md:text-[46px] leading-[1.1] font-[700] mb-4 max-w-2xl">
            What you&apos;ll build expertise in.
          </h2>
          <p className="text-gray-500 text-[15px] sm:text-[16px] font-[300] mb-12 max-w-xl leading-relaxed">
            Each area is mapped to real employer demand so your training translates directly into hireability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-[#EBEBEB] rounded-[14px] p-7 sm:p-8 hover:border-[#122461] hover:shadow-[0_8px_30px_rgba(18,36,97,0.08)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-[10px] bg-[#f0f4ff] flex items-center justify-center mb-5">
                  {area.icon}
                </div>
                <h3 className="text-[#000000] text-[17px] sm:text-[18px] font-[600] leading-snug mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-[14px] font-[300] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Roles ── */}
      <section className="w-full sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
            TARGET ROLES
          </p>
          <h2 className="text-[#000000] text-[28px] sm:text-[40px] md:text-[46px] leading-[1.1] font-[700] mb-4 max-w-2xl">
            Roles our candidates target.
          </h2>
          <p className="text-gray-500 text-[15px] sm:text-[16px] font-[300] mb-12 max-w-xl leading-relaxed">
            We position your profile for specific, in-demand positions — not generic job titles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-[14px] border border-[#EBEBEB] p-7 sm:p-8 flex flex-col hover:border-[#122461] hover:shadow-[0_4px_20px_rgba(18,36,97,0.08)] transition-all duration-300"
              >
                <h3 className="text-[#000000] text-[17px] sm:text-[19px] font-[600] mb-1.5">
                  {role.title}
                </h3>
                <p className="text-[#122461] text-[14px] font-[600] mb-3">
                  {role.salary}
                </p>
                <p className="text-gray-500 text-[14px] font-[300] leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills & Technologies ── */}
      <section className="w-full sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
            SKILLS &amp; TECHNOLOGIES
          </p>
          <h2 className="text-[#000000] text-[28px] sm:text-[40px] md:text-[46px] leading-[1.1] font-[700] mb-12 max-w-2xl">
            The stack employers are hiring for.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-[#000000] text-[16px] sm:text-[17px] font-[600] mb-4 pb-3 border-b border-[#EBEBEB]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#f0f4ff] text-[#122461] px-4 py-2 rounded-full text-[13px] font-[500]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="w-full bg-[#122461] sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-white/60 text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-white text-[28px] sm:text-[40px] md:text-[46px] leading-[1.1] font-[700] mb-14 max-w-2xl">
            From consultation to career.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={s.step} className="relative">
                <div className="text-white text-[72px] sm:text-[80px] font-[800] leading-none mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white text-[18px] sm:text-[20px] font-[600] mb-2">
                  {s.title}
                </h3>
                <p className="text-white/55 text-[14px] font-[300] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ideal For ── */}
      <section className="w-full sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <div className="w-full lg:w-[45%]">
              <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
                IS THIS PATHWAY RIGHT FOR YOU?
              </p>
              <h2 className="text-[#000000] text-[28px] sm:text-[40px] md:text-[46px] leading-[1.1] font-[700] mb-6">
                This pathway is built for you if…
              </h2>
              <p className="text-gray-500 text-[15px] sm:text-[16px] font-[300] leading-relaxed mb-8">
                Not sure where you fit? Book a free consultation and we&apos;ll assess your background honestly.
              </p>
              <Link
                href="/book"
                className="inline-flex bg-[#122461] text-white rounded-[8px] px-8 py-3.5 text-[14px] font-[600] hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation
              </Link>
            </div>
            <div className="w-full lg:w-[55%]">
              <div className="space-y-5">
                {idealFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white border border-[#EBEBEB] rounded-[12px] p-5 sm:p-6"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#e6f8f1] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#12b981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-[15px] sm:text-[16px] font-[400] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-[#000000] text-[28px] sm:text-[40px] leading-[1.1] font-[700] mb-12">
            Common questions about this pathway.
          </h2>

          <div className="max-w-4xl">
            <Accordion type="multiple" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-b border-[#EBEBEB] last:border-b-0"
                >
                  <AccordionTrigger className="hover:no-underline text-left py-4 sm:py-5">
                    <span className="font-[500] text-[15px] sm:text-[17px] text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <div className="pb-4 sm:pb-5 text-gray-500 text-[14px] sm:text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Other Pathways ── */}
      <section className="w-full sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
            EXPLORE OTHER PATHWAYS
          </p>
          <h2 className="text-[#000000] text-[28px] sm:text-[40px] leading-[1.1] font-[700] mb-12">
            Not the right fit? We have more.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherPathways.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-[#EBEBEB] rounded-[14px] p-7 sm:p-8 flex flex-col hover:border-[#122461] hover:shadow-[0_8px_30px_rgba(18,36,97,0.08)] transition-all duration-300"
              >
                <h3 className="text-[#000000] text-[20px] sm:text-[22px] font-[600] mb-2 group-hover:text-[#122461] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-[14px] sm:text-[15px] font-[300] leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#122461] text-[13px] font-[500]">
                  <span>Explore this pathway</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="w-full bg-[#122461] sm:py-20 py-14 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-white text-[28px] sm:text-[40px] md:text-[48px] leading-[1.1] font-[700] mb-5 max-w-2xl mx-auto">
            Ready to start your {title} career?
          </h2>
          <p className="text-white/60 text-[15px] sm:text-[17px] font-[300] mb-10 max-w-lg mx-auto leading-relaxed">
            Book a free consultation. We&apos;ll assess your background, map a realistic pathway, and get to work — you pay only after you&apos;re placed.
          </p>
          <Link
            href="/book"
            className="inline-flex bg-white text-[#122461] rounded-[8px] px-10 py-4 text-[15px] font-[600] hover:bg-gray-100 transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
