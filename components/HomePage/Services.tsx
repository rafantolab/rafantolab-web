"use client";

import { Label, SectionTitle, TCard, useFade, useStagger } from "../Sections";
import { HugeiconsIcon } from "@hugeicons/react";
import { CloudIcon, Target02Icon, AiBrowserIcon, CellsIcon, SmartPhone02Icon, BadgeIcon, Cursor02Icon, ChartAnalysisIcon, NeuralNetworkIcon, AiVideoIcon } from "@hugeicons/core-free-icons";

const SERVICES = [
  {
    icon: <HugeiconsIcon icon={CloudIcon} />,
    title: "SaaS Product",
    desc: "End-to-end SaaS platforms with multi-tenancy, billing pipelines, and real-time features built for scale.",
  },
  {
    icon: <HugeiconsIcon icon={Target02Icon} />,
    title: "Custom Landing Page",
    desc: "High-converting landing pages with pixel-perfect design, CRO best practices, and blazing performance.",
  },
  {
    icon: <HugeiconsIcon icon={AiBrowserIcon} />,
    title: "Web Application",
    desc: "Complex, high-performance web apps with Next.js, TypeScript, and modern architecture.",
  },
  {
    icon: <HugeiconsIcon icon={CellsIcon} />,
    title: "CMS Development",
    desc: "Headless CMS integrations with Sanity, Contentful, or custom solutions for total content control.",
  },
  {
    icon: <HugeiconsIcon icon={SmartPhone02Icon} />,
    title: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps with React Native or Flutter that feel truly native.",
  },
  {
    icon: <HugeiconsIcon icon={BadgeIcon} />,
    title: "Branding & Identity",
    desc: "Brand strategy, logo design, visual systems, and guidelines that make you unmistakable.",
  },
  {
    icon: <HugeiconsIcon icon={Cursor02Icon} />,
    title: "UI/UX Design",
    desc: "Research-backed interfaces that delight users and drive conversions from wireframe to launch.",
  },
  {
    icon: <HugeiconsIcon icon={ChartAnalysisIcon} />,
    title: "Digital Marketing",
    desc: "SEO, paid media, email, and growth campaigns designed to acquire and retain your ideal customers.",
  },
  {
    icon: <HugeiconsIcon icon={NeuralNetworkIcon} />,
    title: "AI / ML Integration",
    desc: "Custom LLM pipelines, recommendation engines, and AI features embedded seamlessly into your product.",
  },
  {
    icon: <HugeiconsIcon icon={AiVideoIcon} />,
    title: "Video Editing",
    desc: "Product demos, brand films, social reels, and motion graphics that tell your story compellingly.",
  },
];

export function Services() {
  useFade(".svc-fade");
  useStagger("#svcGrid");
  return (
    <section id="services" className="md:py-[100px] bg-bg">
      <div className="container-site">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-5">
          <div>
            <Label>What We Do</Label>
            <SectionTitle
              pre="Everything your"
              roll="product needs"
              post="to grow & scale"
            />
          </div>
          <p className="svc-fade text-gray text-[1rem] max-w-[400px] leading-[1.75]">
            From first concept to live product we handle every layer so you can
            focus on growth.
          </p>
        </div>
        <div
          id="svcGrid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {SERVICES.map((s) => (
            <TCard
              key={s.title}
              className="svc-card bg-bg3 border border-gray2 rounded-2xl p-6 relative overflow-hidden cursor-default transition-colors duration-200 hover:border-green/30"
            >
              <div className="w-11 h-11 rounded-xl bg-green/10 border border-green/15 flex items-center justify-center mb-4 text-[1.25rem] relative z-10">
                {s.icon}
              </div>
              <h3 className="font-bold text-[0.97rem] text-white mb-2 relative z-10 leading-snug">
                {s.title}
              </h3>
              <p className="text-gray text-[0.82rem] leading-[1.65] relative z-10">
                {s.desc}
              </p>
            </TCard>
          ))}
        </div>
      </div>
    </section>
  );
}
