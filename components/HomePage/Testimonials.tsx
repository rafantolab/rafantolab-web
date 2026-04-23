"use client"

import { useEffect, useRef, useState } from "react";
import { Label, SectionTitle } from "../Sections";

const TESTI = [
    {
        text: "Rafantolab turned our messy requirements into a polished SaaS in 14 weeks. The quality of engineering and design was beyond what we expected from any external team.",
        name: "Alex Kim",
        role: "CEO, NovaDash",
        init: "AK",
        color: "#52f317",
    },
    {
        text: "The team's ability to bridge design thinking with technical execution is rare. They challenged our assumptions and delivered a product our users truly love.",
        name: "Sara Reeves",
        role: "Founder, Flowspace",
        init: "SR",
        color: "#3b82f6",
    },
    {
        text: "From day one they operated like co-founders, not contractors. Rafantolab's infrastructure choices saved us hundreds of thousands in scaling costs.",
        name: "Marcus Osei",
        role: "CTO, Orbitpay",
        init: "MO",
        color: "#a855f7",
    },
    {
        text: "Truly exceptional work. They delivered ahead of schedule and the attention to detail in the UI was something we've never seen from a studio before.",
        name: "Lena Park",
        role: "Head of Product, LuxCart",
        init: "LP",
        color: "#f59e0b",
    },
    {
        text: "We tried two other agencies before Rafantolab. Night and day difference. They just get it — strategy, design, and code all at the highest level.",
        name: "James Wren",
        role: "Founder, MedFlow",
        init: "JW",
        color: "#ef4444",
    },
];

export function Testimonials() {
    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState<"next" | "prev">("next");
    const [animating, setAnimating] = useState(false);
    const total = TESTI.length;

    const goTo = (i: number, direction: "next" | "prev" = "next") => {
        if (animating) return;
        setDir(direction);
        setAnimating(true);
        setTimeout(() => {
            setIdx((i + total) % total);
            setAnimating(false);
        }, 320);
    };

    // Drag
    const drag = useRef({ active: false, startX: 0 });
    const onPD = (e: React.PointerEvent) => {
        drag.current.active = true;
        drag.current.startX = e.clientX;
    };
    const onPU = (e: React.PointerEvent) => {
        if (!drag.current.active) return;
        drag.current.active = false;
        const dx = e.clientX - drag.current.startX;
        if (Math.abs(dx) > 60)
            dx < 0 ? goTo(idx + 1, "next") : goTo(idx - 1, "prev");
    };

    // Auto-play
    useEffect(() => {
        const id = setInterval(() => goTo(idx + 1, "next"), 6000);
        return () => clearInterval(id);
    }, [idx]);

    const t = TESTI[idx];

    return (
        <section
            id="testimonials"
            className="py-[100px] bg-bg"
        >
            <div className="container-site">
                <div className="text-center mb-16">
                    <Label>Client Love</Label>
                    <SectionTitle
                        pre="Trusted by"
                        roll="founders worldwide"
                        center
                    />
                </div>

                <div className="max-w-[820px] mx-auto">
                    {/* Main card */}
                    <div
                        className="relative"
                        onPointerDown={onPD}
                        onPointerUp={onPU}
                        style={{ cursor: "grab" }}
                    >
                        {/* Stacked cards behind */}
                        <div
                            className="absolute inset-x-4 bottom-0 h-full bg-bg3 border border-gray2 rounded-2xl"
                            style={{
                                transform: "translateY(8px) scale(0.97)",
                                opacity: 0.5,
                            }}
                        />
                        <div
                            className="absolute inset-x-8 bottom-0 h-full bg-bg3 border border-gray2 rounded-2xl"
                            style={{
                                transform: "translateY(16px) scale(0.94)",
                                opacity: 0.25,
                            }}
                        />

                        {/* Active card */}
                        <div
                            className="relative bg-bg3 border border-gray2 rounded-2xl p-8 md:p-12 z-10 overflow-hidden"
                            style={{
                                transition: "opacity 0.32s, transform 0.32s",
                                opacity: animating ? 0 : 1,
                                transform: animating
                                    ? dir === "next"
                                        ? "translateX(-30px)"
                                        : "translateX(30px)"
                                    : "translateX(0)",
                            }}
                        >
                            {/* Accent glow */}
                            <div
                                className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle,${t.color}10,transparent 70%)`,
                                    transform: "translate(30%,-30%)",
                                }}
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-7">
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <svg
                                        key={j}
                                        width="17"
                                        height="17"
                                        viewBox="0 0 24 24"
                                        fill="#52f317"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Opening quote */}
                            <div className="font-display text-[4rem] leading-none mb-[-1rem] opacity-20 text-white">
                                &ldquo;
                            </div>
                            <p className="text-[1.1rem] text-white/75 leading-[1.8] mb-8 font-display italic relative z-10">
                                {t.text}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 relative z-10">
                                <div
                                    className="w-[52px] h-[52px] rounded-full border-2 flex items-center justify-center font-bold text-[1rem] flex-shrink-0"
                                    style={{
                                        borderColor: t.color,
                                        background: `${t.color}15`,
                                        color: t.color,
                                    }}
                                >
                                    {t.init}
                                </div>
                                <div>
                                    <div className="font-bold text-white text-[1rem]">
                                        {t.name}
                                    </div>
                                    <div className="text-gray text-[0.8rem]">
                                        {t.role}
                                    </div>
                                </div>
                                <div className="ml-auto text-[0.72rem] font-mono text-gray/40 tabular-nums">
                                    {String(idx + 1).padStart(2, "0")}/
                                    {String(total).padStart(2, "0")}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls row */}
                    <div className="flex items-center justify-between mt-8 px-1">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {TESTI.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() =>
                                        goTo(i, i > idx ? "next" : "prev")
                                    }
                                    className={`h-1.5 rounded-full border-0 cursor-pointer transition-all duration-300 ${i === idx ? "w-7 bg-green" : "w-2 bg-gray2 hover:bg-gray3"}`}
                                />
                            ))}
                        </div>
                        {/* Arrows */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => goTo(idx - 1, "prev")}
                                className="w-10 h-10 rounded-full border border-gray2 bg-bg3 text-white flex items-center justify-center hover:border-green hover:text-green transition-all duration-200 cursor-pointer"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => goTo(idx + 1, "next")}
                                className="w-10 h-10 rounded-full border border-gray2 bg-bg3 text-white flex items-center justify-center hover:border-green hover:text-green transition-all duration-200 cursor-pointer"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}