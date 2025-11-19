export default function Hero() {
    return (
        <div className="w-full bg-[#ffffff] py-10 px-12">
            <div className="flex flex-row items-start justify-between space-x-8">
                <div className="text-[#000000] text-[64px] w-[60%] leading-[1.3] text-left">
                    Advancing Careers Through<br />Specialized Training
                </div>
                <div className="w-[35%]">
                    <div className="bg-[#ff686b] rounded-[14px] h-[180px]"></div>
                    <div className="text-[#787777] text-[18px] font-[500] pt-8 text-left">
                        Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.                    
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-start justify-between space-x-8 pt-12">
            <div className="flex flex-col gap-8 w-[62%] h-[500px]">
                <div className="rounded-[14px] relative flex-2 overflow-hidden">
                    <video src={"/skarion.mp4"} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#122461] opacity-50"></div>
                </div>
                <div className="flex flex-row items-start justify-between flex-1 space-x-8">
                    <div className="bg-[#122461] rounded-[14px] w-[70%] h-full"></div>
                    <div className="bg-[#ff686b] rounded-[14px] w-[30%] h-full flex flex-col py-[4px] px-[18px]">
                        <p className="text-[#ffffff] text-[64px] font-[600] leading-[1.2]">
                            50+
                        </p>
                        <p className="text-[#ffffff] text-[14px] font-[500] leading-[1.3] mt-1">
                            Candidates Have Trusted Skarion to Launch Their Careers
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 bg-[#122461] rounded-[14px] w-[35%] h-[500px]">

            </div>
        </div>


        </div>
    )
}
