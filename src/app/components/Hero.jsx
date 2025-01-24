import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      {/* Image */}
      <div className="relative h-screen">
        <Image
          src="https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-black/50 text-white">
        <h1 className="text-4xl font-extrabold">Welcome To READ.ME.BLOGS</h1>
        <p className="mt-4 text-lg">
          Discover our amazing collection of blogs.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Show All Blogs
        </button>
      </div>
    </div>
  );
}
