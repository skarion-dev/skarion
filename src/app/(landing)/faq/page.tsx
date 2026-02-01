import FAQ from "@/components/Landing/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Skarion",
  description: "Find answers to common questions about Skarion's OSP engineering training, job placement support, and career advancement programs.",
  keywords: ["FAQ", "Skarion", "Frequently Asked Questions"],
  openGraph: {
    title: "FAQ - Skarion",
    description: "Find answers to common questions about Skarion's OSP engineering training, job placement support, and career advancement programs.",
    url: "https://skarion.com/faq",
    siteName: "Skarion",
    images: [
      {
        url: "https://skarion.com/skarion.jpg",
        width: 1200,
        height: 630,
        alt: "Skarion FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Skarion",
    description: "Frequently Asked Questions about Skarion",
    images: ["https://skarion.com/skarion.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  return <FAQ />;
}
