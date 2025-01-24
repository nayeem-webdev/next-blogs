import Link from "next/link";

export default async function Hero() {

  return (
    <div className="px-5">
      <div
        className="container mx-auto h-[60vh] rounded-lg border-2 border-purple-600 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2473167/pexels-photo-2473167.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-5 text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Read More, Know More
          </h1>
          <p className="text-lg text-white/60 mb-6">
            Your reading solution for knowledge and insight.
          </p>
          <Link href="/blogs">
            <button className="px-6 py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all">
              Explore Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
