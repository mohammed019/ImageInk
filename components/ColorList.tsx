"use client";
import React, { useState } from "react";

export default function ColorList({ rgb, hex }: any) {
  const [copied, setCopied] = useState(false);

  return (
    <li className="" style={{ background: rgb }}>
      <span>{copied ? "Copied!" : hex}</span>
    </li>
  );
}
