import Footer from "@/components/Footer";
import Hero from "@/components/Landing/Hero/hero";
import About from "@/components/Landing/About/about"
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <About />
      <Footer />
    </SmoothScroll>
  );
}
