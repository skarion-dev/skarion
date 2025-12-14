import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import IntroVideo from "@/components/IntroVideo";

const bootcampSchedule = [
  {
    week: 1,
    title: "AI Coding Agents",
    lessons: [
      { id: "01", name: "Cursor & Claude", isLocked: true, link: "/pdfs/lesson01.pdf" },
      { id: "02", name: "Frontend Environment", isLocked: false, link: "/pdfs/lesson02.pdf" },
      { id: "03", name: "Github Version Control", isLocked: false, link: "/pdfs/lesson03.pdf" },
      { id: "04", name: "Office hours", isLocked: true, link: "/pdfs/lesson04.pdf" },
    ],
  },
  {
    week: 2,
    title: "JSX Structure",
    lessons: [
      { id: "05", name: "JSX Fundamentals & Semantics", isLocked: true, link: "/pdfs/lesson05.pdf" },
      { id: "06", name: "Layouts in Next.js", isLocked: false, link: "/pdfs/lesson06.pdf" },
      { id: "07", name: "Styling with Tailwind CSS", isLocked: false, link: "/pdfs/lesson07.pdf" },
    ],
  },
  {
    week: 3,
    title: "React State Management",
    lessons: [
      { id: "08", name: "useState and useEffect", isLocked: true, link: "/pdfs/lesson08.pdf" },
      { id: "09", name: "Context API for Global State", isLocked: false, link: "/pdfs/lesson09.pdf" },
      { id: "10", name: "Building Custom Hooks", isLocked: false, link: "/pdfs/lesson10.pdf" },
    ],
  },
  {
    week: 4,
    title: "Deployment & Advanced Topics",
    lessons: [
      { id: "11", name: "Vercel Deployment Pipeline", isLocked: true, link: "/pdfs/lesson11.pdf" },
      { id: "12", name: "Serverless Functions (APIs)", isLocked: false, link: "/pdfs/lesson12.pdf" },
      { id: "13", name: "Final Project Review", isLocked: true, link: "/pdfs/lesson13.pdf" },
    ],
  },
];

