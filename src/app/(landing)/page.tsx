import Courses from "@/components/Landing/Courses";
import Hero from "@/components/Landing/Hero";
import Testimonials from "@/components/Landing/Testimonials";
import Workstep from "@/components/Landing/workstep";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <Workstep />
      <Testimonials />
    </div>
  );
}
