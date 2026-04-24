"use client";

import Image from "next/image";
import { Label, SectionTitle, TCard, useFade } from "../Sections";
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
    const topRow = [...TECHS, ...TECHS];
    const bottomRow = [...TECHS.slice().reverse(), ...TECHS.slice().reverse()];

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
                <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-bg2 via-bg2/85 to-transparent sm:w-28" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-bg2 via-bg2/85 to-transparent sm:w-28" />
                    <div className="space-y-6">
                        <div className="flex w-max gap-6 animate-marqueeL">
                            {topRow.map((t, index) => (
                                <TCard
                                    key={`${t.name}-top-${index}`}
                                    className="tech-card group flex h-[88px] w-[160px] flex-shrink-0 items-center justify-center rounded-[24px] border-0 bg-transparent p-0 cursor-default transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <Image
                                        src={t.symbol}
                                        alt={`${t.name} logo`}
                                        width={124}
                                        height={52}
                                        title={t.name}
                                        className="h-auto max-h-[52px] w-auto max-w-[124px] object-contain filter invert transition-all duration-300 group-hover:invert-0"
                                    />
                                </TCard>
                            ))}
                        </div>
                        <div className="flex w-max gap-6 animate-marqueeR">
                            {bottomRow.map((t, index) => (
                                <TCard
                                    key={`${t.name}-bottom-${index}`}
                                    className="tech-card group flex h-[88px] w-[160px] flex-shrink-0 items-center justify-center rounded-[24px] border-0 bg-transparent p-0 cursor-default transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <Image
                                        src={t.symbol}
                                        alt={`${t.name} logo`}
                                        width={124}
                                        height={52}
                                        title={t.name}
                                        className="h-auto max-h-[52px] w-auto max-w-[124px] object-contain filter invert transition-all duration-300 group-hover:invert-0"
                                    />
                                </TCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
