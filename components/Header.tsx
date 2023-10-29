"use client";

import { ImageContext } from "@/context/ImageProvider";
import { handleImageUpload } from "@/lib/hooks";
import { prominent } from "color.js";
import React, { useContext } from "react";
import { FaImages } from "react-icons/fa";

export default function Header() {
  const contextData = useContext(ImageContext);

  if (!contextData) {
    return new Error("Error type");
  }

  const { setUploaded, uploaded, colors, setColors } = contextData;

  const handleGetArrayColors = async (e: any) => {
    handleImageUpload(e)
      .then(({ color, img }) => {
        if (color && img) {
          setColors(color);
          setUploaded(img);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <header className="py-[1rem] px-5 md:px-[4rem] min-h-[10vh] bg-[#262626] shadow-lg border-b border-[#363636] flex justify-between items-center gap-[3rem]">
      <h1 className="text-2xl md:text-[2.5rem] font-[800] pb-1">ImageInk</h1>
      <div className="flex justify-center items-center">
        <label
          className="group py-1 px-2 md:py-[0.5rem] md:px-[2rem] rounded-lg border border-[#363636] cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition flex justify-center items-center gap-3 text-md md:text-xl"
          htmlFor="file"
        >
          <FaImages className="group-hover:scale-110 group-hover:-translate-x-1 md:group-hover:-translate-x-2 transition-all" />
          Upload Image
        </label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleGetArrayColors}
          hidden
        />
      </div>
    </header>
  );
}
