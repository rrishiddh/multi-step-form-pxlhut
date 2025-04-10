"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className=" absolute top-1 right-1 px-3 py-1 border  bg-gray-200 dark:bg-gray-700 text-sm rounded"
    >
      {enabled ? "☀️" : "🌙"}
    </button>
  );
}
