import Footer from "@/components/Footer";
import Courses from "@/components/Landing/Courses";
import Hero from "@/components/Landing/Hero";
import Testimonials from "@/components/Landing/Testimonials";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Landing/Navbar";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar /> 
      <Hero />
      <Courses />
      <Testimonials />
      <Footer />
    </SmoothScroll>
  );
}
