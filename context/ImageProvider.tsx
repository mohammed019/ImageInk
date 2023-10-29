"use client";

import React, { createContext, ReactNode, useState } from "react";

// Define types for context data
type ImageContextData = {
  uploaded: React.ImgHTMLAttributes<HTMLImageElement> | null;
  setUploaded:
    | React.Dispatch<React.SetStateAction<null>>
    | React.Dispatch<
        React.SetStateAction<React.ImgHTMLAttributes<HTMLImageElement> | null>
      >;
  colors: string[] | null;
  setColors: React.Dispatch<React.SetStateAction<string[] | null>>;
};

// Define a context provider component
type ImageProviderProps = {
  children: ReactNode;
};

// Create the context
export const ImageContext = createContext<ImageContextData | null>(null);

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  // states
  const [uploaded, setUploaded] = useState(null);
  const [colors, setColors] = useState<any>([]);

  return (
    <ImageContext.Provider value={{ uploaded, setUploaded, colors, setColors }}>
      {children}
    </ImageContext.Provider>
  );
};
