"use client";

import Image from "next/image";
import { Label, SectionTitle, TCard, useFade, useStagger } from "../Sections";
import technologies1 from "../../images/technologies/technologies (1).svg";
import technologies2 from "../../images/technologies/technologies (2).svg";
import technologies3 from "../../images/technologies/technologies (3).svg";
import technologies4 from "../../images/technologies/technologies (4).svg";
import technologies5 from "../../images/technologies/technologies (5).svg";
import technologies6 from "../../images/technologies/technologies (6).svg";
import technologies7 from "../../images/technologies/technologies (7).svg";
import technologies8 from "../../images/technologies/technologies (8).svg";
import technologies9 from "../../images/technologies/technologies (9).svg";
import technologies10 from "../../images/technologies/technologies (10).svg";
import technologies11 from "../../images/technologies/technologies (11).svg";
import technologies12 from "../../images/technologies/technologies (12).svg";
import technologies13 from "../../images/technologies/technologies (13).svg";
import technologies14 from "../../images/technologies/technologies (14).svg";
import technologies15 from "../../images/technologies/technologies (15).svg";
import technologies16 from "../../images/technologies/technologies (16).svg";
import technologies17 from "../../images/technologies/technologies (17).svg";
import technologies18 from "../../images/technologies/technologies (18).svg";
import technologies19 from "../../images/technologies/technologies (19).svg";
import technologies20 from "../../images/technologies/technologies (20).svg";

const TECHS = [
    { name: "React", color: "#61DAFB", symbol: technologies1 },
    { name: "Next.js", color: "#ffffff", symbol: technologies2 },
    { name: "TypeScript", color: "#3178C6", symbol: technologies3 },
    { name: "Node.js", color: "#68A063", symbol: technologies4 },
    { name: "Python", color: "#F7C948", symbol: technologies5 },
    { name: "PostgreSQL", color: "#336791", symbol: technologies6 },
    { name: "MongoDB", color: "#47A248", symbol: technologies7 },
    { name: "Redis", color: "#DC382D", symbol: technologies8 },
    { name: "Docker", color: "#2496ED", symbol: technologies9 },
    { name: "AWS", color: "#FF9900", symbol: technologies10 },
    { name: "GCP", color: "#4285F4", symbol: technologies11 },
    { name: "Vercel", color: "#ffffff", symbol: technologies12 },
    { name: "Figma", color: "#F24E1E", symbol: technologies13 },
    { name: "React Native", color: "#61DAFB", symbol: technologies14 },
    { name: "Flutter", color: "#54C5F8", symbol: technologies15 },
    { name: "Tailwind", color: "#06B6D4", symbol: technologies16 },
    { name: "GraphQL", color: "#E10098", symbol: technologies17 },
    { name: "Stripe", color: "#635BFF", symbol: technologies18 },
    { name: "OpenAI", color: "#52f317", symbol: technologies19 },
    { name: "Framer", color: "#BB4B96", symbol: technologies20 },
];
export function Technologies() {
    useFade(".tech-fade");
    useStagger("#techGrid");
    return (
        <section
            id="technologies"
            className="py-[100px] bg-bg2 relative overflow-hidden"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 45% at 50% 15%, rgba(82,243,23,0.06) 0%, transparent 70%)",
                }}
            />
            <div className="container-site">
                <div className="text-center mb-12">
                    <Label>Our Stack</Label>
                    <SectionTitle
                        pre="Technologies"
                        roll="we master"
                        center
                    />
                    <p className="tech-fade text-gray text-[1rem] max-w-[440px] leading-[1.75] mx-auto mt-2">
                        Best-in-class tools, frameworks, and platforms chosen
                        for speed, scale, and longevity.
                    </p>
                </div>
                <div
                    id="techGrid"
                    className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4"
                >
                    {TECHS.map((t) => (
                        <TCard
                            key={t.name}
                            className="tech-card group relative overflow-hidden rounded-[24px] border border-gray2 bg-[linear-gradient(180deg,#141414_0%,#101010_100%)] p-4 sm:p-5 cursor-default transition-all duration-300 hover:border-green/25 hover:-translate-y-1"
                        >
                            <div
                                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: `radial-gradient(circle at top right, ${t.color}20 0%, transparent 42%)`,
                                }}
                            />
                            <div className="relative z-10 flex items-start justify-between mb-4">
                                <span
                                    className="inline-flex h-2.5 w-2.5 rounded-full"
                                    style={{
                                        backgroundColor: t.color,
                                        boxShadow: `0 0 18px ${t.color}66`,
                                    }}
                                />
                                <span className="text-[0.65rem] uppercase tracking-[0.14em] text-gray">
                                    Stack
                                </span>
                            </div>
                            <div
                                className="relative z-10 rounded-[20px] h-[118px] flex items-center justify-center px-4 mb-4 overflow-hidden"
                                style={{
                                    background:
                                        "linear-gradient(145deg, rgba(230,239,233,0.96) 0%, rgba(210,223,217,0.95) 100%)",
                                    border: `1px solid ${t.color}30`,
                                    boxShadow:
                                        "inset 0 1px 0 rgba(255,255,255,0.72), inset 0 -10px 30px rgba(137,155,147,0.16)",
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-80"
                                    style={{
                                        background: `radial-gradient(circle at 20% 15%, rgba(255,255,255,0.8), transparent 35%), radial-gradient(circle at 80% 100%, ${t.color}14, transparent 28%)`,
                                    }}
                                />
                                <Image
                                    src={t.symbol}
                                    alt={`${t.name} logo`}
                                    width={116}
                                    height={48}
                                    className="relative z-10 max-w-[116px] max-h-[48px] w-auto h-auto object-contain"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white text-[0.95rem] font-semibold leading-tight">
                                    {t.name}
                                </h3>
                            </div>
                        </TCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
