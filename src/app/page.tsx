import Footer from "@/components/Footer";
import Courses from "@/components/Landing/Courses";
import Hero from "@/components/Landing/Hero";
import Testimonials from "@/components/Landing/Testimonials";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Landing/Navbar";
import Card from "@/components/Landing/card";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="mt-20"></div>
      <Navbar /> 
      <Hero />
      <Courses />
      <Testimonials />
      <Card />
      <Footer />
    </SmoothScroll>
  );
}
