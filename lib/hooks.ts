import { prominent } from "color.js";
import React from "react";

interface ImageData {
  color: string[];
  img: any;
}

export const handleImageUpload = (e: any): Promise<ImageData> => {
  return new Promise((resolve, reject) => {
    const file: any = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const img: any = new Image();

      // Wait for image to load
      img.onload = () => {
        prominent(img, { amount: 8 })
          .then((colors: any) => {
            const imageData: ImageData = {
              color: colors,
              img: img,
            };
            resolve(imageData);
          })
          .catch((error: any) => {
            reject(error);
          });
      };

      img.onerror = (error: any) => {
        console.error("Error loading image:", error);
        reject(error);
      };

      // Set the source of the image to the result of FileReader
      img.src = e?.target?.result;
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  });
};
