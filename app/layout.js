import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NextBlog",
  description: "Read and enrich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Foot />
      </body>
    </html>
  );
}
