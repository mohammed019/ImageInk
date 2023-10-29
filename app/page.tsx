"use client";

import DisplayImage from "@/components/Image";
import { ImageContext } from "@/context/ImageProvider";
import { useContext } from "react";

export default function Home() {
  const contextData = useContext(ImageContext);

  if (!contextData) {
    return new Error("Error type");
  }

  const { uploaded, colors } = contextData;

  return (
    <main className="min-h-[90vh] py-4 px-16 flex items-center justify-center">
      <DisplayImage colors={colors} img={uploaded} />
    </main>
  );
}
