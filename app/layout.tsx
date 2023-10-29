import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ImageProvider } from "@/context/ImageProvider";

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
        className={`!${inter.className} h-screen bg-[#1e1e1e] text-[#777b7f]`}
      >
        <ImageProvider>
          <Header />
          {children}
        </ImageProvider>
      </body>
    </html>
  );
}
