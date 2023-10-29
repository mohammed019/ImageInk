import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImageInk",
  description: "Turn images into beautiful color schemes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`!${inter.className} h-screen bg-[#1e1e1e] text-xl text-[#777b7f]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
