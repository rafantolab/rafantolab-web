"use client";
import { useEffect, useRef, useState } from "react";
import logo1 from "../images/brand/logo1.png";
import logo2 from "../images/brand/logo2.png";
import logo3 from "../images/brand/logo3.png";
import logo4 from "../images/brand/logo4.png";
import logo5 from "../images/brand/logo5.png";
import logo6 from "../images/brand/logo6.png";
import logo7 from "../images/brand/logo7.png";
import logo8 from "../images/brand/logo8.png";
import logo9 from "../images/brand/logo9.png";
import logo10 from "../images/brand/logo10.png";
import logo11 from "../images/brand/logo11.png";
import logo12 from "../images/brand/logo12.png";
import logo13 from "../images/brand/logo13.png";
import logo14 from "../images/brand/logo14.png";
import Image from "next/image";

/* ══════════════════════════════════════
   SHARED HOOKS
══════════════════════════════════════ */
export function useFade(sel: string) {
    useEffect(() => {
        let ctx: any;
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                gsap.utils.toArray<Element>(sel).forEach((el) =>
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 28 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 89%",
                                once: true,
                            },
                        },
                    ),
                );
            });
        })();
        return () => ctx?.revert();
    }, [sel]);
}

export function useStagger(gridSel: string) {
    useEffect(() => {
        let ctx: any;
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                const g = document.querySelector(gridSel);
                if (!g) return;
                gsap.fromTo(
                    g.querySelectorAll(".stag"),
                    { opacity: 0, y: 36, scale: 0.97 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.55,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: g,
                            start: "top 86%",
                            once: true,
                        },
                    },
                );
            });
        })();
        return () => ctx?.revert();
    }, [gridSel]);
}

const TRUSTED = [
    { name: "", symbol: logo1, color: "#fff" },
    { name: "", symbol: logo2, color: "#fff" },
    { name: "", symbol: logo3, color: "#fff" },
    { name: "", symbol: logo4, color: "#fff" },
    { name: "", symbol: logo5, color: "#fff" },
    { name: "", symbol: logo6, color: "#fff" },
    { name: "", symbol: logo7, color: "#fff" },
    { name: "", symbol: logo8, color: "#fff" },
    { name: "", symbol: logo9, color: "#fff" },
    { name: "", symbol: logo10, color: "#fff" },
    { name: "", symbol: logo11, color: "#fff" },
    { name: "", symbol: logo12, color: "#fff" },
    { name: "", symbol: logo13, color: "#fff" },
    { name: "", symbol: logo14, color: "#fff" },
];

export function SectionTitle({
    pre,
    roll,
    post,
    center = false,
}: {
    pre: string;
    roll: string;
    post?: string;
    center?: boolean;
}) {
    const ref = useRef<HTMLHeadingElement>(null);
    const seen = useRef(false);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting && !seen.current) {
                    seen.current = true;
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.2 },
        );
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);
    return (
        <h2
            ref={ref}
            className={`font-body font-bold leading-[1.15] text-white mb-4 ${center ? "text-center" : ""}`}
            style={{ fontSize: "clamp(2rem,3.4vw,2.75rem)" }}
        >
            {pre}{" "}
            <span className="rolling-wrapper font-display italic text-green">
                {visible && (
                    <span
                        className="rolling-word"
                        key={roll}
                    >
                        {roll}
                    </span>
                )}
                {!visible && (
                    <span style={{ visibility: "hidden" }}>{roll}</span>
                )}
            </span>
            {post && (
                <>
                    <br />
                    {post}
                </>
            )}
        </h2>
    );
}

export function Label({ children }: { children: string }) {
    return (
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] text-green uppercase border border-green/25 rounded-full px-3.5 py-1 mb-5">
            {children}
        </span>
    );
}

export function TCard({
    children,
    className = "",
    style,
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    const r = useRef<HTMLDivElement>(null);
    const onMove = async (e: React.MouseEvent) => {
        const { gsap } = await import("gsap");
        const b = r.current?.getBoundingClientRect();
        if (!b) return;
        gsap.to(r.current, {
            rotateX: ((e.clientY - b.top) / b.height - 0.5) * -7,
            rotateY: ((e.clientX - b.left) / b.width - 0.5) * 8,
            scale: 1.02,
            duration: 0.3,
            ease: "power1.out",
            transformPerspective: 700,
        });
    };
    const onLeave = async () => {
        const { gsap } = await import("gsap");
        gsap.to(r.current, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
        });
    };
    return (
        <div
            ref={r}
            className={`stag ${className}`}
            style={style}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
        >
            {children}
        </div>
    );
}

