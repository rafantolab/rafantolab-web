"use client"

import { useEffect } from "react";
import { Label, SectionTitle, useFade } from "../Sections";

const STEPS = [
    {
        n: "01",
        title: "Discovery & Strategy",
        desc: "Deep-dive into your vision, market, and users to craft a bulletproof product roadmap.",
    },
    {
        n: "02",
        title: "Design & Prototype",
        desc: "Interactive prototypes and design systems validated by real users before a line of code.",
    },
    {
        n: "03",
        title: "Build & Iterate",
        desc: "Agile sprints, weekly demos, clean code, automated tests, and continuous deployment.",
    },
    {
        n: "04",
        title: "Launch & Scale",
        desc: "Ship, monitor, and grow. Post-launch support and growth engineering baked in.",
    },
];
export function Process() {
    useFade(".proc-fade");
    useEffect(() => {
        let ctx: any;
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".gs-step",
                    { opacity: 0, y: 28 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.14,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".proc-steps",
                            start: "top 82%",
                            once: true,
                        },
                    },
                );
                ScrollTrigger.create({
                    trigger: ".proc-steps",
                    start: "top 78%",
                    once: true,
                    onEnter() {
                        gsap.fromTo(
                            ".step-num",
                            { scale: 0, opacity: 0 },
                            {
                                scale: 1,
                                opacity: 1,
                                duration: 0.5,
                                stagger: 0.12,
                                ease: "back.out(2)",
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
            id="process"
            className="py-[100px] bg-bg2"
        >
            <div className="container-site">
                <div className="text-center mb-14">
                    <Label>How It Works</Label>
                    <SectionTitle
                        pre="Our proven"
                        roll="4-step process"
                        center
                    />
                    <p className="proc-fade text-gray text-[1rem] max-w-[480px] leading-[1.75] mx-auto mt-2">
                        Designed for speed, clarity, and quality at every stage.
                    </p>
                </div>
                <div className="proc-steps relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                    <div className="absolute top-[35px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-green/20 to-transparent hidden lg:block" />
                    {STEPS.map((s) => (
                        <div
                            key={s.n}
                            className="gs-step text-center px-6 pb-8"
                        >
                            <div className="step-num w-[70px] h-[70px] rounded-full bg-bg3 border border-green/20 flex items-center justify-center font-display text-[1.35rem] font-bold text-green mx-auto mb-5 relative z-10 shadow-[0_0_25px_rgba(82,243,23,0.08)]">
                                {s.n}
                            </div>
                            <h4 className="font-bold text-[0.97rem] text-white mb-2">
                                {s.title}
                            </h4>
                            <p className="text-[0.83rem] text-gray leading-[1.65]">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}