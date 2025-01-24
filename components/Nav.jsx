// "use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { RiNextjsLine } from "react-icons/ri";

export default async function Nav() {
  // const pathname = usePathname();
  // const isActive = (path) => pathname === path;
  //   ${
  //   isActive("/")
  //     ? "text-purple-600 underline"
  //     : "text-black hover:text-purple-600 hover:underline"
  // }
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <nav className="fixed z-50 w-full bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-5 flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex flex-row gap-1 items-center text-2xl font-semibold bg-purple-50 text-purple-600 px-2 py-1 rounded-lg border-2 border-purple-600">
                <RiNextjsLine size={30} />
                Blog
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium`}
            >
              Home
            </Link>
            <Link
              href="/profile"
              className={`px-3 py-2 rounded-md text-sm font-medium`}
            >
              Profile
            </Link>
            <Link
              href="/blogs"
              className={`px-3 py-2 rounded-md text-sm font-medium `}
            >
              Blogs
            </Link>
            {!user ? (
              <Link
                href="/api/auth/login"
                className={`px-3 py-2 rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-all`}
              >
                Login
              </Link>
            ) : (
              <Link
                href="/api/auth/logout"
                className={`px-3 py-2 rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-all`}
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="h-20"></div>
    </>
  );
}
