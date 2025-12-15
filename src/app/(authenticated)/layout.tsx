import type { Metadata } from "next";
import NavbarProvider from "@/components/Layout/NavbarProvider";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard • Skarion",
  description: "Advancing careers through specialized training",
};

export default async function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log("Current user:", session?.accessToken || null);
  if (!session?.user) return redirect(`/auth/sign-in`);

  return <NavbarProvider user={session?.user}>{children}</NavbarProvider>;
}
