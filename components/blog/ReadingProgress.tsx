"use client";

import { useEffect } from "react";

export default function ReadingProgress() {
  useEffect(() => {
    const bar = document.getElementById("progress");
    if (!bar) return;

    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      bar.style.width = `${max > 0 ? (root.scrollTop / max) * 100 : 0}%`;
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="progress" id="progress" />;
}