/* ══════════════════════════════════════
   DRAG-INTERACTIVE CAROUSEL HOOK
══════════════════════════════════════ */
export function useDragCarousel(
    total: number,
    onSetIdx: (i: number) => void,
    currentIdx: number,
) {
    const trackRef = useRef<HTMLDivElement>(null);
    const dragState = useRef({
        dragging: false,
        startX: 0,
        startScroll: 0,
        cardW: 0,
    });

    const onPointerDown = (e: React.PointerEvent) => {
        if (!trackRef.current) return;
        dragState.current.dragging = true;
        dragState.current.startX = e.clientX;
        dragState.current.startScroll = currentIdx;
        dragState.current.cardW =
            trackRef.current.offsetWidth / Math.min(total, 3);
        trackRef.current.setPointerCapture(e.pointerId);
        trackRef.current.style.transition = "none";
        trackRef.current.style.cursor = "grabbing";
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!dragState.current.dragging || !trackRef.current) return;
        const dx = e.clientX - dragState.current.startX;
        const offset = currentIdx * (dragState.current.cardW + 20) - dx;
        trackRef.current.style.transform = `translateX(-${Math.max(0, offset)}px)`;
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (!dragState.current.dragging || !trackRef.current) return;
        dragState.current.dragging = false;
        trackRef.current.style.transition = "";
        trackRef.current.style.cursor = "grab";
        const dx = e.clientX - dragState.current.startX;
        if (Math.abs(dx) > 60) {
            const next =
                dx < 0
                    ? Math.min(currentIdx + 1, total - 1)
                    : Math.max(currentIdx - 1, 0);
            onSetIdx(next);
        } else {
            onSetIdx(currentIdx); // snap back
        }
    };

    return { trackRef, onPointerDown, onPointerMove, onPointerUp };
}

/* ══════════════════════════════════════
   CTA STRIP
══════════════════════════════════════ */
export function CtaStrip() {
    useFade(".cta2-fade");
    const go = (e: React.MouseEvent) => {
        e.preventDefault();
        document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section
            id="cta"
            className="py-[100px] bg-bg text-center relative overflow-hidden"
        >
            <div className="bg-bg pb-20">
                <div className="">
                    <p className="text-center text-[0.72rem] font-semibold tracking-[0.2em] text-gray uppercase mb-8">
                        Trusted by teams building with these platforms
                    </p>
                    <div className="overflow-hidden w-full">
  <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
    {TRUSTED.map((t, i) => (
      <div key={`a-${i}`} className="flex items-center gap-2.5 bg-bg3 border border-gray2 rounded-xl px-4 py-2.5 hover:border-white/20 transition-colors duration-200 group cursor-default flex-shrink-0">
        <Image src={t.symbol} alt="" />
        <span className="text-[0.78rem] font-semibold text-gray group-hover:text-white/80 transition-colors duration-200 whitespace-nowrap">
          {t.name}
        </span>
      </div>
    ))}
    {TRUSTED.map((t, i) => (
      <div key={`b-${i}`} className="flex items-center gap-2.5 bg-bg3 border border-gray2 rounded-xl px-4 py-2.5 hover:border-white/20 transition-colors duration-200 group cursor-default flex-shrink-0">
        <Image src={t.symbol} alt="" />
        <span className="text-[0.78rem] font-semibold text-gray group-hover:text-white/80 transition-colors duration-200 whitespace-nowrap">
          {t.name}
        </span>
      </div>
    ))}
  </div>
</div>
                </div>
            </div>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 75% 60% at 50% 50%,rgba(82,243,23,0.055) 0%,transparent 70%)",
                }}
            />
            <div className="container-site relative z-10 max-w-[680px] mx-auto">
                <Label>Ready to Launch?</Label>
                <SectionTitle
                    pre="Turn your vision into"
                    roll="a product that scales"
                    center
                />
                <p className="cta2-fade text-gray text-[1rem] leading-[1.75] mb-10 max-w-[460px] mx-auto">
                    Book a free 30-minute discovery call no strings attached.
                </p>
                <div className="cta2-fade flex gap-4 justify-center flex-wrap">
                    <a
                        href="#contact"
                        onClick={go}
                        className="bg-green text-[#050505] rounded-full px-8 py-3.5 text-[0.97rem] font-bold inline-flex items-center gap-2 no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(82,243,23,0.4)] transition-all duration-200 cursor-pointer"
                    >
                        Book Discovery Call
                        <svg
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a
                        href="mailto:hello@rafantolab.com"
                        className="border border-gray2 text-white/70 rounded-full px-7 py-3.5 text-[0.97rem] font-medium no-underline hover:border-green hover:text-white transition-all duration-200"
                    >
                        hello@rafantolab.com
                    </a>
                </div>
            </div>
        </section>
    );
}
