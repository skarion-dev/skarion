import Link from 'next/link'
import Image from 'next/Image'
import LogoCarousel from "../LogoCarousel"

const logos = [
    "/benton.png",
    "/circet.png",
    "/gme.png",
    "/radd.png",
    "/westell.png",
]

export default function AboutHero() {
  return (
    <div className="w-full bg-[#ffffff] py-10 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-8">
          <div className="text-[#000000] text-[40px] sm:text-[48px] md:text-[64px] leading-[1.2] text-left">
              <b>The <b className="text-[#ff686b]">Skarion</b> Story </b>
          </div>
          <div className="text-[14px] font-[300] pt-5 text-left w-full md:w-[40%] lg:w-[30%] ml-auto">
            <b className="text-[#122461]">People Ask: </b> How do you make an Impact? And How can I believe you?
            <br/>
            <b className="text-[#122461]">Skarion tells: </b> Read this Page. You will hear the voice of the stories.              
          </div>
        </div>
        <div className="mt-15"></div>
        <div className="flex flex-col lg:flex-row items-start w-full h-auto lg:h-[600px] bg-[#000000] rounded-[16px] justify-between lg:space-x-16 mt-auto p-4 md:p-6">
          <div className="relative w-full lg:w-1/2">
            <div className="rounded-[16px] overflow-hidden">
              <Image
                src="/Team image.jpg"
                alt="team"
                width={1200}
                height={560}
                className="w-full h-[280px] md:h-[550px] object-cover"
              />
            </div>
            <div className="absolute text-right right-5 bottom-6 space-y-2">
              <span className="inline-block bg-white/70 text-[#0f172a] text-[12px] md:text-[18px] px-4 py-2 rounded-full">Generate Growth</span>
              <span className="block bg-white/70 text-[#0f172a] text-[12px] md:text-[18px] px-4 py-2 rounded-full">Building The Industries</span>
              <span className="block bg-white/70 text-[#0f172a] text-[12px] md:text-[18px] px-4 py-2 rounded-full">Monitoring & Guide The Business</span>
            </div>
          </div>

          <div className="flex-col-1 text-white mt-5 lg:mt-0">
            <h3 className="text-[36px] md:text-[48px] font-semibold max-w-5xl">The Highly Curated Business & Industries With Big Impact</h3>
            <p className="mt-3 text-[14px] md:text-[18px] text-gray-300 max-w-4xl mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
            <div className="mt-6 flex items-center gap-6 text-gray-300">
              <span className="inline-flex items-center gap-2 text-[24px] md:text-[36px]"><span className="w-2 h-2 rounded-full bg-white/70"/>Skarion</span>
              <span className="inline-flex items-center gap-2 text-[24px] md:text-[36px]"><span className="w-2 h-2 rounded-full bg-white/70"/>Innuberry Global</span>
            </div>
            <div className="mt-10">
              <Link href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-[#0f172a] text-[18px] font-medium">See Our Portfolio</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3 text-sm md:text-base text-gray-700 mt-20">
            <h2 className="text-3xl font-semibold text-black">Our Graduates are working with </h2>
        </div>
        <div className="flex justify-center mt-3 text-sm md:text-base text-gray-700 mt-10">
            <LogoCarousel logos={logos} />
        </div>

      
    </div>
  )
}

