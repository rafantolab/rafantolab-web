"use client"

import { Label, SectionTitle, TCard, useFade, useStagger } from "../Sections";

const PLANS = [
    {
        name: "Starter",
        price: "$10,000",
        period: "Launch your MVP fast and start getting real users",
        featured: false,
        desc: "Best for startups launching their first scalable product",
        feats: [
            "Product design tailored to your brand",
            "Full product development (web or app)",
            "Weekly progress updates & demos",
            "Core feature development (MVP scope)",
            "Performance-optimized build",
            "Basic cloud setup & deployment",
            "Direct communication with team",
        ],
        cta: "Get Started",
    },
    {
        name: "Growth",
        price: "$25,000",
        period: "Scale confidently with a strong, conversion-driven product",
        featured: true,
        desc: "For teams ready to scale, improve, and move faster",
        feats: [
            "Faster development cycles & priority delivery",
            "Advanced UI/UX system (conversion-focused)",
            "Product strategy & feature planning",
            "Scalable backend architecture",
            "Automated testing & smooth deployments",
            "Dedicated product manager",
            "24/7 priority support",
        ],
        cta: "Build Your Product",
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "Build a market-leading product with a long-term tech partner",
        featured: false,
        desc: "For companies building large-scale or long-term platforms",
        feats: [
            "Fully dedicated cross-functional team",
            "Deep product & business collaboration",
            "Custom SLAs & performance guarantees",
            "Enterprise-grade infrastructure",
            "White-label ownership & full IP rights",
            "On-demand scaling of team & resourcess",
            "Strategic quarterly growth planning",
        ],
        cta: "Contact Sales",
    },
];
export function Pricing() {
    useFade(".price-fade");
    useStagger("#priceGrid");
    const go = (e: React.MouseEvent) => {
        e.preventDefault();
        document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section
            id="pricing"
            className="py-[100px] bg-bg"
        >
            <div className="container-site">
                <div className="text-center mb-12">
                    <Label>Pricing</Label>
                    <SectionTitle
                        pre="Transparent pricing for every"
                        roll="stage of growth"
                        center
                    />
                    <p className="price-fade text-gray text-[1rem] max-w-[520px] leading-[1.75] mx-auto mt-2">
                        No hidden fees. No surprises. Just clear, predictable
                        partnerships.
                    </p>
                </div>
                <div
                    id="priceGrid"
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1300px] mx-auto"
                >
                    {PLANS.map((p) => (
                        <TCard
                            key={p.name}
                            className={`relative rounded-2xl p-8 bg-bg3 transition-colors duration-200 ${p.featured ? "border border-green/40 shadow-[0_0_50px_rgba(82,243,23,0.07)]" : "border border-gray2"}`}
                            style={
                                p.featured
                                    ? {
                                          background:
                                              "linear-gradient(150deg,#111111,rgba(82,243,23,0.04))",
                                      }
                                    : undefined
                            }
                        >
                            {p.featured && (
                                <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-green text-[#050505] text-[0.7rem] font-bold tracking-[0.08em] px-3.5 py-[3px] rounded-full whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-[0.72rem] font-semibold tracking-[0.12em] text-green uppercase mb-2.5">
                                {p.name}
                            </div>
                            <div className="font-display text-[2.6rem] font-bold text-white leading-none mb-0.5">
                                {p.price === "Custom" ? (
                                    "Custom"
                                ) : (
                                    <>
                                        <sup className="text-[1.2rem] align-top mt-1.5">
                                            
                                        </sup>
                                        {p.price}
                                    </>
                                )}
                            </div>
                            <div className="text-[0.82rem] text-green mt-4 mb-4">
                                {p.period}
                            </div>
                            <p className="text-[0.85rem] text-gray leading-[1.6] mb-6">
                                {p.desc}
                            </p>
                            <ul className="mb-7 flex flex-col gap-2">
                                {p.feats.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-2 text-[0.84rem] text-white/65"
                                    >
                                        <span className="text-green font-bold text-[0.8rem] mt-[1px] flex-shrink-0">
                                            ✓
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                onClick={go}
                                className={`block text-center w-full py-3 rounded-full text-[0.9rem] font-bold no-underline cursor-pointer transition-all duration-200 ${p.featured ? "bg-green text-[#050505] hover:shadow-[0_6px_24px_rgba(82,243,23,0.35)]" : "bg-transparent text-white border border-gray2 hover:border-green hover:text-green"}`}
                            >
                                {p.cta}
                            </a>
                        </TCard>
                    ))}
                </div>
            </div>
        </section>
    );
}