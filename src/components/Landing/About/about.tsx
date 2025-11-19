import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-8xl px-15"> {/* Increased width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> {/* Increased gap for more spacing */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Get a Leap Ahead, Know Skarion
            </h2>
            <p className="text-lg text-gray-600">
              We offer hands-on training to launch your career in high demand industries.
            </p>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-[#ff686b] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-[#122461]">
                  Find Proper niche for your dream income
                </h3>
                <p className="text-gray-900">
                  Lorem ipsum is simply dummy text.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#122461] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-[#c3ddf5]">
                  Focusing On Revenue
                </h3>
                <p className="text-gray-300">
                  Lorem ipsum is simply dummy text.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Team Image */}
          <div className="relative w-full h-96">
            <Image
              src="/bgimage.jpg" // Replace with actual path to the image
              alt="Team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* More About Us Link */}
        <div className="mt-12 text-center">
          <Link href="/about">
            <button className="h-12 px-6 bg-purple-600 text-white font-medium rounded-full shadow-md hover:bg-purple-700 transition duration-300">
              More About Us → 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
