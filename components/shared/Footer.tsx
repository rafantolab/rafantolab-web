"use client";
import Image from "next/image";
import logo2 from "../../public/logo2.svg";

const topColumns = [
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Work", href: "#" },
            { label: "Careers", href: "#", badge: "Hiring" },
            { label: "Contact", href: "#" },
            { label: "Blog", href: "#" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "SaaS Product", href: "#" },
            { label: "Landing Page", href: "#" },
            { label: "Web Application", href: "#" },
            { label: "Mobile App", href: "#" },
            { label: "AI / ML", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Case Studies", href: "#" },
            { label: "Process", href: "#process" },
            { label: "Technologies", href: "#technologies" },
            { label: "Pricing", href: "#pricing" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
];

const bottomColumns = [
    {
        title: "Popular Services",
        links: [
            "Product Strategy",
            "UX/UI Design",
            "Frontend Development",
            "Backend Systems",
            "AI Integrations",
            "Growth Landing Pages",
        ],
    },
    {
        title: "Trending Builds",
        links: [
            "B2B SaaS Platforms",
            "Internal Dashboards",
            "AI Assistants",
            "Marketplace MVPs",
            "Fintech Experiences",
            "Custom Automations",
        ],
    },
    {
        title: "Top Categories",
        links: [
            "Communication",
            "Development",
            "AI",
            "Data & Storage",
            "Marketing",
            "Commerce",
        ],
    },
    {
        title: "Featured Pages",
        links: [
            "Home",
            "Services",
            "Testimonials",
            "Founders",
            "Contact",
            "Footer CTA",
        ],
    },
];

const socials = [
    { label: "X", href: "#" },
    { label: "in", href: "#" },
    { label: "gh", href: "#" },
    { label: "be", href: "#" },
];

export function Footer() {
    return (
        <footer
              className="relative overflow-hidden pt-20 pb-8 sm:pt-24 "
        >
            <div className="pointer-events-none absolute inset-0">
  {/* Base smooth vertical blend */}
  <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a070c_0%,#0a070c_40%,rgba(82,243,23,0.08)_75%,rgba(82,243,23,0.18)_100%)]" />
  
  {/* Soft green glow from bottom */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(82,243,23,0.18),transparent_65%)]" />
</div>
            <div className="container-site relative z-10">
                <div
                    className="rounded-[30px] border border-white/10 
bg-[linear-gradient(180deg,
  rgba(20,30,15,0.7)_0%,
  rgba(15,25,12,0.82)_40%,
  rgba(10,15,10,0.92)_75%,
  rgba(8,10,8,0.96)_100%
)]
backdrop-blur-xl
px-12 py-9 shadow-lg shadow-[#102c06]"
                >
                    <div
                        className="absolute inset-0 rounded-[30px] pointer-events-none 
bg-[radial-gradient(circle_at_top,rgba(82,243,23,0.08),transparent_60%)]"
                    />
                    <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
                        <div>
                            <button
                                type="button"
                                className="mb-5 flex items-center gap-2.5 bg-transparent p-0 text-left"
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                {/* <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 512 512"
                                    fill="none"
                                >
                                    <defs>
                                        <linearGradient
                                            id="footerLogoGrad"
                                            x1="0"
                                            y1="512"
                                            x2="512"
                                            y2="0"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#198405"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#52f317"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill="url(#footerLogoGrad)"
                                        d="M256,102.1c84.9,0,154,69.11,154,154s-69.11,154-154,154-154-69.11-154-154,69.11-154,154-154M256,0C114.57,0,0,114.68,0,256s114.68,256,256,256,256-114.68,256-256S397.32,0,256,0h0Z"
                                    />
                                </svg>
                                <span className="text-[1.15rem] font-bold text-white">
                                    Rafanto
                                    <span className="text-green">lab</span>
                                </span> */}
                                <Image src={logo2} width={350} alt="RafantoLab Logo"/>
                            </button>

                            {/* <p className="mt-3 max-w-[320px] text-[0.92rem] leading-[1.75] text-white/62">
                                Strategy, design, and engineering for ambitious
                                teams shipping standout web products.
                            </p> */}

                            <div className="mt-7 flex flex-wrap gap-3">
                                {socials.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[0.82rem] font-semibold uppercase text-white/75 no-underline transition-all duration-200 hover:border-green hover:bg-white/10 hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {topColumns.map((column) => (
                                <div key={column.title}>
                                    <h4 className="mb-5 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-white/52">
                                        {column.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {column.links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="inline-flex items-center gap-2 text-[1rem] text-white/84 no-underline transition-colors duration-200 hover:text-white"
                                                >
                                                    <span>{link.label}</span>
                                                    {link.badge ? (
                                                        <span className="rounded-full bg-white/16 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/92">
                                                            {link.badge}
                                                        </span>
                                                    ) : null}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-8">
                        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                            {bottomColumns.map((column) => (
                                <div key={column.title}>
                                    <h5 className="mb-4 text-[1.02rem] font-semibold text-white">
                                        {column.title}
                                    </h5>
                                    <ul className="space-y-2.5">
                                        {column.links.map((link) => (
                                            <li key={link}>
                                                <a
                                                    href="#"
                                                    className="text-[0.95rem] leading-[1.55] text-white/55 no-underline transition-colors duration-200 hover:text-white/82"
                                                >
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-5 text-[0.82rem] text-white/46 sm:flex sm:items-center sm:justify-between">
                        <p>© 2026 Rafantolab. All rights reserved.</p>
                        <p className="mt-2 sm:mt-0">
                            Intelligence Behind Innovation
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
