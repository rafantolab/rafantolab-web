"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Label, SectionTitle, useFade } from '../Sections';
import { toast } from 'sonner';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);
    const okRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!done || !okRef.current) return;
        let active = true;

        (async () => {
            const { gsap } = await import("gsap");
            if (!active || !okRef.current) return;

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
        })();

        return () => {
            active = false;
        };
    }, [done]);

    const ch = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
        setErrs((er) => ({ ...er, [e.target.id]: false }));
    };
    const submit = async () => {
        if (isSubmitting) return;
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
            toast.error("Please fill in all required fields.");
            return;
        }
        setIsSubmitting(true);
        try {
            const payload = {
                name: form.fname,
                fullName: form.fname,
                email: form.femail,
                phone: form.fphone,
                service: form.fservice,
                budget: form.fpricing,
                pricing: form.fpricing,
                message: form.fmsg,
                fname: form.fname,
                femail: form.femail,
                fphone: form.fphone,
                fservice: form.fservice,
                fpricing: form.fpricing,
                fmsg: form.fmsg,
            };

            const res = await fetch(
                "https://rafantolab-backend.vercel.app/api/v1/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                },
            );

            if (!res.ok) {
                let message = "Failed to submit the form. Please try again.";
                try {
                    const data = await res.json();
                    if (typeof data?.message === "string") {
                        message = data.message;
                    }
                } catch {}
                throw new Error(message);
            }

            toast.success("Message submitted successfully.");

            const { gsap } = await import("gsap");
            gsap.to(formRef.current, {
                opacity: 0,
                y: -16,
                duration: 0.3,
                ease: "power2.in",
                onComplete() {
                    setDone(true);
                    setForm({
                        fname: "",
                        femail: "",
                        fphone: "",
                        fservice: "",
                        fpricing: "",
                        fmsg: "",
                    });
                },
            });
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Failed to submit the form. Please try again.";
            toast.error(message);
        } finally {
            setIsSubmitting(false);
        }
    };
    const ic = (id: string) =>
        `w-full bg-bg2 border rounded-[10px] px-4 py-3 font-body text-[0.93rem] text-white outline-none transition-all duration-200 placeholder:text-gray/50 focus:border-green focus:shadow-[0_0_0_3px_rgba(82,243,23,0.1)] ${errs[id] ? "border-red-500" : "border-gray2"}`;
    return (
        <section
            id="contact"
            className="md:py-[100px] relative overflow-hidden"
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
                    <div className="ctc-fade mt-8 bg-green/5 border border-green/20 rounded-xl p-4 flex items-center gap-3">
                        <span className="text-[1.5rem]">🌳</span>
                        <div>
                            <p className="text-green font-semibold text-[0.85rem] mb-1">
                                Your confirmation plants 10 trees
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
                                            "Starter - $10,000/mo",
                                            "Growth - $25,000/mo",
                                            "Enterprise - Custom",
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
                                </p>
                                <button
                                    onClick={submit}
                                    disabled={isSubmitting}
                                    className="bg-green text-[#050505] rounded-full px-8 py-3.5 text-[0.95rem] font-bold flex items-center gap-2 border-0 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(82,243,23,0.35)] transition-all duration-200"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting ? (
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
                                    ) : null}
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
export default Contact;
