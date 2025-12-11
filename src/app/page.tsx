import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/Landing/About";
import Courses from "@/components/Landing/Courses";
import Hero from "@/components/Landing/Hero";
import Testimonials from "@/components/Landing/Testimonials";
import Workstep from "@/components/Landing/Workstep";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      {/* <Navbar /> 
      <Hero />
      <Courses />
      <About /> */}
      <div className="text-[#000000] text-[36px] sm:text-[48px] md:text-[64px] leading-[1.2] text-left mx-4 sm:mx-8 md:mx-12">
                The Skarion Advantage
            </div>
      <Workstep />
      {/* <Testimonials />
      <Footer /> */}
    </SmoothScroll>
  );
}