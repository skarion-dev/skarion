import Image from "next/image";
import Link from "next/link";

function GlassButton({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={
        "relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-black/70 ring-1 ring-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.35)] transition-all hover:bg-white/15 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_30px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/40 before:to-white/10 before:opacity-60 before:pointer-events-none after:absolute after:left-1/2 after:top-0 after:h-px after:w-[80%] after:-translate-x-1/2 after:bg-white/40 after:opacity-50 "
      + className
      }
    >
      <div className="relative z-10 flex items-center justify-center h-full w-full">{children}</div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-4">

        <div className="flex items-center gap-4">
          <Link href="/" className="shrink-0">
            <GlassButton className="h-12 px-6">
              <Image src="/logo.svg" alt="Logo" width={36} height={36} className="rounded-lg" />
              <span className="font-bold tracking-wide">Skarion</span>
            </GlassButton>
          </Link>
        
        
          <Link href="/" className="shrink-0">
          <GlassButton className="size-12">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <circle cx="12" cy="12" r="10" className="fill-black/60" />
              <path d="M10 8v8l6-4z" className="fill-white" />
            </svg>
          </GlassButton>
        </Link>

          <Link href="/" className="shrink-0">
          <GlassButton className="size-12">
            <svg viewBox="0 0 24 24" className="size-6">
              <circle cx="12" cy="12" r="10" className="fill-black/60" />
              <path d="M9 17.5c4.5 0 8.5-3.2 8.5-5.5S13.5 6.5 9 6.5 0.5 9.7 0.5 12 4.5 17.5 9 17.5Z" className="fill-white" transform="translate(3 3)" />
            </svg>
          </GlassButton>

        </Link>
          <Link href="/" className="shrink-0">
          <GlassButton className="h-12 px-6">
            <span className="font-medium">About Us</span>
          </GlassButton>
        </Link>

          <Link href="/" className="shrink-0">
          <GlassButton className="h-12 px-6">
            <span className="font-medium">Services</span>
          </GlassButton>
        </Link>

          <Link href="/" className="shrink-0">
          <GlassButton className="h-12 px-6">
            <span className="font-medium">Stories</span>
          </GlassButton>
        </Link>

        <Link href="/" className="shrink-0">
          <GlassButton className="h-12 px-6">
            <span className="font-medium">Contact Us</span>
          </GlassButton>
        </Link>

        <div className="flex-1">
        <Link href="/" className="shrink-0">
          <GlassButton className="h-12 px-6">
            <span className="font-medium">Login</span>
          </GlassButton>
        </Link>
        </div>

         <div className="flex-1">
        <Link href="/" className="shrink-0">
          <GlassButton className="h-12 px-6">
            <span className="font-medium">Register</span>
          </GlassButton>
        </Link>
        </div>

          {/* <div className="flex-1">
            <GlassButton className="h-12 w-full" />
          </div> */}
        
        </div>
      </div>
    </div>
  );
}