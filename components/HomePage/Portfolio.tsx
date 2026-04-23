"use client"

import { useEffect, useRef, useState } from "react";
import { Label, SectionTitle, useFade } from "../Sections";

const CASES = [
    {
        bg: "linear-gradient(135deg,#0d1f15,#1a3320)",
        tag: "SaaS Platform",
        title: "NovaDash Analytics",
        desc: "Real-time B2B analytics dashboard for 8,000+ enterprise teams with ML-powered insights.",
        pills: ["Next.js", "PostgreSQL", "AWS"],
        stat: "8K+ teams",
        svg: (
            <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
            >
                <rect
                    x="10"
                    y="20"
                    width="60"
                    height="40"
                    rx="6"
                    stroke="#52f317"
                    strokeWidth="1.5"
                />
                <path
                    d="M10 30h60"
                    stroke="#52f317"
                    strokeWidth="1"
                    opacity=".4"
                />
                <circle
                    cx="20"
                    cy="25"
                    r="2.5"
                    fill="#52f317"
                    opacity=".6"
                />
                <rect
                    x="18"
                    y="38"
                    width="20"
                    height="14"
                    rx="3"
                    fill="#52f317"
                    opacity=".12"
                />
                <rect
                    x="44"
                    y="38"
                    width="18"
                    height="6"
                    rx="2"
                    fill="#52f317"
                    opacity=".12"
                />
            </svg>
        ),
    },
    {
        bg: "linear-gradient(135deg,#0f1a20,#1a2a30)",
        tag: "FinTech App",
        title: "Orbitpay",
        desc: "Cross-border payment infra processing $2M+ daily across 40 currencies with sub-second settlement.",
        pills: ["React Native", "Node.js", "Stripe"],
        stat: "$2M+ daily",
        svg: (
            <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
            >
                <circle
                    cx="40"
                    cy="40"
                    r="28"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".5"
                />
                <circle
                    cx="40"
                    cy="40"
                    r="18"
                    stroke="#52f317"
                    strokeWidth="1"
                    opacity=".3"
                />
                <circle
                    cx="40"
                    cy="40"
                    r="8"
                    fill="#52f317"
                    opacity=".2"
                />
                <path
                    d="M40 12L40 20M40 60L40 68M12 40L20 40M60 40L68 40"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".5"
                />
            </svg>
        ),
    },
    {
        bg: "linear-gradient(135deg,#1a150d,#2a1f10)",
        tag: "Productivity SaaS",
        title: "Flowspace",
        desc: "AI-powered team collaboration platform. Grew from 0 to 25K MAU in 8 months post-launch.",
        pills: ["React", "GraphQL", "GCP"],
        stat: "25K MAU",
        svg: (
            <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
            >
                <rect
                    x="15"
                    y="15"
                    width="22"
                    height="22"
                    rx="4"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".5"
                />
                <rect
                    x="43"
                    y="15"
                    width="22"
                    height="22"
                    rx="4"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".4"
                />
                <rect
                    x="15"
                    y="43"
                    width="22"
                    height="22"
                    rx="4"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".3"
                />
                <rect
                    x="43"
                    y="43"
                    width="22"
                    height="22"
                    rx="4"
                    fill="#52f317"
                    opacity=".12"
                    stroke="#52f317"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
    {
        bg: "linear-gradient(135deg,#12101a,#1e1830)",
        tag: "E-Commerce",
        title: "LuxCart",
        desc: "Premium D2C e-commerce platform for luxury brands. 340% increase in conversion rate post-launch.",
        pills: ["Next.js", "Shopify", "Stripe"],
        stat: "340% CVR ↑",
        svg: (
            <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
            >
                <rect
                    x="15"
                    y="25"
                    width="50"
                    height="35"
                    rx="5"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".5"
                />
                <path
                    d="M28 25v-8a12 12 0 0 1 24 0v8"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".7"
                />
                <circle
                    cx="40"
                    cy="42"
                    r="6"
                    stroke="#52f317"
                    strokeWidth="1.2"
                />
            </svg>
        ),
    },
    {
        bg: "linear-gradient(135deg,#0a1a18,#102520)",
        tag: "HealthTech",
        title: "MedFlow",
        desc: "HIPAA-compliant patient management platform serving 120+ clinics with real-time scheduling.",
        pills: ["React", "PostgreSQL", "AWS"],
        stat: "120+ clinics",
        svg: (
            <svg
                width="70"
                height="70"
                viewBox="0 0 80 80"
                fill="none"
            >
                <rect
                    x="15"
                    y="15"
                    width="50"
                    height="50"
                    rx="8"
                    stroke="#52f317"
                    strokeWidth="1.5"
                    opacity=".5"
                />
                <path
                    d="M40 28v24M28 40h24"
                    stroke="#52f317"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity=".7"
                />
            </svg>
        ),
    },
];

export function Portfolio() {
    useFade(".port-fade");
    const [idx, setIdx] = useState(0);
    const total = CASES.length;
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Drag state
    const drag = useRef({ active: false, startX: 0, threshold: 60 });

    const goTo = (i: number) => {
        const next = (i + total) % total;
        setIdx(next);
    };

    // Auto-advance
    useEffect(() => {
        const id = setInterval(() => setIdx((i) => (i + 1) % total), 5000);
        return () => clearInterval(id);
    }, [total]);

    // Apply transform
    useEffect(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transform = `translateX(-${idx * 100}%)`;
    }, [idx]);

    // Pointer drag handlers
    const onPointerDown = (e: React.PointerEvent) => {
        drag.current.active = true;
        drag.current.startX = e.clientX;
        if (trackRef.current) {
            trackRef.current.style.transition = "none";
            trackRef.current.setPointerCapture(e.pointerId);
        }
    };
    const onPointerUp = (e: React.PointerEvent) => {
        if (!drag.current.active) return;
        drag.current.active = false;
        if (trackRef.current) trackRef.current.style.transition = "";
        const dx = e.clientX - drag.current.startX;
        if (Math.abs(dx) > drag.current.threshold)
            goTo(dx < 0 ? idx + 1 : idx - 1);
        else if (trackRef.current)
            trackRef.current.style.transform = `translateX(-${idx * 100}%)`;
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (!drag.current.active || !trackRef.current) return;
        const dx = e.clientX - drag.current.startX;
        const base = idx * 100;
        const pct = (dx / (containerRef.current?.offsetWidth || 800)) * 100;
        trackRef.current.style.transform = `translateX(${-base + pct}%)`;
    };

    const go = (e: React.MouseEvent) => {
        e.preventDefault();
        document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="portfolio"
            className="py-[100px] bg-bg"
        >
            <div className="container-site">
                <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
                    <div>
                        <Label>Selected Work</Label>
                        <SectionTitle
                            pre="Products we've"
                            roll="brought to life"
                        />
                    </div>
                    <a
                        href="#contact"
                        onClick={go}
                        className="port-fade border border-gray2 text-white/70 rounded-full px-6 py-2.5 text-[0.88rem] font-medium no-underline hover:border-green hover:text-white transition-all duration-200 cursor-pointer"
                    >
                        View All →
                    </a>
                </div>

                {/* Cinematic full-width carousel */}
                <div className="relative select-none">
                    <div
                        ref={containerRef}
                        className="overflow-hidden rounded-3xl"
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerLeave={onPointerUp}
                        style={{ cursor: "grab" }}
                    >
                        <div
                            ref={trackRef}
                            className="flex"
                            style={{
                                transition:
                                    "transform 0.6s cubic-bezier(0.25,1,0.5,1)",
                            }}
                        >
                            {CASES.map((c, i) => (
                                <div
                                    key={c.title}
                                    className="flex-shrink-0 w-full"
                                >
                                    <div
                                        className="relative h-[480px] md:h-[560px] overflow-hidden"
                                        style={{ background: c.bg }}
                                    >
                                        {/* Background glow */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background:
                                                    "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(82,243,23,0.07), transparent 70%)",
                                            }}
                                        />

                                        {/* Grid lines decoration */}
                                        <div
                                            className="absolute inset-0 opacity-[0.04]"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(rgba(82,243,23,1) 1px,transparent 1px),linear-gradient(90deg,rgba(82,243,23,1) 1px,transparent 1px)",
                                                backgroundSize: "60px 60px",
                                            }}
                                        />

                                        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-10 md:px-16 py-12 gap-8">
                                            {/* Left content */}
                                            <div className="flex-1 max-w-[500px]">
                                                <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-3.5 py-1 mb-6">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green" />
                                                    <span className="text-green text-[0.72rem] font-semibold tracking-[0.1em] uppercase">
                                                        {c.tag}
                                                    </span>
                                                </div>
                                                <h3 className="font-display text-[2.4rem] md:text-[3rem] font-bold text-white leading-[1.1] mb-4">
                                                    {c.title}
                                                </h3>
                                                <p className="text-white/55 text-[1rem] leading-[1.75] mb-7 max-w-[420px]">
                                                    {c.desc}
                                                </p>

                                                {/* Stat badge */}
                                                <div className="inline-flex items-center gap-2 bg-bg3/80 border border-gray2 rounded-xl px-4 py-2.5 mb-7 backdrop-blur-sm">
                                                    <span className="text-green font-bold text-[1.1rem] font-display">
                                                        {c.stat}
                                                    </span>
                                                </div>

                                                <div className="flex gap-2.5 flex-wrap">
                                                    {c.pills.map((p) => (
                                                        <span
                                                            key={p}
                                                            className="bg-bg3/70 border border-gray2 rounded-full px-3.5 py-1 text-[0.75rem] font-medium text-gray backdrop-blur-sm"
                                                        >
                                                            {p}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right: SVG illustration */}
                                            <div
                                                className="hidden md:flex items-center justify-center w-[240px] h-[240px] rounded-3xl bg-black/20 border border-white/5 backdrop-blur-sm"
                                                style={{ opacity: 0.9 }}
                                            >
                                                <div
                                                    style={{
                                                        transform: "scale(2.2)",
                                                    }}
                                                >
                                                    {c.svg}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom slide counter */}
                                        <div className="absolute bottom-6 left-10 md:left-16 flex items-center gap-3">
                                            <span className="text-white/30 text-[0.75rem] font-mono tabular-nums">
                                                {String(i + 1).padStart(2, "0")}{" "}
                                                /{" "}
                                                {String(total).padStart(2, "0")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating arrow buttons */}
                    <button
                        onClick={() => goTo(idx - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md flex items-center justify-center hover:bg-green hover:border-green hover:text-[#050505] transition-all duration-200 cursor-pointer z-10"
                    >
                        <svg
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={() => goTo(idx + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md flex items-center justify-center hover:bg-green hover:border-green hover:text-[#050505] transition-all duration-200 cursor-pointer z-10"
                    >
                        <svg
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    {/* Thumbnail strip below */}
                    <div className="flex gap-2 mt-4">
                        {CASES.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`flex-1 h-1.5 rounded-full border-0 cursor-pointer transition-all duration-400 ${i === idx ? "bg-green" : "bg-gray2 hover:bg-gray3"}`}
                            />
                        ))}
                    </div>

                    {/* Drag hint */}
                    <p className="text-center text-[0.72rem] text-gray/40 mt-3 tracking-wide">
                        drag to explore
                    </p>
                </div>
            </div>
        </section>
    );
}