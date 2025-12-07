import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skarion",
  description: "Advancing careers through specialized training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/skarion.png" type="image/png" sizes="any" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <main className="min-h-screen">
          <SmoothScroll>
            <Navbar />
              {children}
            <Footer/>
          </SmoothScroll>
        </main>
      </body>
    </html>
  );
}
