"use client";
import { useEffect, useRef, useState } from "react";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
    w: 4 + ((i * 7919) % 5),
    h: 4 + ((i * 6271) % 5),
    l: 5 + i * 6.5,
    t: 10 + ((i * 3491) % 75),
    o: 0.25 + ((i * 1327) % 40) / 100,
}));
function ClientParticles() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {PARTICLES.map((p, i) => (
                <div
                    key={i}
                    className="hero-particle absolute rounded-full bg-green/20"
                    style={{
                        width: `${p.w}px`,
                        height: `${p.h}px`,
                        left: `${p.l}%`,
                        top: `${p.t}%`,
                        opacity: p.o,
                    }}
                />
            ))}
        </div>
    );
}

const rollingWords = [
    "SaaS Products",
    "Landing Pages",
    "Mobile Apps",
    "Web Applications",
    "AI Solutions",
    "Digital Brands",
];

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);
    const outerRing = useRef<SVGCircleElement>(null);
    const innerRing = useRef<SVGCircleElement>(null);
    const dotRef = useRef<SVGCircleElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLDivElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const cnt1 = useRef<HTMLSpanElement>(null);
    const cnt2 = useRef<HTMLSpanElement>(null);
    const cnt3 = useRef<HTMLSpanElement>(null);
    const cnt4 = useRef<HTMLSpanElement>(null);

    const [wordIdx, setWordIdx] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setWordIdx((i) => (i + 1) % rollingWords.length);
            setAnimKey((k) => k + 1);
        }, 2400);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        let gsapInst: any;
        const onMove = async (e: MouseEvent) => {
            if (!gsapInst) {
                const { gsap } = await import("gsap");
                gsapInst = gsap;
            }
            const r = section.getBoundingClientRect();
            const cx = (e.clientX - r.left) / r.width - 0.5;
            const cy = (e.clientY - r.top) / r.height - 0.5;
            gsapInst.to(logoRef.current, {
                x: cx * 28,
                y: cy * 18,
                rotateY: cx * 14,
                rotateX: cy * -10,
                duration: 0.6,
                ease: "power2.out",
                transformPerspective: 600,
            });
            if (glowRef.current)
                gsapInst.to(glowRef.current, {
                    x: e.clientX - r.left - 175,
                    y: e.clientY - r.top - 175,
                    duration: 0.8,
                    ease: "power2.out",
                });
            gsapInst.to(outerRing.current, {
                attr: { r: 130 + Math.abs(cx) * 30 },
                stroke: "rgba(82,243,23," + (0.15 + Math.abs(cx) * 0.25) + ")",
                duration: 0.4,
            });
        };
        const onLeave = async () => {
            if (!gsapInst) return;
            gsapInst.to(logoRef.current, {
                x: 0,
                y: 0,
                rotateY: 0,
                rotateX: 0,
                duration: 0.8,
                ease: "elastic.out(1,.4)",
            });
            gsapInst.to(outerRing.current, {
                attr: { r: 120 },
                stroke: "rgba(82,243,23,0.15)",
                duration: 0.5,
            });
        };
        section.addEventListener("mousemove", onMove);
        section.addEventListener("mouseleave", onLeave);
        return () => {
            section.removeEventListener("mousemove", onMove);
            section.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    useEffect(() => {
        let ctx: any;
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                const tl = gsap.timeline({ delay: 0.15 });
                tl.fromTo(
                    badgeRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.4)" },
                    0,
                )
                    .fromTo(
                        h1Ref.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                        0.2,
                    )
                    .fromTo(
                        subRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                        0.4,
                    )
                    .fromTo(
                        actionsRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                        0.55,
                    )
                    .fromTo(
                        statsRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                        0.7,
                    )
                    .fromTo(
                        logoRef.current,
                        { opacity: 0, scale: 0.5 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            ease: "elastic.out(1,.55)",
                        },
                        0.1,
                    )
                    .fromTo(
                        outerRing.current,
                        { opacity: 0, scale: 0.4 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                        },
                        0.3,
                    )
                    .fromTo(
                        innerRing.current,
                        { opacity: 0, scale: 0.4 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                        },
                        0.45,
                    )
                    .fromTo(
                        dotRef.current,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.4 },
                        0.6,
                    );

                const animCounter = (
                    ref: React.RefObject<HTMLSpanElement>,
                    target: number,
                ) => {
                    ScrollTrigger.create({
                        trigger: statsRef.current,
                        start: "top 85%",
                        once: true,
                        onEnter() {
                            gsap.to(
                                { val: 0 },
                                {
                                    val: target,
                                    duration: 2,
                                    ease: "power2.out",
                                    onUpdate(this: any) {
                                        if (ref.current)
                                            ref.current.textContent = String(
                                                Math.round(
                                                    this.targets()[0].val,
                                                ),
                                            );
                                    },
                                },
                            );
                        },
                    });
                };
                animCounter(cnt1, 50);
                animCounter(cnt2, 98);
                animCounter(cnt3, 120);
                animCounter(cnt4, 450);

                const g = document.getElementById("cursorGlow");
                if (g)
                    window.addEventListener("mousemove", (e) =>
                        gsap.to(g, {
                            x: e.clientX,
                            y: e.clientY,
                            duration: 0.7,
                            ease: "power2.out",
                        }),
                    );

                gsap.utils
                    .toArray<Element>(".hero-particle")
                    .forEach((p, i) => {
                        gsap.to(p, {
                            y: `-=${20 + i * 8}`,
                            x: `+=${(i % 2 === 0 ? 1 : -1) * 12}`,
                            opacity: [0.5, 1, 0.5],
                            duration: 3 + i * 0.7,
                            ease: "sine.inOut",
                            yoyo: true,
                            repeat: -1,
                            delay: i * 0.3,
                        });
                    });
            });
        })();
        return () => ctx?.revert();
    }, []);

    const go = (href: string) =>
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 70% at 60% 40%,rgba(82,243,23,0.055) 0%,transparent 65%)",
                }}
            />
            <div
                ref={glowRef}
                id="cursorGlow"
                className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle,rgba(82,243,23,0.07),transparent 70%)",
                    transform: "translate(-50%,-50%)",
                }}
            />
            <ClientParticles />

            <div className="container-site relative z-10 flex justify-center gap-14 items-center w-full">
                {/* ────── LEFT ────── */}
                <div className="flex flex-col items-center text-center lg:text-left">
                    {/* Tree Badge */}
                    <div
                        ref={badgeRef}
                        style={{ opacity: 0 }}
                        className="inline-flex items-center gap-2.5 self-center bg-green/10 border border-green/25 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm"
                    >
                        <span className="text-[1rem]">🌳</span>
                        <span className="text-[0.75rem] font-semibold tracking-[0.08em] text-green">
                            Every client confirmation = 10 tree planted{" "}
                            <span className="text-[1rem]">🌳</span>
                            {/* <span className="text-white font-bold">
                                450 trees
                            </span>{" "}
                            and counting */}
                        </span>
                    </div>
                    {/* Available badge */}
                    <div className="inline-flex items-center gap-2.5 self-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green animate-badgePulse" />
                        <span className="text-[0.75rem] font-semibold tracking-[0.1em] text-green uppercase">
                            Available for new projects
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green animate-badgePulse" />
                    </div>

                    {/* H1 */}
                    <div
                        ref={h1Ref}
                        style={{ opacity: 0 }}
                    >
                        <h1
                            className="font-body text-center font-bold leading-[1.08] tracking-[-0.03em] text-white mb-4"
                            style={{ fontSize: "clamp(2.6rem,5.5vw,4.4rem)" }}
                        >
                            From <span className="font-display">Idea</span> to
                            Impact <br />
                            We Build Growth Driven Products
                        </h1>
                    </div>

                    {/* Sub */}
                    <p
                        ref={subRef}
                        style={{ opacity: 0 }}
                        className="text-[1.05rem] text-gray leading-[1.8] mb-10 mx-auto lg:mx-0"
                    >
                        we combine strategy, design thinking, and engineering to
                        transform ideas into impactful digital experiences
                    </p>

                    {/* Actions */}
                    <div
                        ref={actionsRef}
                        style={{ opacity: 0 }}
                        className="flex flex-wrap gap-4 mb-14 justify-center"
                    >
                        {" "}
                        <p className="relative w-full text-center mb-5">
                            <p className=" text-5xl text-center rolling-wrapper text-green font-display italic">
                                <p
                                    key={animKey}
                                    className="rolling-word font-bold"
                                >
                                    {rollingWords[wordIdx]}
                                </p>
                            </p>
                        </p>
                        <button
                            onClick={() => go("#contact")}
                            className="bg-green text-[#050505] font-bold rounded-full px-8 py-3.5 text-[0.97rem] flex items-center gap-2 border-0 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(82,243,23,0.4)]"
                        >
                            Build Your Product
                            <svg
                                width="15"
                                height="15"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        {/* <button onClick={()=>go("#portfolio")} className="bg-transparent text-white/70 border border-gray2 rounded-full px-7 py-3.5 text-[0.97rem] font-medium cursor-pointer transition-all duration-200 hover:border-green hover:text-white">
              View Our Work
            </button> */}
                    </div>

                    {/* Stats */}
                    {/* <div ref={statsRef} style={{opacity:0}} className="flex gap-8 pt-8 border-t border-gray2 flex-wrap justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="font-display text-[2rem] font-bold text-white"><span ref={cnt1}>0</span>+</div>
              <div className="text-[0.78rem] text-gray tracking-[0.05em] font-medium uppercase">Products Shipped</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display text-[2rem] font-bold text-white"><span ref={cnt2}>0</span>%</div>
              <div className="text-[0.78rem] text-gray tracking-[0.05em] font-medium uppercase">Client Satisfaction</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display text-[2rem] font-bold text-white">$<span ref={cnt3}>0</span>M+</div>
              <div className="text-[0.78rem] text-gray tracking-[0.05em] font-medium uppercase">Client Revenue</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display text-[2rem] font-bold text-green flex items-center gap-1"><span ref={cnt4}>0</span><span className="text-[1.4rem]">🌳</span></div>
              <div className="text-[0.78rem] text-gray tracking-[0.05em] font-medium uppercase">Trees Planted</div>
            </div>
          </div> */}
                </div>

                {/* ────── RIGHT: Logo Orbit ────── */}
                {/* <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-[380px] h-[380px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full animate-spinSlow" viewBox="0 0 380 380" fill="none">
              <circle ref={outerRing} cx="190" cy="190" r="120" stroke="rgba(82,243,23,0.15)" strokeWidth="1" strokeDasharray="6 10"/>
              <circle ref={dotRef} cx="190" cy="70" r="5" fill="#52f317" style={{filter:"drop-shadow(0 0 6px #52f317)"}}/>
            </svg>
            <svg className="absolute inset-0 w-full h-full animate-spinSlowR" viewBox="0 0 380 380" fill="none">
              <circle ref={innerRing} cx="190" cy="190" r="80" stroke="rgba(82,243,23,0.10)" strokeWidth="1" strokeDasharray="3 14"/>
            </svg>
            <div className="absolute w-[420px] h-[420px] rounded-full animate-glowPulse pointer-events-none"
              style={{background:"radial-gradient(circle,rgba(82,243,23,0.12) 0%,transparent 70%)"}}/>
            <svg ref={logoRef} width="460" height="460" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 cursor-pointer select-none"
              style={{filter:"drop-shadow(0 0 24px rgba(82,243,23,0.4))", transformStyle:"preserve-3d"}}>
              <defs>
                <linearGradient id="heroLogoGrad" x1="59.31" y1="148" x2="508.19" y2="394" gradientUnits="userSpaceOnUse">
                  <stop offset="0"   stopColor="#198405"/><stop offset=".37" stopColor="#229608"/>
                  <stop offset=".8"  stopColor="#3fce11"/><stop offset="1"   stopColor="#52f317"/>
                </linearGradient>
                <linearGradient id="heroLogoGradW" x1="59.31" y1="148" x2="508.19" y2="394" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="rgba(255,255,255,0.15)"/><stop offset="1" stopColor="rgba(255,255,255,0.05)"/>
                </linearGradient>
              </defs>
              <path fill="url(#heroLogoGrad)" d="M256,102.1c84.9,0,154,69.11,154,154s-69.11,154-154,154-154-69.11-154-154,69.11-154,154-154M256,0C114.57,0,0,114.68,0,256s114.68,256,256,256,256-114.68,256-256S397.32,0,256,0h0Z"/>
              <circle cx="256" cy="256" r="100" fill="url(#heroLogoGradW)" opacity=".4"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-display font-bold text-white/90 select-none" style={{fontSize:"3.2rem",textShadow:"0 0 30px rgba(82,243,23,0.5)"}}></span>
            </div>
          </div>
        </div> */}
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, transparent, #050505)",
                }}
            />
        </section>
    );
}
