"use client";

import { useScrollProgress } from "@/hooks/useScroll";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        background:
          "linear-gradient(90deg, var(--sw), var(--ai) 55%, var(--sec))",
        zIndex: 200,
        transition: "width 0.1s linear",
        boxShadow: "0 0 10px var(--ai)",
      }}
    />
  );
}
