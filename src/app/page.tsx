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
      <Navbar /> 
      <Hero />
      <Courses />
      <About />
      <Workstep />
      <Testimonials />
      <Footer />
    </SmoothScroll>
  );
}