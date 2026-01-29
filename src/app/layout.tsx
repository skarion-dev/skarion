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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <html lang="en">
        <head>
          <link rel="icon" type="image/x-icon" href="https://skarion.com/skarion.ico" />
          <meta name="msvalidate.01" content="C6BC22315AAA3905A487DA8CF4F013C9" />
        </head>
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
