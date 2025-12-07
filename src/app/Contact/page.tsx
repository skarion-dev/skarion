import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Hero from "@/components/Contact/hero";
import Navbar from "@/components/Common/Navbar";

export default function Home() {
  return (
    <SmoothScroll>
        <Navbar />
        <Hero />
        <Footer />
    </SmoothScroll>
  );
}