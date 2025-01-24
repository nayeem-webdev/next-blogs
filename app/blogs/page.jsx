import Link from "next/link";

export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="container mx-auto px-5 pb-28">
      <div
        className="container mx-auto h-[30vh] rounded-lg border-2 border-purple-600 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/373465/pexels-photo-373465.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-5 text-center">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
            Read Our Latest Blogs
          </h2>
          <p className="max-w-lg mx-auto text-center text-white/70">
            Empower yourself with our store house of knowledge. Get News,
            Articles, Blogs from all over the world.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group border rounded-lg shadow-lg bg-white hover:shadow-purple-100 transition-shadow duration-300 cursor-pointer"
          >
            <Link href={`/blogs/${post.id}`} className="block h-full">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 h-[56px] overflow-hidden group-hover:text-purple-600 transition-colors">
                  {post.title.length > 50
                    ? post.title.slice(0, 50) + "..."
                    : post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 h-[60px] overflow-hidden">
                  {post.body.length > 100
                    ? post.body.slice(0, 100) + "..."
                    : post.body}
                </p>
                {/* Read More Button */}
                <div className="w-fit">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-purple-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
