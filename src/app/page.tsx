import Footer from "@/components/Footer";
import Hero from "@/components/Landing/Hero/Hero";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <Footer />
    </SmoothScroll>
  );
}
