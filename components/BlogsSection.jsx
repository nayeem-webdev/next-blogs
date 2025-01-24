import Link from "next/link";

export async function BlogSection() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts = data.slice(0, 8);

  return (
    <div className="container mx-auto px-5 py-28">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
        Read Our Latest Blogs
      </h2>
      <p className="max-w-lg mx-auto text-center text-black/70 mb-8">
        Empower yourself with our store house of knowledge. Get News, Articles,
        Blogs from all over the world.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
