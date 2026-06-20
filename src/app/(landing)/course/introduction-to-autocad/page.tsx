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
import { OutsidePlantEngineeringCourse, IntroductionToAutoCadCourse } from "@/constants/course";
import { auth } from "@/auth";
import { CoursesService, OpenAPI } from "@/api-client";
import Overview from "@/../videos/intro.mp4.json";
import video1 from "@/../videos/1.2.mp4.json";
import video2 from "@/../videos/1228.mp4.json";
import intro from "@/../videos/1217.mp4.json";
import FAQMini from "@/components/Course/FAQMini";

export const metadata: Metadata = {
  title: "Introduction to AutoCAD Course - Skarion",
  description: "Master the jack of all trades design software - AutoCAD",
  keywords: [
    "Introduction to AutoCAD Course",
    "AutoCAD",
    "AutoCAD Course",
    "AutoCAD Training",
    "Skarion",
    "Fiber Optic Design",
    "Telecommunications Engineering",
    "AutoCAD Design Training",
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
    title: "Introduction to AutoCAD Course - Skarion",
    description: "Master the jack of all trades design software - AutoCAD",
    url: "https://skarion.com/course/introduction-to-autocad",
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
    title: "Getting Started",
    lessons: [
      {
        id: "1.1",
        name: "Starting a New File and Opening an Existing One",
        isLocked: false,
        link: video1.sources[0].src,
      },
      {
        id: "1.2",
        name: "User Interface in AutoCAD",
        isLocked: false,
        link: video2.sources[0].src,
      },
      {
        id: "1.3",
        name: "Setting Up Drawing Units",
        isLocked: false,
        link: video2.sources[0].src,
      },
      {
        id: "1.4",
        name: "Using Various Zoom Options",
        isLocked: false,
        link: video2.sources[0].src,
      },
    ],
  },
  {
    week: 2,
    title: "Using Drawing Tools",
    lessons: [
      {
        id: "2.1",
        name: "Line, Polyline and Spline",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.2",
        name: "Drawing Circles",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.3",
        name: "Drawing Arcs",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.4",
        name: "Drawing Rectangles",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.5",
        name: "Drawing Polygons",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.6",
        name: "Drawing Construction Lines or Rays",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "2.7",
        name: "Applying Hatches and Gradient Hatches",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "A1",
        name: "Assignment 1",
        isLocked: true,
        link: video1.sources[0].src,
      }
    ],
  },
  {
    week: 3,
    title: "Using Modify Tools",
    lessons: [
      {
        id: "3.1",
        name: "Copying and Moving Objects",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.2",
        name: "Stretching, Scaling, and Offsetting Entities",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.3",
        name: "Rotating and MirroringEntities",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.4",
        name: "Trimming and Extending Entities",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.5",
        name: "Creating Fillets",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.6",
        name: "Creating Blend Curves",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.7",
        name: "Using Erase Tool",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.8",
        name: "Using Explode Tool ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.9",
        name: "Using Align Tool",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.10",
        name: "Using Break and Break at Point Tools",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.11",
        name: "Using Join Tool",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.12",
        name: "Using Overkill Command",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "3.12",
        name: "Using Array Tool ",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "A2",
        name: "Assignment 2",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 4,
    title: "Using Status Bar",
    lessons: [
      {
        id: "4.1",
        name: "Using Various Status BarToggles",
        isLocked: true,
        link: video1.sources[0].src,
      }
    ],
  },
  {
    week: 5,
    title: "Working with Layers",
    lessons: [
      {
        id: "5.1",
        name: "Layers",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "5.2",
        name: "Using Layer Options",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "A3",
        name: "Assignment 3",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 6,
    title: "Writing Standard and Annotative Texts",
    lessons: [
      {
        id: "6.1",
        name: "Writing Single Line and Multiline Texts",
        isLocked: true,
        link: video1.sources[0].src,
      }
    ],
  },
  {
    week: 7,
    title: "Using Dimensioning Tools",
    lessons: [
      {
        id: "7.1",
        name: "Using Dimensioning Tools - Dimensions Drop-Down",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "7.2",
        name: "Creating a New Dimension Style",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "A4",
        name: "Assignment 4",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  },
  {
    week: 8,
    title: "Adding Leaders",
    lessons: [
      {
        id: "8.1",
        name: "Using Multileader Tool",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "8.2",
        name: "Using Multileader Style Manager",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "8.3",
        name: "Using Multileader Align Tool",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "8.4",
        name: "Adding and Removing Leaders to an Existing Leader",
        isLocked: true,
        link: video1.sources[0].src,
      }
    ],
  },
  {
    week: 9,
    title: "Working with Blocks",
    lessons: [
      {
        id: "9.1",
        name: "Creating and Inserting Blocks",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "9.2",
        name: "Using Block Editor Tool",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "9.3",
        name: "Creating Annotative Blocks",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "9.4",
        name: "Creating Dynamic Blocks",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "9.5",
        name: "Renaming Blocks",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "9.6",
        name: "Using PURGE Command",
        isLocked: true,
        link: video1.sources[0].src,
      }
    ],
  },
  {
    week: 10,
    title: "Drawing Utilities",
    lessons: [
      {
        id: "10.1",
        name: "Using Drawing Utility Tools",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "10.2",
        name: "Using List Tool",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "10.3",
        name: "Using Quick Select Tool",
        isLocked: true,
        link: video1.sources[0].src,
      }
    ],
  },
  {
    week: 11,
    title: "Plotting and Printing",
    lessons: [
      {
        id: "11.1",
        name: "Plotting Drawings",
        isLocked: true,
        link: video1.sources[0].src,
      },
      {
        id: "A5",
        name: "Assignment 5",
        isLocked: true,
        link: video1.sources[0].src,
      },
    ],
  }
];

export default async function CoursePage() {
  const session = await auth();
  let isPurchased = false;
  let courseFound = false;

  try {
    OpenAPI.TOKEN = session?.accessToken;
    const courseId = IntroductionToAutoCadCourse.id.trim();
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
          Introduction to AutoCAD
        </h1>
        <p className="text-[16px] sm:text-[18px] font-[300] mt-4">
          Learn the ins and outs of AutoCAD, from basic drawing to advanced modeling. Suitable for those with a passion for design.
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
          11 Theory Modules · Live & On-Demand · 10+ Real World Projects
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
                <p className="text-[14px] font-[400] mt-2 mb-1">Assignments</p>
              </div>
              {/* <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
              <div className="w-full sm:w-[45%] md:w-[20%]">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">
                  5
                </p>
                <p className="text-[14px] font-[400] mt-2 mb-1">LLD Projects</p>
              </div> */}
              {/* <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
              <div className="w-full sm:w-[45%] md:w-[20%]">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">
                  20
                </p>
                <p className="text-[14px] font-[400] mt-2 mb-1">Quizzes</p>
              </div> */}
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
                alt={`Introduction To AutoCAD`}
                layout="fill"
                objectFit="cover"
                className="rounded-[14px]"
              />
            </div>
          </div>
          <p className="text-[24px] leading-[1.2] text-white mt-5 font-[500]">
            Introduction To AutoCAD
          </p>
          <EnrollButton isPurchased={isPurchased} />
        </div>
        <div className="block lg:hidden h-[80px]" />
      </div>
      <MobileCTA isPurchased={isPurchased} courseName={IntroductionToAutoCadCourse.title} />
    </div>
  );
}
