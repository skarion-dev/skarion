import Image from "next/image";
import Link from "next/link";



export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image src="/skarion.png" alt="Logo" width={36} height={36} className="rounded-lg" />
          </Link>

          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-purple-500">
              <span className="font-medium">Home</span>
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-purple-500">
              <span className="font-medium">About Us</span>
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-purple-500">
              <span className="font-medium">Services</span>
            </Link>
            <Link href="/stories" className="text-gray-800 hover:text-purple-500">
              <span className="font-medium">Stories</span>
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-purple-500">
              <span className="font-medium">Contact Us</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-800 hover:text-purple-500">
              <span className="font-medium">Login</span>
            </Link>

            <Link href="/register" className="shrink-0">
              <button className="h-12 px-6 bg-purple-600 text-white font-medium rounded-full shadow-md hover:bg-purple-700 transition duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
