import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookmark Manager",
  description: "A simple bookmark manager built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <nav className="max-w-md mx-auto px-4 py-3">
            <Link href="/" className="font-semibold text-gray-900">
              📚 Bookmarks
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}