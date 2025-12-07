import Link from 'next/link'
import ContactForm from "../ContactForm"


export default function ContactHero() {
  return (
    <div className="w-full bg-[#ffffff] py-10 px-22">
        <div className="flex flex-row items-start justify-between space-x-4">
            <div className="text-[#000000] text-[64px] leading-[1.2] text-left mt-30">
            Get in Touch with <b className="text-[#db2777]">Skarion</b>
            <br/>
            Today To Learn More
            <div className="text-[20px] font-[300] pt-5 text-left w-[80%]">
                Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.                     
            </div>
            </div>
            
            <div className="flex-shrink-0 w-full max-w-lg -ml-auto">
                <ContactForm />
            </div>
        </div>
            <div className="flex flex-row items-start justify-between space-x-8 mt-auto pt-10">
                <div className="relative w-full h-[380px] md:h-[460px] rounded-xl overflow-hidden border">
                    <iframe
                        title="fairfax-virginia-map"
                        className="absolute inset-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198666.3402909247!2d-77.37000904843748!3d38.84622200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b26c3a5b7c1%3A0xf50ad6b3c5e0a1e!2sFairfax%2C%20VA%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <span className="absolute left-[18%] top-[32%] w-3 h-3 bg-[#db2777] rounded-full ring-2 ring-white" />
                    <span className="absolute right-[22%] bottom-[18%] w-3 h-3 bg-[#db2777] rounded-full ring-2 ring-white" />
                    <span className="absolute right-[8%] top-[42%] w-3 h-3 bg-[#db2777] rounded-full ring-2 ring-white" />
                    <div className="absolute left-6 bottom-6 bg-white rounded-xl shadow p-4 max-w-xs">
                        <p className="text-sm font-semibold text-black">4 Locations Worldwide</p>
                        <p className="mt-1 text-xs text-gray-600">We have offices in New York, Paris, Kyiv, and Singapore.</p>
                        <Link href="#" className="mt-3 inline-block text-sm font-medium text-[#122461]">Learn more</Link>
                    </div>
                </div>
            </div>
            
    </div>
  )
}
