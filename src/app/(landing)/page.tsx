import Courses from "@/components/Landing/Courses";
import FAQ from "@/components/Landing/FAQ";
import Hero from "@/components/Landing/Hero";
import Testimonials from "@/components/Landing/Testimonials";
import Workstep from "@/components/Landing/Workstep";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <Workstep />
      <Testimonials />
      <FAQ />
    </div>
  );
}
