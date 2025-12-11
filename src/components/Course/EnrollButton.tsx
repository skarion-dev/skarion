'use client'
import { useRouter } from "next/navigation";

export default function EnrollButton() {
  const router = useRouter();
  return (
    <button
        type="submit"
        className="mt-8 w-full flex items-center justify-center gap-4 py-2.5 px-6 text-[14px] font-[500] tracking-wide text-slate-900 border border-slate-300 rounded-md bg-slate-50 hover:bg-slate-100 focus:outline-none cursor-pointer"
        onClick={() => router.push('/checkout/outside-plant-engineering')}
    >
        Enroll Now
    </button>
  );
}