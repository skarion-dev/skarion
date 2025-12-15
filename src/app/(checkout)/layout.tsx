import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Skarion",
  description: "Advancing careers through specialized training",
};

export default async function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log("Current user:", session?.user || null);
  if (!session?.user) return redirect(`/auth/sign-in`);

  return <main>{children}</main>;
}
