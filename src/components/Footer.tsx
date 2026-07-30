import LinkedinIcon from "@/svg/LinkedinIcon";
import FacebookIcon from "@/svg/FacebookIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import Image from "next/image";
import Link from "next/link";
import YouTubeIcon from "@/svg/YouTubeIcon";

const BOOKING_URL =
  "https://outlook.office.com/book/SkarionConsultationCall@inuberry.com/?ismsaljsauthenabled";

const BRAND_DESC =
  "Skarion is a success-based career acceleration and placement company helping international graduates and early-career professionals enter specialized U.S. career pathways. You pay only after you're placed.";

function FooterColumns() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 items-start max-w-[1440px] mx-auto w-full">
      {/* Col 1 — Brand */}
      <div className="text-white lg:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <Image src="/skarion.png" alt="Skarion" height={32} width={32} />
          <span className="text-white font-semibold tracking-wide">
            Skarion
          </span>
        </div>
        <p className="text-white/80 leading-relaxed text-[14px] max-w-xs">
          {BRAND_DESC}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
            <LinkedinIcon />
          </span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
            <YouTubeIcon />
          </span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
            <FacebookIcon />
          </span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
            <InstagramIcon />
          </span>
        </div>
      </div>

      {/* Col 2 — Pathways */}
      <div className="text-white">
        <p className="text-[16px] font-[600] mb-4">Pathways</p>
        <ul className="space-y-2">
          <li>
            <Link
              href="/pathways/engineering-infrastructure"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Engineering &amp; Infrastructure
            </Link>
          </li>
          <li>
            <Link
              href="/pathways/technology-data"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Technology &amp; Data
            </Link>
          </li>
          <li>
            <Link
              href="/pathways/business-operations"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Business &amp; Operations
            </Link>
          </li>
          <li>
            <Link
              href="/pathways"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              All Pathways
            </Link>
          </li>
        </ul>
      </div>

      {/* Col 3 — Company */}
      <div className="text-white">
        <p className="text-[16px] font-[600] mb-4">Company</p>
        <ul className="space-y-2">
          <li>
            <Link
              href="/about"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/success-stories"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Success Stories
            </Link>
          </li>
          <li>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Col 4 — Resources */}
      <div className="text-white">
        <p className="text-[16px] font-[600] mb-4">Resources</p>
        <ul className="space-y-2">
          <li>
            <Link
              href="/faq"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Pricing &amp; Model
            </Link>
          </li>
          <li>
            <Link
              href="/course/outside-plant-engineering"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] text-white/75 hover:text-[#c3ddf5] transition-colors"
            >
              Book a Consultation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="border-t border-white/20 mt-10" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/70 text-sm sm:my-8 my-5 gap-4">
        <p className="text-[13px]">© 2025 Skarion. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link
            href="/privacy-policy"
            className="text-[13px] hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-[13px] hover:text-white transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      {/* Mobile footer */}
      <div className="bg-[#122461] lg:hidden">
        <div className="pt-12 pb-5 px-6 md:px-12 w-full flex flex-col justify-between">
          <FooterColumns />
          <FooterBottom />
        </div>
      </div>

      {/* Desktop sticky reveal footer */}
      <div
        className="hidden lg:block lg:relative lg:h-[600px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="lg:relative lg:h-[calc(100vh+600px)] lg:-top-[100vh]">
          <div className="lg:h-[600px] bg-[#122461] lg:sticky lg:top-[calc(100vh-600px)]">
            <div className="absolute pt-12 px-6 md:px-12 h-full w-full flex flex-col overflow-auto justify-between">
              <FooterColumns />
              <FooterBottom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
