import Image from "next/image";
import type { Metadata } from "next";
import Video from "next-video";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EnrollButton from "@/components/Course/EnrollButton";
import MobileCTA from "@/components/Course/MobileCTA";
import { OutsidePlantEngineeringCourse } from "@/constants/course";
import { auth } from "@/auth";
import { CoursesService, OpenAPI } from "@/api-client";
import Overview from "@/../videos/intro.mp4.json";
import video1 from "@/../videos/1.2.mp4.json";
import video2 from "@/../videos/1228.mp4.json";
import intro from "@/../videos/1217.mp4.json";
import FAQMini from "@/components/Course/FAQMini";

export const metadata: Metadata = {
  title: "Outside Plant Engineering Course - Skarion",
  description: "Unlock high-demand careers in the US with OSP engineering",
  keywords: [
    "Outside Plant Engineering Course",
    "OSP",
    "OSP Course",
    "OSP Engineering",
    "Skarion",
    "Fiber Optic Design",
    "Telecommunications Engineering",
    "OSP Design Training",
    "FTTH Design",
    "Fiber to the Home",
    "GIS for OSP",
    "AutoCAD for OSP",
    "Career Support",
    "Job Placement",
    "OSP Jobs",
    "Job Guarantee",
    "Telecom Infrastructure",
    "Network Design",
    "OSP Field Engineering",
    "Fiber Optic Technician",
    "Broadband Engineering",
    "Utility Engineering",
    "OSP Project Management",
    "Fiber Network Planning",
    "OSP Certification",
    "Career in Telecommunications",
    "US OSP Engineering Jobs",
  ],
  openGraph: {
    title: "Outside Plant Engineering Course - Skarion",
    description: "Unlock high-demand careers in the US with OSP engineering",
    url: "https://skarion.com/course/outside-plant-engineering",
    siteName: "Skarion",
    images: [
      {
        url: "https://skarion.com/osp.jpg",
        width: 1200,
        height: 630,
        alt: "Outside Plant Engineering Course - Skarion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outside Plant Engineering Course - Skarion",
    description: "Unlock high-demand careers in the US with OSP engineering",
    images: ["https://skarion.com/osp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const bootcampSchedule = [
  {
    week: 1,
    title: "Career & Industry Focus",
    lessons: [
      {
        id: "V1",
        name: "Introduction to OSP Engineering",
        isLocked: false,
        link: video1.sources[0].src,
      },
      {
        id: "V2",
        name: "OSP Engineering Career Pathways",
        isLocked: false,
        link: video1.sources[0].src,
      },
      {
        id: "1.1",
        name: "OSP Engineering Roles and Outlooks ",
        isLocked: false,
        link: video2.sources[0].src,
      },
      {
        id: "V3",
        name: "Essential Skills for OSP Engineers ",
        isLocked: false,
        link: video2.sources[0].src,
      },
      {
        id: "1.2",
        name: "Essential Soft Skills for OSP Engineers",
        isLocked: false,
        link: video2.sources[0].src,
      },
    ],
  },
  {
    week: 2,
    title: "Network Architecture Fundamentals",
    lessons: [
      {
        id: "V4",
        name: "Submarine to Home Journey",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.1",
        name: "Submarine to Home Journey",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V5",
        name: "Internet from Central office to Customer",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V6",
        name: "Passive Optional Network (PON)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.2",
        name: "Core OSP Components and Hierarchy",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V7",
        name: "Optical Splitter - EXFO animated glossary of Fiber Optics",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V8",
        name: "Centralized vs Cascaded",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.3",
        name: "PON Basics and Capacity Planning",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q1",
        name: "Quiz 1 (13 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 3,
    title: "Fiber Technology Essentials",
    lessons: [
      {
        id: "V9",
        name: "Optical Fiber Mechanisms and Types",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V10",
        name: "Fiber Optic Color Coding",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V11",
        name: "Cable Type, Attenuation and Tests",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.1",
        name: "Fiber Construction and Fundamentals",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "S1",
        name: "SCORM: Color Snap",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "S2",
        name: "SCORM: Total Internal Reflection",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q2",
        name: "Quiz 2 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 4,
    title: "Fiber Technology Essentials Phase-2",
    lessons: [
      {
        id: "V12",
        name: "Fiber Splicing",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V13",
        name: "Splicing Closures",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "4.1",
        name: "Fusion Splicing and Quality Control",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "S3",
        name: "SCORM: Mini Fusion Lab",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q3",
        name: "Quiz 3 (15 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 5,
    title: "Legal & Regulatory Framework",
    lessons: [
      {
        id: "V14",
        name: "ROW , EOP and CL",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V15",
        name: "Rules and Regulations",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "5.1",
        name: "Site Planning: ROW, Easements and Maps",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "S4",
        name: "SCORM: Permit Picker",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q4",
        name: "Quiz 4 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 6,
    title: "Underground Infrastructure",
    lessons: [
      {
        id: "V16",
        name: "Underground Construction Methods",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V17",
        name: "Handholes and Excavation",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V18",
        name: "ONT Mounting",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "6.1",
        name: "Underground Infrastructure",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "S5",
        name: "SCORM: 811 Locate",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V19",
        name: "Aerial Fiber Optic Networks",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V20",
        name: "Aerial Fiber Installations",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V21",
        name: "Storm Hardening, Joint Use Agreements and NESC",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V22",
        name: "Aerial Maintanance Access",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "6.2",
        name: "Aerial Infrastructure",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V23",
        name: "OSP Hardware Choices",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V24",
        name: "Terminal Sizing",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "S6",
        name: "SCORM: Span Sense",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "6.3",
        name: "Network Components Deep Dive",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q5",
        name: "Quiz 5 (20 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 7,
    title: "GIS Address Classification & Capacity Planning",
    lessons: [
      {
        id: "V25",
        name: "Address Classification",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "7.1",
        name: "Type of OSP Service Locations",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V26",
        name: "Capacity Calculation",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "7.2",
        name: "Capacity and Velocity Planning",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q6",
        name: "Quiz 6 (9 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 8,
    title: "PON Technology & Network Architecture",
    lessons: [
      {
        id: "V27",
        name: "PON GPON and XGPON",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "8.1",
        name: "PON Specifications, deployment, and QoS",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q7",
        name: "Quiz 7 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 9,
    title: "Design Constraints & Optimization",
    lessons: [
      {
        id: "V28",
        name: "Fiber Count Rules",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V29",
        name: "3 Mechanical Rules",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V30",
        name: "Fiber Optic Network Protection",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "V31",
        name: "Cost Optimization",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "9.1",
        name: "Design Rules and Engineering Principles",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q8",
        name: "Quiz 8 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 10,
    title: "HLD Theory",
    lessons: [
      {
        id: "10.1",
        name: "Introduction to HLD",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "10.2",
        name: "Mapping Fundamentals",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "10.3",
        name: "Project Definition and Network Planning",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "10.4",
        name: "Network Hierarchy",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "10.5",
        name: "Placement Principles",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q9",
        name: "Quiz 9 (14 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 11,
    title: "SKARION Design Standards",
    lessons: [
      {
        id: "11.1",
        name: "SKARION Design Standards",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q10",
        name: "Quiz 10 (20 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 12,
    title: "HLD Project 01 - Tracing EOP, CL and ROW",
    lessons: [
      {
        id: "12.1",
        name: "HLD Project 01 - Tracing EOP, CL and ROW",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV1",
        name: "HLD Project 01 - Tracing EOP, CL and ROW",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q11",
        name: "Quiz 11 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P1",
        name: "Project 01 - Tracing EOP, CL and ROW",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 13,
    title: "HLD Project 02 - Service Groups",
    lessons: [
      {
        id: "13.1",
        name: "HLD Project 02 - Service Groups",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV2",
        name: "HLD Project 02 - Service Groups",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q12",
        name: "Quiz 12 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P2",
        name: "Project 02- Service Groups",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 14,
    title: "HLD Project 03 - Conduit, Handhole and Flowerpot Placement",
    lessons: [
      {
        id: "14.1",
        name: "HLD Project 03 - Conduit, Handhole and Flowerpot Placement",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV3",
        name: "HLD Project 03 - Conduit, Handhole and Flowerpot Placement",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q13",
        name: "Quiz 13 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P3",
        name: "Project 03 - Conduit, Handhole and Flowerpot Placement",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 15,
    title: "HLD Project 04 - Splice Closure Placement",
    lessons: [
      {
        id: "15.1",
        name: "HLD Project 04 - Splice Closure Placement ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV4",
        name: "HLD Project 04 - Splice Closure Placement ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q14",
        name: "Quiz 14 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P4",
        name: "Project 04 - Splice Closure Placement",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 16,
    title: "HLD Project 05 - Vicinity Map",
    lessons: [
      {
        id: "16.1",
        name: "HLD Project 05 - Vicinity Map",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV5",
        name: "HLD Project 05 - Vicinity Map ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q15",
        name: "Quiz 15 (7 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P5",
        name: "Project 05 - Vicinity Map",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 17,
    title: "LLD Project 01 - Labels and Callouts",
    lessons: [
      {
        id: "17.1",
        name: "LLD Project 01 - Labels and Callouts ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV1",
        name: "LLD Project 01 - Labels and Callouts",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q16",
        name: "Quiz 16 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P6",
        name: "Project 06 -  Labels and Callouts",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 18,
    title: "LLD Project 02 - Schematic",
    lessons: [
      {
        id: "18.1",
        name: "LLD Project 02 - Schematic ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV2",
        name: "LLD Project 02 - Schematic ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q17",
        name: "Quiz 17 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P7",
        name: "Project 07 - Schematic",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 19,
    title: "LLD Project 03 - Cable and Terminal Labelling",
    lessons: [
      {
        id: "19.1",
        name: "LLD Project 03 - Cable and Terminal Labelling ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV3",
        name: "LLD Project 03 - Cable and Terminal Labelling ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q18",
        name: "Quiz 18 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P8",
        name: "Project 08 - Cable and Terminal Labelling",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 20,
    title: "LLD Project 04 - Paperspace, Splice Point & Splice Diagram",
    lessons: [
      {
        id: "20.1",
        name: "LLD Project 04 - Paperspace, Splice Point & Splice Diagram ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV4",
        name: "LLD Project 04 - Paperspace, Splice Point & Splice Diagram ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q19",
        name: "Quiz 19 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P9",
        name: "Project 09 - Paperspace, Splice Point & Splice Diagram",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 21,
    title: "LLD Project 05 - BOM and Splice Matrix",
    lessons: [
      {
        id: "21.1",
        name: "LLD Project 5 - BOM and Splice Matrix ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "PV5",
        name: "LLD Project 5 - BOM and Splice Matrix ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "Q20",
        name: "Quiz 20 (10 Questions)",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "P10",
        name: "Project 10 - BOM and Splice Matrix",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
];

export default async function CoursePage() {
  const session = await auth();
  let isPurchased = false;
  let courseFound = false;

  try {
    OpenAPI.TOKEN = session?.accessToken;
    const courseId = OutsidePlantEngineeringCourse.id.trim();
    const course = await CoursesService.coursesControllerFindOne(courseId);
    if (!course) {
      throw new Error("Course not found");
    }
    courseFound = true;

    const resp = await CoursesService.coursesControllerGetMyCourse(courseId);
    console.log("resp", resp);
    isPurchased = !!resp;
  } catch (error) {
    isPurchased = false;
    console.warn("Course not purchased or unavailable:", error);
  }

  console.log("isPurchased", isPurchased);
  console.log("courseFound", courseFound);

  return (
    <div className="w-full bg-[#ffffff] py-10 sm:px-12 px-6 max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-[65%]">
        <h1 className="text-[32px] text-[42px] leading-[1.2]">
          Outside Plant Engineering
        </h1>
        <p className="text-[16px] sm:text-[18px] font-[300] mt-4">
          OSP Engineering involves the design, installation, and maintenance of
          outdoor infrastructure, including fiber optic routes, cables, and
          utility networks.
        </p>
        <div className="rounded-[14px] bg-[#122461] mt-10 text-white overflow-hidden aspect-video">
          <Video
                src={intro.sources[0].src}
                playsInline
                disablePictureInPicture
                controls
                className="object-cover"
          />
        </div>
        <p className="text-[24px] font-[500] mt-10 capitalize">
          Unlock high-demand careers in the US with OSP engineering!
        </p>
        <p className="text-[14px] sm:text-[16px] font-[500] text-[#666666] font-[300] mt-3">
          22 Theory Modules · Live & On-Demand · 11+ Real World Projects
        </p>
        <div className="w-full py-4 px-4 sm:px-6 border border-[#EBEBEB] rounded-[14px] mt-8 flex flex-col sm:flex-row items-left justify-between gap-4">
          <p className="text-[14px] font-[400] sm:w-[35%]">
            Gain hands-on fiber optic design experience under expert mentorship,
            ready to showcase on your resume.
          </p>
          <span className="hidden sm:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-0 sm:mb-3 mt-3 pr-6">
            <div className="flex -space-x-2">
              <Image
                src="/image 1.jpg"
                alt="student"
                width={28}
                height={28}
                className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
              />
              <Image
                src="/profile 1.jpg"
                alt="student"
                width={28}
                height={28}
                className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
              />
              <Image
                src="/image 3.jpg"
                alt="student"
                width={28}
                height={28}
                className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
              />
              <Image
                src="/profile 2.jpg"
                alt="student"
                width={28}
                height={28}
                className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]"
              />
            </div>
            <div className="flex flex-col items-start sm:items-start">
              <div className="flex items-center gap-[2px] text-[#f5b942]">
                <span className="text-base">★</span>
                <span className="text-base">★</span>
                <span className="text-base">★</span>
                <span className="text-base">★</span>
                <span className="text-base">★</span>
                <span className="ml-[8px] text-gray-500 text-[12px] font-[500]">
                  4.8 (30+)
                </span>
              </div>
              <span className="text-[12px] font-[400]">
                Trusted by 70+ Students Worldwide
              </span>
            </div>
          </div>
        </div>
        <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:w-[40%]">
            <p className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.2] capitalize">
              Why OSP engineering could be your next big step
            </p>
            <p className="text-[16px] font-[300] mt-6">
              Demand for skilled professionals in telecom industry continues to
              rise, offering long-term stability and career advancement.
            </p>
            <p className="text-[36px] sm:text-[42px] md:text-[48px] font-[500] mt-8">
              300% +
            </p>
            <p className="text-[16px] font-[300] mt-2">
              Growth in Job Openings Since 2020
            </p>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
              <p className="text-[16px] font-[700] text-[#ffffff]">
                HIGH DEMAND, HIGH OPPORTUNITY
              </p>
              <p className="text-[14px] font-[400] mt-3 text-[#ffffff]">
                The demand for OSP engineers is exploding, with thousands of
                open roles across the industry.
              </p>
            </div>
            <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
              <p className="text-[16px] font-[700] text-[#ffffff]">
                NO EXPERIENCE NEEDED
              </p>
              <p className="text-[14px] font-[400] mt-3 text-[#ffffff]">
                Start from scratch with comprehensive training designed for new
                grads and career changers.
              </p>
            </div>
            <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
              <p className="text-[16px] font-[700] text-[#ffffff]">
                FAST-TRACK CAREER GROWTH
              </p>
              <p className="text-[14px] font-[400] mt-3 text-[#ffffff]">
                OSP engineering provides rapid career advancement with
                practical, hands-on experience.
              </p>
            </div>
            <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
              <p className="text-[16px] font-[700] text-[#ffffff]">
                LONG-TERM CAREER SECURITY
              </p>
              <p className="text-[14px] font-[400] mt-3 text-[#ffffff]">
                OSP offers a stable career path, with clear growth from
                entry-level to senior roles and high earnings.
              </p>
            </div>
          </div>
        </div>
        <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
        <div className="rounded-[14px] h-[250px] sm:h-[300px] md:h-[400px] relative overflow-hidden border border-[#EBEBEB]">
          <Video
            src={Overview as any}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-[70%] mt-10">
          <p className="text-[16px] font-[300]">
            Over a comprehensive 22 module program, you'll master the principles
            of OSP engineering from fiber network design to real world
            implementation. Supported by hands on projects and expert mentors,
            this course equips you with the skills to excel in a fast growing,
            high demand industry.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 mt-10">
          <div className="w-full py-5 px-6 bg-[#122461] rounded-[14px]">
            <p className="text-[16px] font-[700] text-[#ffffff]">
              OSP FOUNDATIONS
            </p>
            <p className="text-[14px] font-[400] mt-2 text-[#ffffff]">
              Understand the key principles behind the design and construction
              of fiber optic networks.
            </p>
          </div>
          <div className="w-full py-5 px-6 bg-[#122461] rounded-[14px]">
            <p className="text-[16px] font-[700] text-[#ffffff]">
              NETWORK DESIGN
            </p>
            <p className="text-[14px] font-[400] mt-2 text-[#ffffff]">
              Learn how to design and implement fiber networks to serve
              residential and commercial areas efficiently.
            </p>
          </div>
        </div>
        <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
        <div className="w-full md:w-[50%]">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.4] font-[500] capitalize">
            Learn by Designing
          </p>
          <p className="text-[16px] font-[300] mt-4">
            From foundational theory to hands-on projects, our course ensures
            you gain the skills needed for OSP engineering success.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 justify-between items-start mt-10">
          <div className="rounded-[14px] sm:h-[350px] md:h-[400px] min-h-[370px] relative bg-[#122461] w-full overflow-hidden">
            <div className="py-5 px-8">
              <p className="text-[22px] sm:text-[24px] md:text-[26px] text-[#ffffff] leading-[1.4] font-[500] capitalize">
                Hands-On Learning
              </p>
              <p className="text-[14px] font-[300] mt-4 text-[#ffffff]">
                Work on real-world challenges and enhance your skills with
                expert-designed video content.
              </p>
            </div>
            <Image
              src="/ppt.jpg"
              alt="ppt"
              width={400}
              height={400}
              className="absolute bottom-0 right-[-10%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
            />
            <Image
              src="/autocad.jpg"
              alt="ppt"
              width={400}
              height={400}
              className="absolute bottom-0 right-[-30%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
            />
            <Image
              src="/video.jpg"
              alt="ppt"
              width={400}
              height={400}
              className="absolute bottom-0 right-[-50%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="rounded-[14px]  sm:h-[350px] md:h-[400px] min-h-[370px] relative bg-[#122461] w-full overflow-hidden">
            <div className="py-5 px-8">
              <p className="text-[22px] sm:text-[24px] md:text-[26px] text-[#ffffff] leading-[1.4] font-[500] capitalize">
                Tailored Mentorship
              </p>
              <p className="text-[14px] font-[300] mt-4 text-[#ffffff]">
                Get exclusive, tailored guidance with dedicated one-on-one
                sessions designed just for you.
              </p>
            </div>
            <Image
              src="/meeting.jpg"
              alt="meeting"
              width={400}
              height={400}
              className="absolute bottom-0 right-[-10%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
        <div className="w-full rounded-[14px] border border-[#EBEBEB] pt-6 pb-4 px-6 sm:px-8">
          <div className="mb-6 border-b border-gray-700">
            <p className="text-[22px] sm:text-[24px] md:text-[26px] leading-[1.4] font-[500] capitalize">
              Course Outline
            </p>
            <p className="text-[14px] font-[300] mt-3">
              From foundational theory to hands-on projects, our course ensures
              you gain the skills needed for OSP engineering success.
            </p>
            <div className="w-full py-4 px-6 border border-[#EBEBEB] rounded-[14px] my-8 flex flex-wrap items-center justify-between gap-4">
              <div className="w-full sm:w-[45%] md:w-[20%]">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">
                  11
                </p>
                <p className="text-[14px] font-[400] mt-2 mb-1">
                  Theory Modules
                </p>
              </div>
              <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
              <div className="w-full sm:w-[45%] md:w-[20%]">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">
                  5
                </p>
                <p className="text-[14px] font-[400] mt-2 mb-1">HLD Projects</p>
              </div>
              <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
              <div className="w-full sm:w-[45%] md:w-[20%]">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">
                  5
                </p>
                <p className="text-[14px] font-[400] mt-2 mb-1">LLD Projects</p>
              </div>
              <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
              <div className="w-full sm:w-[45%] md:w-[20%]">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">
                  20
                </p>
                <p className="text-[14px] font-[400] mt-2 mb-1">Quizzes</p>
              </div>
            </div>
          </div>

          <Accordion type="multiple" className="w-full">
            {bootcampSchedule.map((weekData) => (
              <AccordionItem
                key={weekData.week}
                value={`week-${weekData.week}`}
                className="border-b border-[#EBEBEB] last:border-b-0"
              >
                <AccordionTrigger className="hover:no-underline text-left py-4">
                  <span className="font-[400] text-[16px] sm:text-[18px]">
                    Module {weekData.week}: {weekData.title}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="p-0">
                  <div className="space-y-2 pb-4">
                    {weekData.lessons.map((lesson) =>
                      lesson.isLocked ? (
                        <div
                          key={lesson.id}
                          className="w-full flex items-center justify-between py-3 px-4 rounded-[14px] text-white bg-[#1e3a8a] opacity-60 cursor-not-allowed"
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-[16px] font-[400]">
                              {lesson.id}
                            </span>
                            <span className="font-[16px]">{lesson.name}</span>
                          </div>
                          <span className="text-[14px] font-[400]">Locked</span>
                        </div>
                      ) : (
                        <AccordionItem
                          key={lesson.id}
                          value={`lesson-${lesson.id}`}
                          className="border-none"
                        >
                          <AccordionTrigger className="w-full flex items-center justify-between py-3 px-4 rounded-[14px] text-white transition hover:no-underline bg-[#122461]">
                            <div className="flex items-center space-x-4">
                              <span className="text-[16px] font-[400]">
                                {lesson.id}
                              </span>
                              <span className="font-[16px] hover:text-[#c3ddf5]">
                                {lesson.name}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="p-0 mt-2">
                            <div className="rounded-[14px] overflow-hidden bg-black">
                              <Video
                                src={lesson.link}
                                playsInline
                                disablePictureInPicture
                                controls
                                className="object-cover"
                              />
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ),
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
        <div className="w-full">
          <FAQMini />
        </div>
      </div>
      <div className="w-full lg:w-[30%]">
        <div className="sticky top-[126px] rounded-[14px] bg-[#122461] w-full px-8 py-8 hidden lg:block">
          <div className="relative bg-[#ffffff] rounded-[14px] h-[200px]">
            <div className="absolute inset-0 bg-cover bg-center">
              <Image
                src={"/osp.jpg"}
                alt={`Outside Plant Engineering`}
                layout="fill"
                objectFit="cover"
                className="rounded-[14px]"
              />
            </div>
          </div>
          <p className="text-[24px] leading-[1.2] text-white mt-5 font-[500]">
            Outside Plant Engineering
          </p>
          <EnrollButton isPurchased={isPurchased} />
        </div>
        <div className="block lg:hidden h-[80px]" />
      </div>
      <MobileCTA isPurchased={isPurchased} courseName={OutsidePlantEngineeringCourse.title} />
    </div>
  );
}
