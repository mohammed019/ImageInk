"use client";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function ColorList({ rgb, hex }: any) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: any) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <li
      className="relative w-[9rem] h-[9rem] border border-[#363636] rounded-lg shadow-lg transition-all hover:scale-105"
      style={{ background: rgb }}
    >
      <span
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
        className={`flex justify-between items-center gap-4 cursor-pointer py-[0.5rem] px-[1rem] w-full absolute bottom-0 border-t-2 border-white/20 font-[600] text-[#02203c] bg-[rgba(255,255,255,0.20)]`}
      >
        {copied ? "Copied!" : hex} <FaCopy className="text-[1rem]" />
      </span>
    </li>
  );
}