export default function CoursePage(){
    return (
        <div className="w-full bg-[#ffffff] py-10 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-[65%]">
                <p className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.2]">Outside Plant Engineering</p>
                <p className="text-[16px] sm:text-[18px] font-[300] mt-4">
                    OSP Engineering involves the design, installation, and maintenance of outdoor infrastructure, including fiber optic routes, cables, and utility networks.
                </p>
                <div className="rounded-[14px] h-[250px] sm:h-[300px] md:h-[400px] relative bg-[#122461] mt-10 text-white"></div>
                <p className="text-[20px] sm:text-[24px] font-[500] mt-10 capitalize">Unlock high-demand careers in the US with OSP engineering!</p>
                <p className="text-[14px] sm:text-[16px] font-[500] text-[#666666] font-[300] mt-2">
                    13 Theory Modules · Live & On-Demand · 10+ Real World Projects
                </p>
                <div className="w-full py-4 px-4 sm:px-6 border border-[#EBEBEB] rounded-[14px] mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[14px] font-[400] sm:w-[45%]">
                        Gain hands-on fiber optic design experience under expert mentorship, ready to showcase on your resume.                    
                    </p>
                    <span className="hidden sm:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            <Image src="/image 1.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                            <Image src="/profile 1.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                            <Image src="/image 3.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                            <Image src="/profile 2.jpg" alt="student" width={35} height={35} className="rounded-full aspect-square object-cover border border-[#ffffff]" />
                        </div>
                        <div className="flex flex-col justify-between pr-4">
                            <div className="flex items-center gap-[2px] text-[#f5b942]">
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="text-base">★</span>
                                <span className="ml-[8px] text-gray-500 text-[12px] font-[500]">4.8 (10+)</span>
                            </div>
                            <span className="text-[12px] font-[400]">Trusted by 20+ Students Worldwide</span>
                        </div>
                    </div>
                </div>
                <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="w-full lg:w-[40%]">
                        <p className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.2] capitalize">Why OSP engineering could be your next big step</p>
                        <p className="text-[16px] font-[300] mt-6">
                            Demand for skilled professionals in telecom industry continues to rise, offering long-term stability and career advancement.
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
                                The demand for OSP engineers is exploding, with thousands of open roles across the industry.
                            </p>
                        </div>
                        <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
                            <p className="text-[16px] font-[700] text-[#ffffff]">
                                NO EXPERIENCE NEEDED       
                            </p>
                            <p className="text-[14px] font-[400] mt-3 text-[#ffffff]">
                                Start from scratch with comprehensive training designed for new grads and career changers.
                            </p>
                        </div>
                        <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
                            <p className="text-[16px] font-[700] text-[#ffffff]">
                                FAST-TRACK CAREER GROWTH                 
                            </p>
                            <p className="text-[14px] font-[400] mt-3 text-[#ffffff]">
                                OSP engineering provides rapid career advancement with practical, hands-on experience.
                            </p>
                        </div>
                        <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
                            <p className="text-[16px] font-[700] text-[#ffffff]">
                                LONG-TERM CAREER SECURITY     
                            </p>
                            <p className="text-[14px] font-[400] mt-3 text-[#ffffff]">
                                OSP offers a stable career path, with clear growth from entry-level to senior roles and high earnings.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
                <div className="rounded-[14px] h-[250px] sm:h-[300px] md:h-[400px] relative overflow-hidden border border-[#EBEBEB]">
                    <IntroVideo />
                </div>
                <div className="w-full md:w-[70%] mt-10">
                    <p className="text-[16px] font-[300]">
                        Over a comprehensive 10 module program, you'll master the principles of OSP engineering from fiber network design to real world implementation. Supported by hands on projects and expert mentors, this course equips you with the skills to excel in a fast growing, high demand industry.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 mt-10">
                    <div className="w-full py-5 px-6 bg-[#122461] rounded-[14px]">
                        <p className="text-[16px] font-[700] text-[#ffffff]">
                            OSP FOUNDATIONS     
                        </p>
                        <p className="text-[14px] font-[400] mt-2 text-[#ffffff]">
                            Understand the key principles behind the design and construction of fiber optic networks.
                        </p>
                    </div>
                    <div className="w-full py-5 px-6 bg-[#122461] rounded-[14px]">
                        <p className="text-[16px] font-[700] text-[#ffffff]">
                            NETWORK DESIGN
                        </p>
                        <p className="text-[14px] font-[400] mt-2 text-[#ffffff]">
                            Learn how to design and implement fiber networks to serve residential and commercial areas efficiently.
                        </p>
                    </div>
                </div>
                <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
                <div className="w-full md:w-[50%]">
                        <p className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.4] font-[500] capitalize">Learn by Designing</p>
                        <p className="text-[16px] font-[300] mt-4">
                            From foundational theory to hands-on projects, our course ensures you gain the skills needed for OSP engineering success.
                        </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 justify-between items-start mt-10">
                    <div className="rounded-[14px] sm:h-[350px] md:h-[400px] min-h-[370px] relative bg-[#122461] w-full overflow-hidden">
                        <div className="py-5 px-8">
                            <p className="text-[22px] sm:text-[24px] md:text-[26px] text-[#ffffff] leading-[1.4] font-[500] capitalize">Hands-On Learning</p>
                            <p className="text-[14px] font-[300] mt-4 text-[#ffffff]">
                                Work on real-world challenges and enhance your skills with expert-designed video content.
                            </p>
                        </div>
                        <Image src="/ppt.jpg" alt="ppt" width={400} height={400} className="absolute bottom-0 right-[-10%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]" />
                        <Image src="/autocad.jpg" alt="ppt" width={400} height={400} className="absolute bottom-0 right-[-30%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]" />
                        <Image src="/video.jpg" alt="ppt" width={400} height={400} className="absolute bottom-0 right-[-50%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div className="rounded-[14px]  sm:h-[350px] md:h-[400px] min-h-[370px] relative bg-[#122461] w-full overflow-hidden">
                        <div className="py-5 px-8">
                            <p className="text-[22px] sm:text-[24px] md:text-[26px] text-[#ffffff] leading-[1.4] font-[500] capitalize">Tailored Mentorship</p>
                            <p className="text-[14px] font-[300] mt-4 text-[#ffffff]">
                                Get exclusive, tailored guidance with dedicated one-on-one sessions designed just for you.
                            </p>
                        </div>
                        <Image src="/meeting.jpg" alt="meeting" width={400} height={400} className="absolute bottom-0 right-[-10%] rounded-tl-[14px] border border-[#EBEBEB] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]" />
                    </div>
                </div>
                <hr className="my-10 md:my-14 border border-[#EBEBEB]" />
                <div className="w-full rounded-[14px] border border-[#EBEBEB] pt-6 pb-4 px-4 sm:px-6 md:px-8">
                    <div className="mb-6 border-b border-gray-700">
                        <p className="text-[22px] sm:text-[24px] md:text-[26px] leading-[1.4] font-[500] capitalize">Hands-On Learning</p>
                        <p className="text-[14px] font-[300] mt-3">
                            Work on real-world challenges and enhance your skills with expert-designed video content.
                        </p>
                        <div className="w-full py-4 px-2 sm:px-4 md:px-6 border border-[#EBEBEB] rounded-[14px] my-8 flex flex-wrap items-center justify-between gap-4">
                            <div className="w-full sm:w-[45%] md:w-[20%]">
                                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">10</p>
                                <p className="text-[14px] font-[400] mt-2 mb-1">Theory Modules</p>
                            </div>
                            <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
                            <div className="w-full sm:w-[45%] md:w-[20%]">
                                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">5</p>
                                <p className="text-[14px] font-[400] mt-2 mb-1">HLD Projects</p>
                            </div>
                            <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
                            <div className="w-full sm:w-[45%] md:w-[20%]">
                                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">5</p>
                                <p className="text-[14px] font-[400] mt-2 mb-1">LLD Projects</p>
                            </div>
                            <span className="hidden md:block w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
                            <div className="w-full sm:w-[45%] md:w-[20%]">
                                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2]">10</p>
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
                                    Week {weekData.week}: {weekData.title}
                                </span>
                                </AccordionTrigger>
                                
                                <AccordionContent className="p-0">
                                <div className="space-y-2 pb-4">
                                    {weekData.lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className={`flex items-center justify-between py-3 px-4 rounded-[14px] text-white ${lesson.isLocked ? 'bg-[#1e3a8a] opacity-60 cursor-not-allowed' : 'bg-[#122461]'}`}
                                    >
                                        <div className="flex items-center space-x-4">
                                        <span className="text-[16px] font-[400]">{lesson.id}</span>
                                        <a 
                                            href={lesson.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`font-medium ${lesson.isLocked ? 'pointer-events-none' : 'text-white hover:text-blue-400'}`}
                                        >
                                            {lesson.name}
                                        </a>
                                        
                                        </div>
                                        {lesson.isLocked && (
                                            <span className="flex items-center text-[14px] font-[400]">
                                                Locked
                                            </span>
                                        )}
                                    </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="w-full lg:w-[30%]">
                <div className="sticky top-[126px] rounded-[14px] bg-[#122461] w-full px-8 py-8">
                    <div className="bg-[#ffffff] rounded-[14px] h-[250px]">

                    </div>
                    <p className="text-[24px] leading-[1.2] text-white mt-4 font-[600]">Outside Plant Engineering</p>
                    <div className="mt-3 flex gap-3 mt-2">
                        <p className="text-[20px] leading-[1.2] text-white/80 line-through font-[500]">$500</p>
                        <p className="text-[20px] leading-[1.2] text-white font-[500]">$300</p>
                    </div>
                    <button className="flex items-center justify-center bg-white text-black py-3 px-6 rounded-[16px] font-[600] mt-4 w-full">
                                Enroll Now
                    </button>
                {/* <EnrollButton /> */}
            </div>
                <div className="block lg:hidden h-[80px]" />
            </div>
            <div className="block lg:hidden fixed bottom-0 left-0 right-0 z-50 h-[180px] bg-[#000000]/70 py-3 px-4 border-t border-black/20">
                <div className="max-w-6xl mx-auto flex items-center gap-3">
                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-white leading-[1.2] text-[24px] font-[600]">OSP Engineering Bootcamp</span>
                        <div className="flex items-center gap-3 mt-2">
                            <p className="text-[20px] leading-[1.2] text-white/80 line-through font-[500]">$500</p>
                            <p className="text-[20px] leading-[1.2] text-white font-[500]">$300</p>
                        </div>
                        <button className="flex items-center justify-center bg-white text-black py-3 px-6 rounded-[16px] font-[600] mt-4">
                            Enroll Now
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
