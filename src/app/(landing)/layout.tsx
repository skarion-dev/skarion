import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Skarion",
  description: "Advancing careers through specialized training",
};

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <main>
      <Navbar user={session?.user} />
      {children}
      <Footer />
    </main>
  );
}
