import Image from "next/image";

export default function Hero(){
    return (
        <div className="relative w-full h-[100vh]">
            <Image src="/bgimage.jpg" alt="Background" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
        </div>
    )
}