import type { Metadata } from "next";
import { PublicBookingPage } from "@/components/booking/public-booking-page";

export const metadata: Metadata = {
  title: "Book A Call | Skarion",
  description:
    "Schedule a call with Skarion using our public booking page.",
};

export default function BookCallPage() {
  return <PublicBookingPage />;
}
