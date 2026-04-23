"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`
        fixed bottom-7 right-7 z-[600] w-11 h-11 rounded-full
        bg-green text-[#050505] flex items-center justify-center border-0 cursor-pointer
        shadow-[0_4px_18px_rgba(82,243,23,0.35)]
        transition-all duration-300
        hover:shadow-[0_6px_26px_rgba(82,243,23,0.55)] hover:-translate-y-0.5
        ${vis ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}
      `}
    >
      <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
}
