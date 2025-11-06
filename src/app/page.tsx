import Hero from "@/components/Landing/Hero/hero";
import SecondPage from "@/components/Landing/SecondPage/secondPage";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <SecondPage />
    </SmoothScroll>
  );
}
