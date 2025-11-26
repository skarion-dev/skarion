import Footer from "@/components/Footer";
import Courses from "@/components/Landing/Courses/Courses";
import Hero from "@/components/Landing/Hero/Hero";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <Courses />
      <Footer />
    </SmoothScroll>
  );
}
