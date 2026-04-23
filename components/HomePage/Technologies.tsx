"use client"

import { Label, SectionTitle, TCard, useFade, useStagger } from "../Sections";

const TECHS = [
    { name: "React", color: "#61DAFB", symbol: "⚛" },
    { name: "Next.js", color: "#ffffff", symbol: "▲" },
    { name: "TypeScript", color: "#3178C6", symbol: "TS" },
    { name: "Node.js", color: "#68A063", symbol: "⬡" },
    { name: "Python", color: "#F7C948", symbol: "🐍" },
    { name: "PostgreSQL", color: "#336791", symbol: "🐘" },
    { name: "MongoDB", color: "#47A248", symbol: "🍃" },
    { name: "Redis", color: "#DC382D", symbol: "⚡" },
    { name: "Docker", color: "#2496ED", symbol: "🐳" },
    { name: "AWS", color: "#FF9900", symbol: "☁" },
    { name: "GCP", color: "#4285F4", symbol: "G" },
    { name: "Vercel", color: "#ffffff", symbol: "▲" },
    { name: "Figma", color: "#F24E1E", symbol: "✦" },
    { name: "React Native", color: "#61DAFB", symbol: "📱" },
    { name: "Flutter", color: "#54C5F8", symbol: "F" },
    { name: "Tailwind", color: "#06B6D4", symbol: "~" },
    { name: "GraphQL", color: "#E10098", symbol: "◉" },
    { name: "Stripe", color: "#635BFF", symbol: "$" },
    { name: "OpenAI", color: "#52f317", symbol: "AI" },
    { name: "Framer", color: "#BB4B96", symbol: "F" },
];
export function Technologies() {
    useFade(".tech-fade");
    useStagger("#techGrid");
    return (
        <section
            id="technologies"
            className="py-[100px] bg-bg2"
        >
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
                    className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-3"
                >
                    {TECHS.map((t) => (
                        <TCard
                            key={t.name}
                            className="tech-card bg-bg3 border border-gray2 rounded-2xl p-3 flex flex-col items-center gap-1.5 cursor-default transition-all duration-200 group"
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[1.1rem]"
                                style={{
                                    background: `${t.color}18`,
                                    color: t.color,
                                    border: `1px solid ${t.color}30`,
                                }}
                            >
                                {t.symbol}
                            </div>
                            <span className="text-[0.65rem] text-gray font-medium text-center leading-tight group-hover:text-white transition-colors duration-200">
                                {t.name}
                            </span>
                        </TCard>
                    ))}
                </div>
            </div>
        </section>
    );
}