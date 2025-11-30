import CourseCards from "../CourseCards"
import LogoCarousel from "../LogoCarousel"

const logos = [
    "/skarion.png",
    "/skarion.png",
    "/skarion.png",
    "/skarion.png",
]

export default function Hero() {
    return (
<<<<<<< Updated upstream:src/components/Landing/Hero/hero.tsx
        <div className="w-full bg-[#ffffff] py-10 px-12">
            <div className="flex flex-row items-start justify-between space-x-8">
                <div className="w-[60%]">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 border border-black rounded-full mb-3">
                        <span className="text-[12px] font-[500]">
=======
        <div className="w-full bg-[#ffffff] px-4 sm:px-6 md:px-12 py-8 sm:py-10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="w-full md:w-[60%]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-full mb-3">
                        <span className="text-xs sm:text-sm font-[500]">
>>>>>>> Stashed changes:src/components/Landing/Hero.tsx
                            Learn More About Skarion
                        </span>
                    </div>
                    <div className="text-[#000000] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-left">
                        Advancing Careers Through Specialized Training
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-[300] pt-5 text-left w-full md:w-[80%]">
                        Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.
                    </div>
                </div>
<<<<<<< HEAD:src/components/Landing/Hero/hero.tsx
<<<<<<< Updated upstream:src/components/Landing/Hero/hero.tsx
                <div className=" w-[35%]">
=======
                <div className="w-[35%]">
>>>>>>> 3f327436b9935c56b7bdbf34e62247320ae8ae78:src/components/Landing/Hero.tsx
                    <div className="bg-[#ff686b] rounded-[14px] h-[180px]"></div>
                    <div className="text-[16px] font-[400] pt-5 pb-7 text-left ">
=======
                <div className="w-full md:w-[35%]">
                    <div className="bg-[#ff686b] rounded-[14px] h-24 sm:h-32 md:h-40"></div>
                    <div className="text-sm md:text-base font-[400] pt-5 pb-7 text-left">
>>>>>>> Stashed changes:src/components/Landing/Hero.tsx
                        Upskilling teams in 20+ companies
                    </div>
                    <LogoCarousel logos={logos} />
                </div>
            </div>
<<<<<<< Updated upstream:src/components/Landing/Hero/hero.tsx
            <div className="flex flex-row items-start justify-between space-x-8 pt-12">
            <div className="flex flex-col gap-8 w-[62%] h-[500px]">
                <div className="rounded-[14px] relative flex-2 bg-[#122461]">
                </div>
                <div className="flex flex-row items-start justify-between flex-1 space-x-8">
                    <div className="bg-[#c3ddf5] rounded-[14px] w-[70%] h-full"></div>
                    <div className="bg-[#122461] rounded-[14px] w-[30%] h-full flex flex-col py-[4px] px-[18px]">
                        <p className="text-[#ffffff] text-[64px] font-[600] leading-[1.2]">
                            50+
                        </p>
                        <p className="text-[#ffffff] text-[14px] font-[500] leading-[1.3] mt-1">
                            Candidates Have Trusted Skarion to Launch Their Careers
                        </p>
=======

            <div className="flex flex-col md:flex-row items-start justify-between gap-8 pt-12">
                <div className="flex flex-col gap-8 w-full md:w-[62%]">
                    <div className="rounded-[14px] bg-[#122461] min-h-[180px] sm:min-h-[220px] md:min-h-[260px]"></div>
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
                        <div className="bg-[#c3ddf5] rounded-[14px] w-full sm:w-[70%] min-h-[160px] sm:min-h-[200px]"></div>
                        <div className="bg-[#122461] rounded-[14px] w-full sm:w-[30%] min-h-[160px] sm:min-h-[200px] flex flex-col py-[4px] px-[18px]">
                            <p className="text-[#ffffff] text-4xl sm:text-5xl md:text-6xl font-[600] leading-[1.2]">
                                50+
                            </p>
                            <p className="text-[#ffffff] text-xs sm:text-sm md:text-base font-[500] leading-[1.3] mt-1">
                                Candidates Have Trusted Skarion to Launch Their Careers
                            </p>
                        </div>
>>>>>>> Stashed changes:src/components/Landing/Hero.tsx
                    </div>
                </div>

                <div className="flex flex-col gap-8 bg-[#c3ddf5] rounded-[14px] w-full md:w-[35%] min-h-[200px] sm:min-h-[260px] md:min-h-[500px]">

                </div>
            </div>
        </div>
<<<<<<< HEAD:src/components/Landing/Hero/hero.tsx
<<<<<<< Updated upstream:src/components/Landing/Hero/hero.tsx


=======
>>>>>>> 3f327436b9935c56b7bdbf34e62247320ae8ae78:src/components/Landing/Hero.tsx
        </div>
=======
>>>>>>> Stashed changes:src/components/Landing/Hero.tsx
    )
}
