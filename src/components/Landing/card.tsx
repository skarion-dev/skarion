import Image from "next/image";
import { title } from "process";
const cardInfo: { image: string; title: string; postion: string; description: string }[] = [
  {
    image: "/profile 2.jpg",
    title: "Rianul Amin",
    postion: "OSP Engineer",
    description: "Skarion Helped Grow my career. Look at my card. Have you ever seen anything like this?",
  },
  {
    image: "/image2.jpg",
    title: "Kasshaf Ahmad.",
    postion: "AutoCAD Specialist",
    description: "Skarion Helped Grow my career. Look at my card. Have you ever seen anything like this?",
  }
]
export default function Card() {
  return (
    <div className="w-90 h-105 bg-[#ffffff] rounded-[12px] px-10 py-4 mx-auto mt-20">
      <div className="px-6 py-4 mx-auto w-full h-[220px] relative rounded-r-full mt-5">
        <Image
          src={cardInfo[0].image}
          alt={cardInfo[0].title}
          fill
          className="object-cover rounded-r-full"
          sizes="100vw"
        />
        <p className="fas fa-quote-right absolute top-25 right-[8px] text-[#000000] text-[190px] ">🙷</p>
      </div>
      
      <div className="w-full h-[50px] flex flex-col justify-left items-left mt-7">
        <p className="text-[14px] font-medium text-[#808080]">{cardInfo[0].description}</p>
      </div>
      <div className="w-full h-[100px] flex flex-col justify-left items-left mt-2">
        <p className="text-[24px] font-bold text-[#000000]"><i>{cardInfo[0].title}</i></p>
        <p className="text-[16px] font-medium text-[#808080]"><i>{cardInfo[0].postion} </i></p>
      </div>
    </div>
  );
}
