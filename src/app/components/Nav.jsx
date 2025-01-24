import Link from "next/link";
import DarkToggle from "./DarkToggle";

export default function Nav() {
  return (
    <nav className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                R.M.B.
              </div>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              Blogs
            </Link>
          </div>

          <DarkToggle />
        </div>
      </div>
    </nav>
  );
}
