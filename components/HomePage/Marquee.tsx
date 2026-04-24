/* ══════════════════════════════════════
   MARQUEE
══════════════════════════════════════ */
const mItems = [
    "SaaS Product",
    "Landing Page",
    "Web Application",
    "CMS Development",
    "Mobile App",
    "Branding & Identity",
    "UI/UX Design",
    "Digital Marketing",
    "AI / ML",
    "Video Editing",
];
export function Marquee() {
    return (
        <div className="bg-bg3 font-display italic border-t border-b border-gray2 overflow-hidden py-[11px]">
            <div className="flex gap-10 animate-marquee w-max">
                {[...mItems, ...mItems, ...mItems].map((t, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2.5 text-[0.73rem] font-semibold tracking-[0.13em] text-white uppercase whitespace-nowrap"
                    >
                        <span className="text-green text-[0.85rem]">✦</span>
                        {t}
                    </div>
                ))}
            </div>
        </div>
    );
}