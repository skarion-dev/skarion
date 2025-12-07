import Image from "next/image";

export default function CoursePage(){
    return (
        <div className="w-full bg-[#ffffff] py-10 px-12 flex justify-between">
            <div className="w-[65%]">
                <p className="text-[42px] leading-[1.2]">Outside Plant Engineering</p>
                <p className="text-[18px] font-[300] mt-4">
                    OSP Engineering involves the design, installation, and maintenance of outdoor infrastructure, including fiber optic routes, cables, and utility networks.
                </p>
                <div className="rounded-[14px] h-[400px] relative bg-[#122461] mt-10"></div>
                <p className="text-[24px] font-[500] mt-10 capitalize">Unlock high-demand careers in the US with OSP engineering!</p>
                <p className="text-[16px] font-[500] text-[#666666] font-[300] mt-2">
                    13 Theory Modules · Live & On-Demand · 10+ Real World Projects
                </p>
                <div className="w-full py-4 px-6 border border-[#EBEBEB] rounded-[14px] mt-8 flex items-center justify-between">
                    <p className="text-[14px] font-[400] w-[45%]">
                        Gain hands-on fiber optic design experience under expert mentorship, ready to showcase on your resume.                    
                    </p>
                    <span className="w-[2px] h-14 bg-[#EBEBEB] self-center"></span>
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
                <hr className="my-14 border border-[#EBEBEB]" />
                <div className="flex justify-between items-start">
                    <div className="w-[40%]">
                        <p className="text-[32px] leading-[1.4] font-[500] capitalize">Why OSP engineering could be your next big step</p>
                        <p className="text-[16px] font-[300] mt-4">
                            Demand for skilled professionals in telecom industry continues to rise, offering long-term stability and career advancement.
                        </p>
                    </div>
                    <div className="w-[50%] flex flex-col gap-5">
                        <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
                            <p className="text-[16px] font-[700] text-[#ffffff]">
                                HIGH DEMAND, HIGH OPPORTUNITY          
                            </p>
                            <p className="text-[14px] font-[400] mt-1 text-[#ffffff]">
                                The demand for OSP engineers is exploding, with thousands of open roles across the industry.
                            </p>
                        </div>
                        <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
                            <p className="text-[16px] font-[700] text-[#ffffff]">
                                NO EXPERIENCE NEEDED       
                            </p>
                            <p className="text-[14px] font-[400] mt-1 text-[#ffffff]">
                                Start from scratch with comprehensive training designed for new grads and career changers.
                            </p>
                        </div>
                        <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
                            <p className="text-[16px] font-[700] text-[#ffffff]">
                                FAST-TRACK CAREER GROWTH                 
                            </p>
                            <p className="text-[14px] font-[400] mt-1 text-[#ffffff]">
                                OSP engineering provides rapid career advancement with practical, hands-on experience.
                            </p>
                        </div>
                        <div className="w-full py-4 px-6 bg-[#122461] rounded-[14px]">
                            <p className="text-[16px] font-[700] text-[#ffffff]">
                                LONG-TERM CAREER SECURITY     
                            </p>
                            <p className="text-[14px] font-[400] mt-1 text-[#ffffff]">
                                OSP offers a stable career path, with clear growth from entry-level to senior roles and high earnings.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="my-14 border border-[#EBEBEB]" />
            </div>
            <div className="w-[30%]">
                <div className="sticky top-[126px] rounded-[14px] bg-[#122461] h-[600px] w-full">

                </div>
            </div>
        </div>
    )
}
