import Link from "next/link";
import type { Metadata } from "next";
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
  title: "Your Name | Personal Site",
  description: "A personal site built with Next.js",
};
  
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

  <nav className="flex gap-6 p-4 bg-gray-800 text-white">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
  </nav>

  {children}

</body>

    </html>
  );
}
