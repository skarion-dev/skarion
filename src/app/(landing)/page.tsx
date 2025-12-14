import Courses from "@/components/Landing/Courses";
import Hero from "@/components/Landing/Hero";
import Testimonials from "@/components/Landing/Testimonials";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <Testimonials />
    </div>
  );
}
