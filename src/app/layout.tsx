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
          <link rel="icon" type="image/x-icon" href="https://skarion.com/skarion.ico"/>
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
