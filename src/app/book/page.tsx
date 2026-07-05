import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PublicBookingPage = dynamic(
  () => import("@/components/booking/public-booking-page").then((mod) => mod.PublicBookingPage),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Book A Call | Skarion",
  description:
    "Schedule a call with Skarion using our public booking page.",
};

export default function BookCallPage() {
  return <PublicBookingPage />;
}
