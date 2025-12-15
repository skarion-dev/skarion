import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skarion",
  description: "Advancing careers through specialized training",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
