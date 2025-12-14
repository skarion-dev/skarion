import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skarion",
  description: "Advancing careers through specialized training",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log("Current user:", session?.user || null);
  if (!session?.user) return redirect(`/auth/sign-in`);

  return (
    <SmoothScroll>
      <html lang="en">
        <head>
          <link rel="icon" href="/skarion.png" type="image/png" sizes="any" />
        </head>
        <body
          className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
        >
          <main>
            {children}
          </main>
        </body>
      </html>
    </SmoothScroll>
  );
}
