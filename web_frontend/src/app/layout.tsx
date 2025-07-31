import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Delivery Platform",
  description: "Browse restaurants, order food, and manage deliveries with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <header className="flex justify-between items-center p-4 border-b bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              🍽️ Foodie
            </Link>
          </div>
          <nav className="flex items-center gap-6 text-base">
            <Link href="/restaurants" className="hover:text-orange-700">
              Restaurants
            </Link>
            <Link href="/orders" className="hover:text-orange-700">
              Orders
            </Link>
            <Link href="/account" className="hover:text-orange-700">
              Account
            </Link>
            <Link
              href="/contact"
              className="rounded border px-4 py-1.5 border-green-700 text-green-700 hover:bg-green-50 transition font-medium"
              style={{ borderColor: "#43a047", color: "#43a047" }}
            >
              Contact Us
            </Link>
            <Link href="/login" className="ml-2 rounded bg-orange-600 text-white px-4 py-1.5 hover:bg-orange-700 shadow transition">
              Login
            </Link>
            <Link href="/register" className="rounded border px-4 py-1.5 border-orange-500 text-orange-600 hover:bg-orange-50 transition">
              Register
            </Link>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-6 flex flex-col min-h-[80vh]">
          {children}
        </main>
        <footer className="w-full p-4 text-center text-sm border-t bg-gray-50 dark:bg-neutral-900 text-gray-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Foodie &mdash; Fast, Fresh, Delivered.
        </footer>
      </body>
    </html>
  );
}
