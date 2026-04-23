"use client";
import { useEffect, useRef, useState } from "react";

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
    { name: "Stripe", symbol: "$", color: "#635BFF" },
    { name: "Vercel", symbol: "▲", color: "#ffffff" },
    { name: "Linear", symbol: "L", color: "#5E6AD2" },
    { name: "Notion", symbol: "N", color: "#ffffff" },
    { name: "Figma", symbol: "✦", color: "#F24E1E" },
    { name: "Shopify", symbol: "S", color: "#96BF48" },
    { name: "Framer", symbol: "F", color: "#BB4B96" },
    { name: "Intercom", symbol: "i", color: "#2C6ECB" },
    { name: "Webflow", symbol: "W", color: "#4353FF" },
    { name: "Supabase", symbol: "⚡", color: "#3ECF8E" },
    { name: "Intercom", symbol: "i", color: "#2C6ECB" },
    { name: "Supabase", symbol: "⚡", color: "#3ECF8E" },
    { name: "PlanetScale", symbol: "P", color: "#F87171" },
    { name: "Loom", symbol: "●", color: "#625DF5" },
    { name: "Framer", symbol: "F", color: "#BB4B96" },
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
   CONTACT
══════════════════════════════════════ */
export function Contact() {
    useFade(".ctc-fade");
    const [form, setForm] = useState({
        fname: "",
        femail: "",
        fphone: "",
        fservice: "",
        fpricing: "",
        fmsg: "",
    });
    const [errs, setErrs] = useState<Record<string, boolean>>({});
    const [done, setDone] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);
    const okRef = useRef<HTMLDivElement>(null);
    const ch = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
        setErrs((er) => ({ ...er, [e.target.id]: false }));
    };
    const submit = async () => {
        const req = [
            "fname",
            "femail",
            "fservice",
            "fpricing",
            "fmsg",
        ] as const;
        const ne: Record<string, boolean> = {};
        req.forEach((k) => {
            if (!form[k]) ne[k] = true;
        });
        if (Object.keys(ne).length) {
            setErrs(ne);
            return;
        }
        const { gsap } = await import("gsap");
        gsap.to(formRef.current, {
            opacity: 0,
            y: -16,
            duration: 0.3,
            ease: "power2.in",
            onComplete() {
                setDone(true);
                if (okRef.current)
                    gsap.fromTo(
                        okRef.current,
                        { opacity: 0, scale: 0.88 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.5,
                            ease: "back.out(1.4)",
                        },
                    );
            },
        });
    };
    const ic = (id: string) =>
        `w-full bg-bg2 border rounded-[10px] px-4 py-3 font-body text-[0.93rem] text-white outline-none transition-all duration-200 placeholder:text-gray/50 focus:border-green focus:shadow-[0_0_0_3px_rgba(82,243,23,0.1)] ${errs[id] ? "border-red-500" : "border-gray2"}`;
    return (
        <section
            id="contact"
            className="py-[100px] bg-bg2 relative overflow-hidden"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 50% 50%,rgba(82,243,23,0.04) 0%,transparent 70%)",
                }}
            />
            <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-16 items-start">
                <div>
                    <Label>Get In Touch</Label>
                    <SectionTitle
                        pre="Let's build your"
                        roll="next big thing"
                    />
                    <p className="ctc-fade text-gray text-[1rem] leading-[1.78] mb-8">
                        Tell us about your project. We respond within 24 hours
                        for a free discovery call.
                    </p>
                    <div className="ctc-fade flex flex-col gap-3.5">
                        {[
                            { i: "✉", t: "hello@rafantolab.com" },
                            { i: "📞", t: "+1 (555) 000-0000" },
                            { i: "📍", t: "Remote-first · Global Delivery" },
                            { i: "⏰", t: "Response within 24 hours" },
                        ].map(({ i, t }) => (
                            <div
                                key={t}
                                className="flex items-center gap-3 text-[0.9rem] text-white/65"
                            >
                                <div className="w-9 h-9 rounded-[9px] bg-green/10 border border-green/15 flex items-center justify-center text-[1rem] flex-shrink-0">
                                    {i}
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>
                    <div className="ctc-fade mt-8 bg-green/5 border border-green/20 rounded-xl p-4 flex items-start gap-3">
                        <span className="text-[1.5rem]">🌳</span>
                        <div>
                            <p className="text-green font-semibold text-[0.85rem] mb-1">
                                Your confirmation plants a tree
                            </p>
                            <p className="text-gray text-[0.8rem] leading-[1.5]">
                                When you confirm your project with us,
                                Rafantolab plants 1 tree on your behalf. 450
                                trees planted so far.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ctc-fade bg-bg3 border border-gray2 rounded-[18px] p-9">
                    {!done ? (
                        <div ref={formRef}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="fname"
                                        className="text-[0.72rem] font-semibold tracking-[0.08em] text-gray uppercase"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        id="fname"
                                        type="text"
                                        placeholder="Jane Smith"
                                        value={form.fname}
                                        onChange={ch}
                                        className={ic("fname")}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="femail"
                                        className="text-[0.72rem] font-semibold tracking-[0.08em] text-gray uppercase"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        id="femail"
                                        type="email"
                                        placeholder="jane@company.com"
                                        value={form.femail}
                                        onChange={ch}
                                        className={ic("femail")}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 mb-4">
                                <label
                                    htmlFor="fphone"
                                    className="text-[0.72rem] font-semibold tracking-[0.08em] text-gray uppercase"
                                >
                                    Phone / WhatsApp
                                </label>
                                <input
                                    id="fphone"
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    value={form.fphone}
                                    onChange={ch}
                                    className={ic("fphone")}
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="fservice"
                                        className="text-[0.72rem] font-semibold tracking-[0.08em] text-gray uppercase"
                                    >
                                        Service *
                                    </label>
                                    <select
                                        id="fservice"
                                        value={form.fservice}
                                        onChange={ch}
                                        className={`${ic("fservice")} sel-arrow`}
                                    >
                                        <option
                                            value=""
                                            disabled
                                        >
                                            Select a service…
                                        </option>
                                        {[
                                            "SaaS Product",
                                            "Custom Landing Page",
                                            "Web Application",
                                            "CMS Development",
                                            "Mobile App Development",
                                            "Branding & Identity",
                                            "UI/UX Design",
                                            "Digital Marketing",
                                            "AI / ML Integration",
                                            "Video Editing",
                                            "Other",
                                        ].map((o) => (
                                            <option key={o}>{o}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="fpricing"
                                        className="text-[0.72rem] font-semibold tracking-[0.08em] text-gray uppercase"
                                    >
                                        Budget / Plan *
                                    </label>
                                    <select
                                        id="fpricing"
                                        value={form.fpricing}
                                        onChange={ch}
                                        className={`${ic("fpricing")} sel-arrow`}
                                    >
                                        <option
                                            value=""
                                            disabled
                                        >
                                            Select a plan…
                                        </option>
                                        {[
                                            "Starter — $4,800/mo",
                                            "Growth — $9,500/mo",
                                            "Enterprise — Custom",
                                            "One-time Project",
                                            "Not Sure Yet",
                                        ].map((o) => (
                                            <option key={o}>{o}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 mb-6">
                                <label
                                    htmlFor="fmsg"
                                    className="text-[0.72rem] font-semibold tracking-[0.08em] text-gray uppercase"
                                >
                                    Project Details *
                                </label>
                                <textarea
                                    id="fmsg"
                                    rows={4}
                                    placeholder="Describe your idea, goals, and timeline…"
                                    value={form.fmsg}
                                    onChange={ch}
                                    className={`${ic("fmsg")} resize-y min-h-[120px] leading-[1.65]`}
                                />
                            </div>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <p className="text-[0.75rem] text-gray leading-[1.5]">
                                    🔒 Secure & confidential.
                                    <br />
                                    No spam, ever.
                                </p>
                                <button
                                    onClick={submit}
                                    className="bg-green text-[#050505] rounded-full px-8 py-3.5 text-[0.95rem] font-bold flex items-center gap-2 border-0 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(82,243,23,0.35)] transition-all duration-200"
                                >
                                    Send Message
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
                            </div>
                        </div>
                    ) : (
                        <div
                            ref={okRef}
                            className="text-center py-12"
                        >
                            <div className="text-[3.2rem] mb-3">🚀</div>
                            <h3 className="text-white text-[1.3rem] font-bold mb-2">
                                Message Sent!
                            </h3>
                            <p className="text-gray text-[0.92rem]">
                                We&apos;ll get back to you within 24 hours.
                            </p>
                            <p className="text-green text-[0.85rem] mt-3">
                                🌳 Your tree will be planted when we confirm
                                your project!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
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
                    <div className="space-y-3 overflow-hidden">
                        <div className="flex gap-3 animate-marqueeL w-max">
                            {[...TRUSTED, ...TRUSTED].map((t, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2.5 bg-bg3 border border-gray2 rounded-xl px-4 py-2.5 flex-shrink-0 hover:border-white/20 transition-colors duration-200 group cursor-default"
                                >
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[0.85rem]"
                                        style={{
                                            background: `${t.color}18`,
                                            color: t.color,
                                            border: `1px solid ${t.color}25`,
                                        }}
                                    >
                                        {t.symbol}
                                    </div>
                                    <span className="text-[0.78rem] font-semibold text-gray group-hover:text-white/80 transition-colors duration-200 whitespace-nowrap">
                                        {t.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 animate-marqueeR w-max">
                            {[
                                ...TRUSTED.slice().reverse(),
                                ...TRUSTED.slice().reverse(),
                            ].map((t, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2.5 bg-bg3 border border-gray2 rounded-xl px-4 py-2.5 flex-shrink-0 hover:border-white/20 transition-colors duration-200 group cursor-default"
                                >
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[0.85rem]"
                                        style={{
                                            background: `${t.color}18`,
                                            color: t.color,
                                            border: `1px solid ${t.color}25`,
                                        }}
                                    >
                                        {t.symbol}
                                    </div>
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
