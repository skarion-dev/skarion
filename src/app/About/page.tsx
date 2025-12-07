import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/About/hero";
import Testimonials from "@/components/Landing/Testimonials";

export default function Home() {
  return (
    <SmoothScroll>
        <Navbar />
        <Hero />
        <div className="flex justify-center mt-3 text-sm md:text-base text-gray-700 mt-20">
            <h1 className="text-3xl font-semibold text-black">Success Stories Says it All</h1>
        </div>
        <Testimonials />
        <Footer />
    </SmoothScroll>
  );
}