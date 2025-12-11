import { auth } from "@/auth";
import Courses from "@/components/Landing/Courses";
import Hero from "@/components/Landing/Hero";
import Testimonials from "@/components/Landing/Testimonials";

export default async function Home() {
  const session = await auth();
  console.log("Current user:", session?.user || null);

  return (
    <div>
      <Hero />
      <Courses />
      <Testimonials />
    </div>
  );
}
