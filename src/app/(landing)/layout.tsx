import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Skarion",
  description: "Advancing careers through specialized training",
  keywords: [
    "Skarion",
    "Outside Plant Engineering",
    "OSP Training",
    "OSP Job Placement",
    "Money Back Guarantee",
    "Job Guarantee",
    "Fiber Optics Training",
    "Telecommunications Engineering",
    "OSP Design",
    "OSP Career",
    "Outside Plant Design",
    "Telecom Infrastructure Training",
    "Network Engineering",
    "OSP Certification",
    "Career Placement",
  ],
  openGraph: {
    title: "Skarion",
    description: "Advancing careers through specialized training",
    url: "https://skarion.com",
    siteName: "Skarion",
    images: [
      {
        url: "https://skarion.com/skarion-jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Skarion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skarion",
    description: "Advancing careers through specialized training",
    images: ["https://skarion.com/skarion-jpg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <footer id="site-footer">
        <Footer />
      </footer>
    </main>
  );
}
