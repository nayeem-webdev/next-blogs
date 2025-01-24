export default function Foot() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold">R.M.B</div>

        <div className="flex space-x-6 mt-4 md:mt-0">
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

      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </div>
  );
}
