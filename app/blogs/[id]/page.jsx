import Link from "next/link";

export default async function BlogPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="container mx-auto px-5 pb-28">
      <div
        className="container mx-auto h-[30vh] rounded-lg border-2 border-purple-600 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-5 text-center">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
            Read: {post.title}
          </h2>
          <p className="max-w-lg mx-auto text-center text-white/70">
            {post.body.length > 100
              ? post.body.slice(0, 100) + "..."
              : post.body}
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-700 text-lg mb-8">{post.body}</p>

        <Link
          href="/blogs"
          className="bg-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}
