import Footer from "@/components/Footer";
import Courses from "@/components/Landing/Courses";
import Hero from "@/components/Landing/Hero";
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
