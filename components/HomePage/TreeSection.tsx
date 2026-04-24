"use client"

import { useEffect, useRef } from "react";
import { Label, SectionTitle } from "../Sections";

/* ══════════════════════════════════════
   TREE SECTION
══════════════════════════════════════ */
export function TreeSection() {
    const cnt = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        let ctx: any;
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: "#treeSection",
                    start: "top 75%",
                    once: true,
                    onEnter() {
                        gsap.to(
                            { val: 0 },
                            {
                                val: 450,
                                duration: 2.5,
                                ease: "power2.out",
                                onUpdate(this: any) {
                                    if (cnt.current)
                                        cnt.current.textContent = String(
                                            Math.round(this.targets()[0].val),
                                        );
                                },
                            },
                        );
                        gsap.fromTo(
                            ".tree-item",
                            { opacity: 0, y: 20, scale: 0.8 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.5,
                                stagger: 0.04,
                                ease: "back.out(1.4)",
                            },
                        );
                        gsap.fromTo(
                            ".tree-card",
                            { opacity: 0, y: 30 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.6,
                                stagger: 0.1,
                                ease: "power2.out",
                            },
                        );
                    },
                });
            });
        })();
        return () => ctx?.revert();
    }, []);

    return (
        <section
            id="treeSection"
            className="py-[100px] bg-bg2 relative overflow-hidden"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(82,243,23,0.05) 0%, transparent 70%)",
                }}
            />
            <div className="container-site relative z-10">
                <div className="text-center mb-16">
                    <Label>Our Pledge</Label>
                    <SectionTitle
                        pre="We plant a tree for every"
                        roll="confirmed client"
                        center
                    />
                    <p className="text-gray text-[1rem] max-w-[520px] leading-[1.75] mx-auto mt-2">
                        Every time a client confirms to work with us, Rafantolab
                        plants 10 trees because great products should leave
                        the world better than we found it.
                    </p>
                </div>
                <div className="flex flex-col items-center mb-16">
                    <div className="relative">
                        <div className="text-[7rem] font-bold text-white leading-none flex items-end gap-3">
                            <span ref={cnt}>0</span>
                            <span className="text-green text-[5rem] mb-2">
                                🌳
                            </span>
                        </div>
                        <div
                            className="absolute -inset-8 rounded-full pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle,rgba(82,243,23,0.08),transparent 70%)",
                            }}
                        />
                    </div>
                    <p className="text-[1.1rem] font-semibold text-green mt-2 tracking-wide">
                        Trees planted and counting
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-1 mb-16 max-w-[600px] mx-auto">
                    {Array.from({ length: 90 }).map((_, i) => (
                        <span
                            key={i}
                            className="tree-item text-[1.1rem] opacity-0"
                            style={{
                                filter:
                                    i < 45
                                        ? "none"
                                        : "grayscale(1) opacity(0.3)",
                            }}
                        >
                            🌳
                        </span>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[820px] mx-auto">
                    {[
                        {
                            icon: "🤝",
                            title: "You Sign On",
                            desc: "When you confirm working with Rafantolab, 10 trees is automatically pledged in your name.",
                        },
                        {
                            icon: "🌱",
                            title: "We Plant",
                            desc: "We partner with reforestation initiatives to plant real trees in forests that need them most.",
                        },
                        {
                            icon: "🌍",
                            title: "We All Win",
                            desc: "Your product grows, our partnership grows, and so does the forest. Business with purpose.",
                        },
                    ].map((c, i) => (
                        <div
                            key={i}
                            className="tree-card opacity-0 bg-bg3 border border-green/20 rounded-2xl p-7 text-center hover:border-green/40 transition-colors duration-200"
                        >
                            <div className="text-[2.5rem] mb-4">{c.icon}</div>
                            <h3 className="font-bold text-white text-[1.05rem] mb-2 font-body">
                                {c.title}
                            </h3>
                            <p className="text-gray text-[0.87rem] leading-[1.65]">
                                {c.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}