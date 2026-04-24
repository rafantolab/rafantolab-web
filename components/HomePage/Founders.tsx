"use client"

import Image, { StaticImageData } from "next/image";
import { Label, SectionTitle, useStagger } from "../Sections";
import coo from "../../images/COO.png";
import ceo from "../../images/CEO.png";
import cto from "../../images/CTO.png";
import cfo from "../../images/CFO.png";

// Deterministic SVG avatar using initials + unique abstract pattern
function FounderPhoto({
    name,
    initials,
    hue,
}: {
    name: string;
    initials: string | any;
    hue: number;
}) {
    const id = initials.toLowerCase();
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 280 320"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id={`bg-${id}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor={`hsl(${hue},60%,8%)`}
                    />
                    <stop
                        offset="100%"
                        stopColor={`hsl(${hue},50%,14%)`}
                    />
                </linearGradient>
                <radialGradient
                    id={`glow-${id}`}
                    cx="50%"
                    cy="40%"
                    r="55%"
                >
                    <stop
                        offset="0%"
                        stopColor={`hsl(${hue},80%,55%)`}
                        stopOpacity="0.18"
                    />
                    <stop
                        offset="100%"
                        stopColor="transparent"
                    />
                </radialGradient>
                <clipPath id={`clip-${id}`}>
                    <rect
                        width="280"
                        height="320"
                    />
                </clipPath>
            </defs>
            <g clipPath={`url(#clip-${id})`}>
                <rect
                    width="280"
                    height="320"
                    fill={`url(#bg-${id})`}
                />
                <rect
                    width="280"
                    height="320"
                    fill={`url(#glow-${id})`}
                />
                {/* Grid lines */}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <line
                        key={`h${i}`}
                        x1="0"
                        y1={i * 55}
                        x2="280"
                        y2={i * 55}
                        stroke={`hsl(${hue},60%,55%)`}
                        strokeOpacity="0.05"
                        strokeWidth="1"
                    />
                ))}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line
                        key={`v${i}`}
                        x1={i * 60}
                        y1="0"
                        x2={i * 60}
                        y2="320"
                        stroke={`hsl(${hue},60%,55%)`}
                        strokeOpacity="0.05"
                        strokeWidth="1"
                    />
                ))}
                {/* Abstract shape */}
                <circle
                    cx="140"
                    cy="130"
                    r="72"
                    fill={`hsl(${hue},55%,55%)`}
                    fillOpacity="0.09"
                    stroke={`hsl(${hue},70%,60%)`}
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                />
                <circle
                    cx="140"
                    cy="130"
                    r="46"
                    fill={`hsl(${hue},55%,55%)`}
                    fillOpacity="0.12"
                />
                {/* Shoulders */}
                <ellipse
                    cx="140"
                    cy="300"
                    rx="90"
                    ry="60"
                    fill={`hsl(${hue},50%,18%)`}
                    fillOpacity="0.7"
                />
                {/* Head */}
                <circle
                    cx="140"
                    cy="128"
                    r="44"
                    fill={`hsl(${hue},40%,24%)`}
                />
                {/* Initials */}
                <text
                    x="140"
                    y="144"
                    textAnchor="middle"
                    fontFamily="Georgia,serif"
                    fontSize="34"
                    fontWeight="700"
                    fill={`hsl(${hue},80%,72%)`}
                    letterSpacing="2"
                >
                    {initials}
                </text>
                {/* Accent ring */}
                <circle
                    cx="140"
                    cy="128"
                    r="50"
                    fill="none"
                    stroke={`hsl(${hue},80%,60%)`}
                    strokeOpacity="0.25"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                />
            </g>
        </svg>
    );
}

const FOUNDERS = [
    {
        name: "Rafiul Islam Refat",
        role: "CEO & Co-Founder",
        initials: "RIR",
        hue: 130,
        image: ceo as StaticImageData,
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Nahiduzzaman Raz",
        role: "COO & Co-Founder",
        initials: "NR",
        hue: 130,
        image: coo as StaticImageData,
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Abdullah Al Galib",
        role: "CTO & Co-Founder",
        initials: "AAG",
        hue: 130,
        image: cto as StaticImageData,
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Shahidul Islam Shanto",
        role: "CFO & Co-Founder",
        initials: "SIS",
        hue: 130,
        image: cfo as StaticImageData,
        linkedin: "https://linkedin.com/in/",
    },
];

export function Founders() {
    useStagger("#foundGrid");
    return (
        <section
            id="founders"
            className="py-[100px] bg-bg2"
        >
            <div className="container-site">
                <div className="text-center mb-14">
                    <Label>The Team</Label>
                    <SectionTitle
                        pre="Built by"
                        roll="passionate founders"
                        center
                    />
                    <p className="text-gray text-[1rem] max-w-[480px] leading-[1.75] mx-auto mt-2">
                        Four minds united by a single mission to build the
                        world's best digital products.
                    </p>
                </div>

                <div
                    id="foundGrid"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {FOUNDERS.map((f) => (
                        <div
                            key={f.name}
                            className="stag group relative bg-bg3 border border-gray2 rounded-2xl overflow-hidden hover:border-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                        >
                            {/* Photo area */}
                            <div className="w-full h-[440px] overflow-hidden relative">
                                {f.image ? (
                                    <Image
                                        src={f.image}
                                        alt={f.name}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                    />
                                ) : (
                                    <FounderPhoto
                                        name={f.name}
                                        initials={f.initials}
                                        hue={f.hue}
                                    />
                                )}
                                {/* Bottom gradient fade */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(to bottom,transparent,#111111)",
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <div className="px-6 pb-6 pt-3">
                                <h3 className="font-bold text-white text-[1.05rem] mb-0.5 font-body">
                                    {f.name}
                                </h3>
                                <p
                                    className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-5"
                                    style={{ color: `hsl(${f.hue},70%,62%)` }}
                                >
                                    {f.role}
                                </p>

                                {/* LinkedIn CTA */}
                                <a
                                    href={f.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.78rem] font-semibold no-underline cursor-pointer border transition-all duration-200 w-full justify-center"
                                    style={{
                                        background: `hsl(${f.hue},60%,55%)15`,
                                        borderColor: `hsl(${f.hue},60%,55%)40`,
                                        color: `hsl(${f.hue},80%,72%)`,
                                    }}
                                    onMouseEnter={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.background =
                                            `hsl(${f.hue},60%,55%)30`;
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.borderColor =
                                            `hsl(${f.hue},70%,60%)80`;
                                    }}
                                    onMouseLeave={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.background =
                                            `hsl(${f.hue},60%,55%)15`;
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.borderColor =
                                            `hsl(${f.hue},60%,55%)40`;
                                    }}
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                        />
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
