import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/auth";

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
