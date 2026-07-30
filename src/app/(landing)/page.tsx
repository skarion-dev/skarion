import Courses from "@/components/Landing/Courses";
import FAQ from "@/components/Landing/FAQ";
import Testimonials from "@/components/Landing/Testimonials";
import Link from "next/link";
import LogoCarousel from "@/components/LogoCarousel";
import Image from "next/image";
import SwiperComponent from "@/components/SwiperComponent";
import Counter from "@/components/Counter";
import Steps from "@/components/Steps";
import { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Skarion — Success-Based Career Acceleration & Placement",
  description:
    "Skarion helps international graduates and early-career professionals break into specialized, less-saturated U.S. career pathways. We find the right field for your background, close skill gaps, position your profile, and run your job search — and you pay only after you're placed.",
  keywords: [
    "Skarion",
    "career placement",
    "success-based placement",
    "pay when hired",
    "international graduates",
    "OPT job placement",
    "STEM OPT careers",
    "career acceleration",
    "OSP engineering",
    "GIS careers",
    "technology data careers",
    "business operations placement",
    "managed job search",
    "U.S. career pathways",
    "career coaching",
    "job placement company",
  ],
  openGraph: {
    title: "Skarion — Success-Based Career Acceleration & Placement",
    description:
      "Skarion helps international graduates and early-career professionals break into specialized, less-saturated U.S. career pathways. Pay only after you're placed.",
    url: "https://skarion.com",
    siteName: "Skarion",
    images: [
      {
        url: "https://skarion.com/skarion-jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Skarion — Career Acceleration & Placement",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skarion — Success-Based Career Acceleration & Placement",
    description:
      "Skarion helps international graduates break into specialized U.S. career pathways. Pay only after you're placed.",
    images: ["https://skarion.com/skarion-jpg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const logos = [
  "/benton.png",
  "/circet.png",
  "/gme.png",
  "/radd.png",
  "/westell.png",
];

const images = [
  {
    src: "/pay when hired.jpg",
    title: "Pay-When-Hired Model",
    details:
      "No upfront tuition for placement. Fees apply only after you're successfully placed, under your signed agreement.",
  },
  {
    src: "/end to end.jpg",
    title: "End-to-End Placement",
    details:
      "From assessment and resume to applications and interviews, we manage every step with you.",
  },
  {
    src: "/globe to us.jpg",
    title: "Network with Industry Leaders",
    details:
      "We maintain direct hiring relationships and can surface roles that never hit public job boards.",
  },
  {
    src: "/end to end.jpg",
    title: "Post-Placement Support",
    details:
      "Ongoing support after you're hired — from onboarding to salary negotiation and career advancement.",
  },
];

const pathways = [
  {
    id: "engineering-infrastructure",
    label: "Engineering & Infrastructure",
    badge: "Flagship",
    isFlagship: true,
    description:
      "Telecom & OSP, GIS & geospatial, utility and civil support, CAD, permitting, and construction/project engineering. Our most established pathway, with direct hiring relationships and real placements.",
    href: "/pathways/engineering-infrastructure",
  },
  {
    id: "technology-data",
    label: "Technology & Data",
    badge: null,
    isFlagship: false,
    description:
      "Software and backend, data and business analytics, GIS automation, QA and testing, networking/cloud/cybersecurity, and applied AI in specialized industries.",
    href: "/pathways/technology-data",
  },
  {
    id: "business-operations",
    label: "Business & Operations",
    badge: null,
    isFlagship: false,
    description:
      "Entry-level accounting, financial and operational analysis, business systems and MIS, supply chain and project coordination, and corporate operations.",
    href: "/pathways/business-operations",
  },
];

export default async function Home() {
  return (
    <div>
      {/* ── Hero + Right Panel ── */}
      <div className="w-full bg-[#ffffff] sm:py-10 py-5 sm:px-12 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left: Hero Copy */}
          <div className="w-full lg:w-[60%]">
            {/* Trust strip */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-5 mt-2">
              <div className="flex -space-x-2">
                <Image
                  src="/image 1.jpg"
                  alt="Skarion candidate"
                  width={28}
                  height={28}
                  className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
                />
                <Image
                  src="/profile 1.jpg"
                  alt="Skarion candidate"
                  width={28}
                  height={28}
                  className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
                />
                <Image
                  src="/image 3.jpg"
                  alt="Skarion candidate"
                  width={28}
                  height={28}
                  className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
                />
                <Image
                  src="/profile 2.jpg"
                  alt="Skarion candidate"
                  width={28}
                  height={28}
                  className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-[2px] text-[#f5b942]">
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                  <span className="text-base">★</span>
                  <span className="ml-[8px] text-gray-500 text-[12px] font-[600]">
                    4.8 (30+ reviews)
                  </span>
                </div>
                <span className="text-[12px] font-[400]">
                  Trusted by 70+ Professionals Worldwide
                </span>
              </div>
            </div>

            {/* H1 */}
            <h1 className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-left">
              Build a Career Strategy That Gets You Hired.
            </h1>

            {/* Subhead */}
            <div className="text-sm sm:text-base md:text-lg font-[300] pt-5 text-left w-full lg:w-[85%] leading-relaxed text-gray-700">
              Skarion helps international graduates and early-career
              professionals break into specialized, less-saturated U.S. career
              pathways. We find the right field for your background, close the
              skill gaps, position your profile, and run your job search for
              you — and you pay only after you&apos;re placed.
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
              <Link
                href="https://outlook.office.com/book/SkarionConsultationCall@inuberry.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-book"
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
              </Link>
              <Link
                href="/pathways"
                id="hero-cta-pathways"
                className="border-[1px] border-[#122461] rounded-[8px] px-6 py-3 flex justify-center items-center gap-2 group cursor-pointer whitespace-nowrap hover:bg-[#122461] transition-all duration-300"
              >
                <p className="text-[#122461] group-hover:text-white text-[12px] sm:text-[14px] font-[500] transition-colors duration-300">
                  Explore Career Pathways
                </p>
              </Link>
            </div>

            {/* Micro-reassurance */}
            <p className="mt-8 text-[11px] sm:text-[12px] text-gray-500 font-[400]">
              No upfront tuition for placement &nbsp;·&nbsp; Dedicated team
              &nbsp;·&nbsp; Honest about OPT &amp; sponsorship
            </p>
          </div>

          {/* Right: Support team card + logos */}
          <div className="w-full lg:w-[37%]">
            <div className="rounded-[14px] relative flex-2 bg-[#122461] sm:mt-4 mt-2 px-6 py-5">
              <p className="text-[#ffffff] text-[26px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-[600] leading-[1.2] z-10">
                YOUR OWN DEDICATED SUPPORT TEAM
              </p>
              <p className="text-[#ffffff] text-[16px] font-[400] leading-[1.4] z-10 mt-3">
                Once you enroll, a dedicated team of instructors, managers, and
                industry experts backs your training, job search, and
                applications — working toward placement, with many candidates
                targeting roles within about 120 days.
              </p>
            </div>
            <div className="text-[15px] font-[400] sm:pt-8 pt-6 pb-3 text-left text-gray-600">
              Our candidates have gone on to work with
            </div>
            <LogoCarousel logos={logos} />
            <p className="mt-4 text-[11px] sm:text-[12px] text-gray-400 leading-relaxed">
              These placements come largely from our flagship Engineering &amp;
              Infrastructure pathway — proof of what targeting specialized,
              less-saturated lanes can do.
            </p>
          </div>
        </div>

        {/* ── Steps + Stats + Swiper ── */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pt-12">
          <div className="flex flex-col gap-4 w-full lg:w-[62%] h-auto lg:h-[512px]">
            <div className="relative rounded-[14px] flex-1">
              <Steps />
            </div>
            <div className="flex flex-row items-start justify-between flex-1 space-x-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full h-full">
                <div className="relative flex flex-col justify-center bg-[#122461] rounded-[14px] w-full sm:w-full px-6 min-h-[130px] overflow-hidden py-5">
                  <Image
                    src="/online-meeting.jpg"
                    alt="Skarion managed job search campaign"
                    fill
                    className="object-cover object-left"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
                  <p className="text-[#ffffff] text-[26px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-[600] leading-[1.2] z-10">
                    SPECIALIZED
                    <br />
                    NICHE PATHWAYS
                  </p>
                  <p className="text-[#ffffff] text-[16px] leading-[1.2] z-10 mt-2 w-[65%]">
                    We target fields where demand is high and competition is
                    lower — so you stand out.
                  </p>
                </div>
                <div className="w-full sm:w-[40%]">
                  <div className="w-full h-full relative flex items-center shrink-0 overflow-hidden rounded-xl bg-[#122461] pl-5 pr-5 pb-4 pt-1">
                    <div className="relative z-10 text-white">
                      <span className="text-[#ffffff] text-[64px] leading-[1.2] font-[600]">
                        <Counter value={70} />
                      </span>
                      <p className="text-[#ffffff] text-[14px] font-[500] leading-[1.3]">
                        Professionals Have Found a Career in the US Through
                        Skarion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col bg-[#ffffff] rounded-[14px] w-full lg:w-[38%] h-[300px] lg:h-[512px]">
            <SwiperComponent images={images} />
          </div>
        </div>
      </div>

      {/* ── Career Pathways Section ── */}
      <div className="w-full sm:py-14 py-10 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
            SPECIALIZED CAREER PATHWAYS
          </p>
          <h2 className="text-[#000000] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] font-[700] mb-3">
            Find the lane where your skills are in demand.
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] font-[300] mb-8 sm:mb-12 max-w-2xl leading-relaxed">
            We focus on specialized, less-saturated fields where qualified
            people get noticed faster. Explore the pathways:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((pathway) => (
              <Link
                key={pathway.id}
                href={pathway.href}
                id={`pathway-card-${pathway.id}`}
                className={`group relative flex flex-col rounded-[14px] border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(18,36,97,0.12)] ${
                  pathway.isFlagship
                    ? "bg-[#122461] border-[#122461] text-white"
                    : "bg-white border-[#EBEBEB] text-[#000000] hover:border-[#122461]"
                }`}
              >
                {pathway.badge && (
                  <span
                    className={`inline-flex items-center self-start px-3 py-1 rounded-full text-[11px] font-[600] mb-4 ${
                      pathway.isFlagship
                        ? "bg-white/20 text-white border border-white/30"
                        : "bg-[#e6f8f1] text-[#12b981]"
                    }`}
                  >
                    {pathway.badge}
                  </span>
                )}
                <h3
                  className={`text-[20px] sm:text-[22px] font-[600] leading-[1.25] mb-3 ${
                    pathway.isFlagship ? "text-white" : "text-[#000000]"
                  }`}
                >
                  {pathway.label}
                </h3>
                <p
                  className={`text-[14px] sm:text-[15px] font-[300] leading-relaxed flex-1 ${
                    pathway.isFlagship ? "text-white/85" : "text-gray-600"
                  }`}
                >
                  {pathway.description}
                </p>
                <div
                  className={`mt-6 flex items-center gap-2 text-[13px] font-[500] ${
                    pathway.isFlagship
                      ? "text-white/90"
                      : "text-[#122461] group-hover:text-[#122461]"
                  }`}
                >
                  <span>Explore {pathway.label}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
          <p className="mt-12 text-center text-[12px] sm:text-[12px] text-gray-500">
            Not sure which fits?{" "}
            <Link
              href="https://outlook.office.com/book/SkarionConsultationCall@inuberry.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#122461] hover:underline underline-offset-4 font-[500]"
            >
              Start with a free career assessment
            </Link>
          </p>
        </div>
      </div>

      {/* ── Courses ── */}
      <Courses />

      {/* ── Success-Based Model ── */}
      <div className="w-full sm:py-16 py-12 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Top: header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-xl">
              <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
                SUCCESS-BASED MODEL
              </p>
              <h2 className="text-[#000000] text-[32px] sm:text-[44px] leading-[1.1] font-[700]">
                We only win when<br className="hidden sm:block" /> you get hired.
              </h2>
            </div>
            <p className="text-gray-500 text-[15px] sm:text-[16px] font-[300] leading-relaxed max-w-md lg:text-right">
              No upfront tuition for our placement service. Fees apply only after a successful placement — our incentives are completely aligned with yours.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
            {/* Large hero card */}
            <div className="sm:col-span-2 lg:col-span-1 bg-[#122461] rounded-[14px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-white/15 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white text-[18px] sm:text-[20px] font-[600] leading-snug mb-2">
                  Free consultation first.
                </h3>
                <p className="text-white/65 text-[14px] font-[300] leading-relaxed">
                  We assess your background and map the right pathway — no cost, no commitment before you know where you stand.
                </p>
              </div>
            </div>

            {/* Feature card 2 */}
            <div className="bg-white border border-[#EBEBEB] rounded-[14px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] hover:border-[#122461] hover:shadow-[0_4px_20px_rgba(18,36,97,0.08)] transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#f0f4ff] flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#122461" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#000000] text-[17px] sm:text-[18px] font-[600] leading-snug mb-2">
                  Full service upfront.
                </h3>
                <p className="text-gray-500 text-[14px] font-[300] leading-relaxed">
                  Profile work, managed applications, and interview coaching — all delivered before any fee applies.
                </p>
              </div>
            </div>

            {/* Feature card 3 */}
            <div className="bg-white border border-[#EBEBEB] rounded-[14px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] hover:border-[#122461] hover:shadow-[0_4px_20px_rgba(18,36,97,0.08)] transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#f0f4ff] flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#122461" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#000000] text-[17px] sm:text-[18px] font-[600] leading-snug mb-2">
                  Pay after placement.
                </h3>
                <p className="text-gray-500 text-[14px] font-[300] leading-relaxed">
                  Fees become applicable only after you're successfully placed, exactly as defined in your signed agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 border-t border-[#EBEBEB]">
            <p className="text-gray-400 text-[12px] sm:text-[13px]">
              No guarantees, no hidden upfront cost.{" "}
              <Link href="/terms-and-conditions" className="text-gray-500 underline underline-offset-2 hover:text-[#122461] transition-colors">
                Terms apply
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/pricing"
                id="success-band-pricing-cta"
                className="bg-[#122461] text-white rounded-[8px] px-6 py-3 text-center text-[13px] sm:text-[14px] font-[500] hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                How pricing works
              </Link>
              <Link
                href="https://outlook.office.com/book/SkarionConsultationCall@inuberry.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                id="success-band-book-cta"
                className="border border-[#122461] text-[#122461] rounded-[8px] px-6 py-3 text-center text-[13px] sm:text-[14px] font-[500] hover:bg-[#122461] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── International Candidates ── */}
      <div className="w-full bg-[#ffffff] sm:py-16 py-12 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto">

          {/* Top header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
                BUILT FOR INTERNATIONAL TALENT
              </p>
              <h2 className="text-[#000000] text-[28px] sm:text-[40px] md:text-[46px] leading-[1.1] font-[700] max-w-lg">
                Straight answers on OPT, STEM-OPT &amp; sponsorship.
              </h2>
            </div>
            <p className="text-gray-500 text-[14px] sm:text-[15px] font-[300] leading-relaxed max-w-sm lg:text-right">
              Many of our candidates are international graduates. We&apos;re upfront about work-authorization realities from day one.
            </p>
          </div>

          {/* 3-column feature strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#EBEBEB] border border-[#EBEBEB] rounded-[14px] overflow-hidden mb-8">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="#122461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="#122461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "Realistic role targeting",
                text: "We map roles and employers where your current visa status is genuinely viable — no wasted applications.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#122461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "U.S. profile positioning",
                text: "Foreign credentials reframed into language and formats U.S. hiring managers recognize and value.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#122461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "No sponsorship promises",
                text: "We never promise a specific visa outcome. Honest clarity from day one so you can plan with confidence.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white px-6 sm:px-8 py-7 sm:py-8">
                <div className="w-9 h-9 rounded-[8px] bg-[#f0f4ff] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-[#000000] text-[15px] sm:text-[16px] font-[600] mb-2">{item.label}</p>
                <p className="text-gray-500 text-[13px] sm:text-[14px] font-[300] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom: quote strip + CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#EBEBEB] pt-7">
            <p className="text-gray-400 text-[12px] sm:text-[13px] font-[300] max-w-md leading-relaxed">
              Whether you&apos;re on OPT, STEM OPT, or a green card — we tailor the strategy to your actual authorization situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/faq"
                id="international-faq-cta"
                className="bg-[#122461] text-white rounded-[8px] px-6 py-3 text-center text-[13px] sm:text-[14px] font-[600] hover:opacity-90 transition-colors whitespace-nowrap"
              >
                Read the FAQ
              </Link>
              <Link
                href="https://outlook.office.com/book/SkarionConsultationCall@inuberry.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#122461] text-[#122461] rounded-[8px] px-6 py-3 text-center text-[13px] sm:text-[14px] font-[500] hover:bg-[#122461] hover:text-white transition-colors whitespace-nowrap"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>




      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Final CTA Band ── */}
      <div className="w-full sm:py-14 py-10 sm:px-12 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[#000000] text-[28px] sm:text-[36px] md:text-[44px] leading-[1.15] font-[700] mb-4">
            Your next career move starts with one free conversation.
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-[16px] font-[300] mb-8 max-w-xl mx-auto leading-relaxed">
            Book a consultation and we&apos;ll map your strongest U.S. career
            pathway — no upfront cost, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://outlook.office.com/book/SkarionConsultationCall@inuberry.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-book"
              className="bg-[#122461] text-white rounded-[8px] px-8 py-3 text-[14px] font-[600] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a Free Consultation ▸
            </Link>
            <Link
              href="/pathways"
              id="final-cta-pathways"
              className="border border-[#122461] text-[#122461] rounded-[8px] px-8 py-3 text-[14px] font-[500] hover:bg-[#122461] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Explore Pathways
            </Link>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQ />
    </div>
  );
}
