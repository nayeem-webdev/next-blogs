export default function Foot() {
  return (
    <div className="container mx-auto bg-white dark:bg-black text-black dark:text-white">
      <div className="space-y-8 px-5 py-10">
        <div className="text-2xl font-bold text-center">R.M.B</div>

        <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/blogs" className="hover:text-gray-400">
            Blogs
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="px-5 py-5 text-center text-sm text-black/40 dark:text-white/40 border-t border-black/20 dark:border-white/20 ">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </div>
  );
}
