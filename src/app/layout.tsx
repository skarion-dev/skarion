import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skarion — Success-Based Career Acceleration & Placement",
  description:
    "Skarion helps international graduates and early-career professionals break into specialized, less-saturated U.S. career pathways. We find the right field for your background, close skill gaps, and run your job search — you pay only after you're placed.",
  keywords: [
    "Skarion",
    "career placement",
    "success-based placement",
    "pay when hired",
    "international graduates",
    "OPT job placement",
    "STEM OPT careers",
    "career acceleration",
    "OSP engineering",
    "GIS careers",
    "technology data careers",
    "business operations placement",
    "managed job search",
    "U.S. career pathways",
    "career coaching",
    "job placement company",
  ],
  openGraph: {
    title: "Skarion — Success-Based Career Acceleration & Placement",
    description:
      "Skarion helps international graduates break into specialized U.S. career pathways. Pay only after you're placed.",
    url: "https://skarion.com",
    siteName: "Skarion",
    images: [
      {
        url: "https://skarion.com/skarion-jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Skarion — Career Acceleration & Placement",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skarion — Success-Based Career Acceleration & Placement",
    description:
      "Skarion helps international graduates break into specialized U.S. career pathways. Pay only after you're placed.",
    images: ["https://skarion.com/skarion-jpg.jpg"],
  },
  verification: {
    other: {
      "msvalidate.01": "C6BC22315AAA3905A487DA8CF4F013C9",
    },
  },
  icons: {
    icon: "https://skarion.com/skarion.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <html lang="en">
        <body
          className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
        >
          <main>
            <Toaster />
            {children}
          </main>
        </body>
      </html>
    </SmoothScroll>
  );
}
