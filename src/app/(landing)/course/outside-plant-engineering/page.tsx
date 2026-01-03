import Image from "next/image";
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
import FAQMini from "@/components/Course/FAQMini";

const bootcampSchedule = [
  {
    week: 1,
    title: "Career & Industry Focus",
    lessons: [
      {
        id: "1.1",
        name: "OSP Engineering Roles & Outlook",
        isLocked: false,
        link: video1.sources[0].src,
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
        id: "2.1",
        name: "Submarine to Home Journey",
        isLocked: true,
        link: "/pdfs/lesson05.pdf",
      },
      {
        id: "2.2",
        name: "Core OSP Components and Hierarchy",
        isLocked: true,
        link: "/pdfs/lesson06.pdf",
      },
      {
        id: "2.3",
        name: "PON Basics and Capacity Planning",
        isLocked: true,
        link: "/pdfs/lesson06.pdf",
      },
      {
        id: "Q1",
        name: "Pop Quiz (13 Questions)",
        isLocked: true,
        link: "/pdfs/lesson06.pdf",
      },
    ],
  },
  {
    week: 3,
    title: "Fiber Technology Essentials Phase-1",
    lessons: [
      {
        id: "3.1",
        name: "Fiber Construction and Fundamentals",
        isLocked: true,
        link: "/pdfs/lesson08.pdf",
      },
      {
        id: "S1",
        name: "SCORM: Color Coded Fiber Distribution",
        isLocked: true,
        link: "/pdfs/lesson09.pdf",
      },
      {
        id: "S2",
        name: "SCORM: Total Internal Reflection",
        isLocked: true,
        link: "/pdfs/lesson09.pdf",
      },
      {
        id: "Q2",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson10.pdf",
      },
    ],
  },
  {
    week: 4,
    title: "Fiber Technology Essentials Phase-2",
    lessons: [
      {
        id: "4.1",
        name: "Fusion Splicing and Quality Control",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "S3",
        name: "SCORM: Mini Fusion Lab",
        isLocked: true,
        link: "/pdfs/lesson12.pdf",
      },
      {
        id: "Q3",
        name: "Pop Quiz (15 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
    ],
  },
  {
    week: 5,
    title: "Legal & Regulatory Framework",
    lessons: [
      {
        id: "5.1",
        name: "Site Planning: ROW, Easements and Maps",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "S4",
        name: "SCORM: Permit Picker",
        isLocked: true,
        link: "/pdfs/lesson12.pdf",
      },
      {
        id: "Q4",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
    ],
  },
  {
    week: 6,
    title: "Underground Infrastructure",
    lessons: [
      {
        id: "6.1",
        name: "Underground Infrastructure",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "S5",
        name: "SCORM: 811 Locate",
        isLocked: true,
        link: "/pdfs/lesson12.pdf",
      },
      {
        id: "6.2",
        name: "Aerial Infrastructure",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "S6",
        name: "SCORM: Span Sense",
        isLocked: true,
        link: "/pdfs/lesson12.pdf",
      },
      {
        id: "6.3",
        name: "Network Components Deep Dive",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q5",
        name: "Pop Quiz (20 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
    ],
  },
  {
    week: 7,
    title: "GIS Address Classification & Capacity Planning",
    lessons: [
      {
        id: "7.1",
        name: "Type of OSP Service Locations",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "7.2",
        name: "Capacity and Velocity Planning",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q6",
        name: "Pop Quiz (9 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
    ],
  },
  {
    week: 8,
    title: "PON Technology & Network Architecture",
    lessons: [
      {
        id: "8.1",
        name: "PON Specifications, deployment, and QoS",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q7",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
    ],
  },
  {
    week: 9,
    title: "Design Constraints & Optimization",
    lessons: [
      {
        id: "9.1",
        name: "Design Rules and Engineering Principles",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q8",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
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
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "10.2",
        name: "Mapping Fundamentals",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "10.3",
        name: "Project Definition and Network Planning",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "10.4",
        name: "Network Hierarchy",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "10.5",
        name: "Placement Principles",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q9",
        name: "Pop Quiz (14 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
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
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q10",
        name: "Pop Quiz (20 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
    ],
  },
  {
    week: 12,
    title: "HLD Project 01 - Tracing EOP, CL and ROW",
    lessons: [
      {
        id: "12.1",
        name: "HLD Project 01 - Tracing EOP, CL and ROW (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "12.2",
        name: "HLD Project 01 - Tracing EOP, CL and ROW (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q11",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P1",
        name: "Project - Tracing EOP, CL and ROW",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 13,
    title: "HLD Project 02 - Service Groups",
    lessons: [
      {
        id: "13.1",
        name: "HLD Project 02 - Service Groups (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "13.2",
        name: "HLD Project 02 - Service Groups (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q12",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P2",
        name: "Project - Service Groups",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 14,
    title: "HLD Project 03 - Conduit, Handhole and Flowerpot Placement",
    lessons: [
      {
        id: "14.1",
        name: "HLD Project 03 - Conduit, Handhole and Flowerpot Placement (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "14.2",
        name: "HLD Project 03 - Conduit, Handhole and Flowerpot Placement (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q13",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P3",
        name: "Project - Conduit, Handhole and Flowerpot Placement",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 15,
    title: "HLD Project 04 - Splice Closure Placement",
    lessons: [
      {
        id: "15.1",
        name: "HLD Project 04 - Splice Closure Placement (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "15.2",
        name: "HLD Project 04 - Splice Closure Placement (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q14",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P4",
        name: "Project - Splice Closure Placement",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 16,
    title: "HLD Project 05 - Vicinity Map",
    lessons: [
      {
        id: "16.1",
        name: "HLD Project 05 - Vicinity Map (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "16.2",
        name: "HLD Project 05 - Vicinity Map (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q15",
        name: "Pop Quiz (7 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P5",
        name: "Project - Vicinity Map",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 17,
    title: "LLD Project 01 - Labels and Callouts",
    lessons: [
      {
        id: "17.1",
        name: "LLD Project 01 - Labels and Callouts (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "17.2",
        name: "LLD Project 01 - Labels and Callouts (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q16",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P6",
        name: "Project -  Labels and Callouts",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 18,
    title: "LLD Project 02 - Schematic",
    lessons: [
      {
        id: "18.1",
        name: "LLD Project 02 - Schematic (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "18.2",
        name: "LLD Project 02 - Schematic (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q17",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P7",
        name: "Project - Schematic",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 19,
    title: "LLD Project 03 - Cable and Terminal Labelling",
    lessons: [
      {
        id: "19.1",
        name: "LLD Project 03 - Cable and Terminal Labelling (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "19.2",
        name: "LLD Project 03 - Cable and Terminal Labelling (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q18",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P8",
        name: "Project - Cable and Terminal Labelling",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 20,
    title: "LLD Project 04 - Paperspace, Splice Point & Splice Diagram",
    lessons: [
      {
        id: "20.1",
        name: "LLD Project 04 - Paperspace, Splice Point & Splice Diagram (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "20.2",
        name: "LLD Project 04 - Paperspace, Splice Point & Splice Diagram (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q19",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P9",
        name: "Project - Paperspace, Splice Point & Splice Diagram",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
    ],
  },
  {
    week: 21,
    title: "LLD Project 5 - BOM and Splice Matrix",
    lessons: [
      {
        id: "21.1",
        name: "LLD Project 5 - BOM and Splice Matrix (Slide)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "21.2",
        name: "LLD Project 5 - BOM and Splice Matrix (Video)",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
      },
      {
        id: "Q20",
        name: "Pop Quiz (10 Questions)",
        isLocked: true,
        link: "/pdfs/lesson13.pdf",
      },
      {
        id: "P10",
        name: "Project - BOM and Splice Matrix",
        isLocked: true,
        link: "/pdfs/lesson11.pdf",
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
        <p className="text-[32px] text-[42px] leading-[1.2]">
          Outside Plant Engineering
        </p>
        <p className="text-[16px] sm:text-[18px] font-[300] mt-4">
          OSP Engineering involves the design, installation, and maintenance of
          outdoor infrastructure, including fiber optic routes, cables, and
          utility networks.
        </p>
        <div className="rounded-[14px] bg-[#122461] mt-10 text-white overflow-hidden aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/8ZYRpCTfY3c?si=kbaMZci2jPmz6jiI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <p className="text-[24px] font-[500] mt-10 capitalize">
          Unlock high-demand careers in the US with OSP engineering!
        </p>
        <p className="text-[14px] sm:text-[16px] font-[500] text-[#666666] font-[300] mt-3">
          13 Theory Modules · Live & On-Demand · 10+ Real World Projects
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
                  4.8 (10+)
                </span>
              </div>
              <span className="text-[12px] font-[400]">
                Trusted by 20+ Students Worldwide
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
            Over a comprehensive 10 module program, you'll master the principles
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
                  10
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
        <div className="sticky top-[126px] rounded-[14px] bg-[#122461] w-full px-5 py-5 hidden lg:block">
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
      <MobileCTA isPurchased={isPurchased} />
    </div>
  );
}
