import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Box",
  description: "A simple recipe collection built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* This header renders once and persists across every page navigation —
            Next.js doesn't remount the layout, only swaps {children} below it. */}
        <header className="border-b bg-white">
          <nav className="max-w-md mx-auto px-4 py-3">
            <Link href="/" className="font-semibold text-gray-900">
              🍳 Recipe Box
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}