import CourseCards from "../CourseCards"
import LogoCarousel from "../LogoCarousel"
import SlideshowCarousel from "../SlideshowCarousel"

const logos = [
    "/skarion.png",
    "/skarion.png",
    "/skarion.png",
    "/skarion.png",
]

const profiles=[
    "black",
    "red",
    "green",
    "blue",
    "yellow",
]

const images=[
    "/image 1.jpg",
    "/image 3.jpg",
    "/image 2.jpg"
]

export default function Hero() {
    return (
        <div className="w-full bg-[#ffffff] px-4 sm:px-6 md:px-12 py-10 sm:py-10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="w-full md:w-[60%]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-full mb-3">
                        <span className="text-xs sm:text-xs md:text-sm lg:text-m">
                            Learn More About Skarion
                        </span>
                    </div>
                    <div className="text-[#000000] text-4xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-left">
                        Advancing Careers Through Specialized Training
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-[300] pt-5 text-left w-full md:w-[80%]">
                        Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.
                    </div>
                </div>
                <div className="w-full md:w-[35%]">
                    <div className="bg-[#ff686b] rounded-[14px] h-24 sm:h-32 md:h-40"></div>
                    <div className="text-sm md:text-base font-[400] pt-5 pb-7 text-left">
                        Upskilling teams in 20+ companies
                    </div>
                    <LogoCarousel logos={logos} />
                </div>
            </div>

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
                    </div>
                </div>

                <div className="flex flex-col gap-8 bg-[#fffff] rounded-[14px] w-full md:w-[35%] min-h-[200px] sm:min-h-[260px] md:min-h-[495px]">
                    {/* <SlideshowCarousel logos={profiles} /> */}
                    <SlideshowCarousel logos={images} />
                </div>
            </div>
        </div>
    )
}