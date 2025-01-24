import Link from "next/link";

export default function Foot() {
  return (
    <div className="container mx-auto bg-white text-black">
      <div className="space-y-8 px-5 py-10">
        <div className="text-2xl font-bold text-center">R.M.B</div>

        <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/blogs" className="hover:text-gray-400">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="px-5 py-5 text-center text-sm text-black/40 border-t border-black/20">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </div>
  );
}
