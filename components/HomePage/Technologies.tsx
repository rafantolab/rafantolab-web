"use client";

import Image from "next/image";
import { Label, SectionTitle, TCard, useFade } from "../Sections";
import tech1 from "../../images/technologies/1.svg";
import tech2 from "../../images/technologies/2.svg";
import tech3 from "../../images/technologies/3.svg";
import tech4 from "../../images/technologies/4.svg";
import tech5 from "../../images/technologies/5.svg";
import tech6 from "../../images/technologies/6.svg";
import tech7 from "../../images/technologies/7.svg";
import tech8 from "../../images/technologies/8.svg";
import tech9 from "../../images/technologies/9.svg";
import tech10 from "../../images/technologies/10.svg";
import tech11 from "../../images/technologies/11.svg";
import tech12 from "../../images/technologies/12.svg";
import tech13 from "../../images/technologies/13.svg";
import tech14 from "../../images/technologies/14.svg";
import tech15 from "../../images/technologies/15.svg";
import tech16 from "../../images/technologies/16.svg";
import tech17 from "../../images/technologies/17.svg";
import tech18 from "../../images/technologies/18.svg";
import tech19 from "../../images/technologies/19.svg";
import tech20 from "../../images/technologies/20.svg";
import tech21 from "../../images/technologies/21.svg";
import tech22 from "../../images/technologies/22.svg";
import tech23 from "../../images/technologies/23.svg";
import tech24 from "../../images/technologies/24.svg";
import tech25 from "../../images/technologies/25.svg";
import tech26 from "../../images/technologies/26.svg";
import tech27 from "../../images/technologies/27.svg";
import tech28 from "../../images/technologies/28.svg";
import tech29 from "../../images/technologies/29.svg";
import tech30 from "../../images/technologies/30.svg";
import tech31 from "../../images/technologies/31.svg";
import tech32 from "../../images/technologies/32.svg";
import tech33 from "../../images/technologies/33.svg";
import tech34 from "../../images/technologies/34.svg";
import tech35 from "../../images/technologies/35.svg";
import tech36 from "../../images/technologies/36.svg";
import tech37 from "../../images/technologies/37.svg";
import tech38 from "../../images/technologies/38.svg";
import tech39 from "../../images/technologies/39.svg";
import tech40 from "../../images/technologies/40.svg";
import tech41 from "../../images/technologies/41.svg";
import tech42 from "../../images/technologies/42.svg";
import tech43 from "../../images/technologies/43.svg";
import tech44 from "../../images/technologies/44.svg";
import tech45 from "../../images/technologies/45.svg";
import tech46 from "../../images/technologies/46.svg";
import tech47 from "../../images/technologies/47.svg";
import tech48 from "../../images/technologies/48.svg";
import tech49 from "../../images/technologies/49.svg";
import tech50 from "../../images/technologies/50.svg";
import tech51 from "../../images/technologies/51.svg";
import tech52 from "../../images/technologies/52.svg";
import tech53 from "../../images/technologies/53.svg";
import tech54 from "../../images/technologies/54.svg";
import tech55 from "../../images/technologies/55.svg";
import tech56 from "../../images/technologies/56.svg";
import tech57 from "../../images/technologies/57.svg";
import tech58 from "../../images/technologies/58.svg";
import tech59 from "../../images/technologies/59.svg";
import tech60 from "../../images/technologies/60.svg";
import tech61 from "../../images/technologies/61.svg";
import tech62 from "../../images/technologies/62.svg";
import tech64 from "../../images/technologies/64.svg";
import tech65 from "../../images/technologies/65.svg";
import tech66 from "../../images/technologies/66.svg";
import tech67 from "../../images/technologies/67.svg";
import tech68 from "../../images/technologies/68.svg";
import tech69 from "../../images/technologies/69.svg";
import tech70 from "../../images/technologies/70.svg";

const TECHS = [
    { name: "", symbol: tech1 },
    { name: "", symbol: tech2 },
    { name: "", symbol: tech3 },
    { name: "", symbol: tech4 },
    { name: "", symbol: tech5 },
    { name: "", symbol: tech6 },
    { name: "", symbol: tech7 },
    { name: "", symbol: tech8 },
    { name: "", symbol: tech9 },
    { name: "", symbol: tech10 },
    { name: "", symbol: tech11 },
    { name: "", symbol: tech12 },
    { name: "", symbol: tech13 },
    { name: "", symbol: tech14 },
    { name: "", symbol: tech15 },
    { name: "", symbol: tech16 },
    { name: "", symbol: tech17 },
    { name: "", symbol: tech18 },
    { name: "", symbol: tech19 },
    { name: "", symbol: tech20 },
    { name: "", symbol: tech21 },
    { name: "", symbol: tech22 },
    { name: "", symbol: tech23 },
    { name: "", symbol: tech24 },
    { name: "", symbol: tech25 },
    { name: "", symbol: tech26 },
    { name: "", symbol: tech27 },
    { name: "", symbol: tech28 },
    { name: "", symbol: tech29 },
    { name: "", symbol: tech30 },
    { name: "", symbol: tech31 },
    { name: "", symbol: tech32 },
    { name: "", symbol: tech33 },
    { name: "", symbol: tech34 },
    { name: "", symbol: tech35 },
    { name: "", symbol: tech36 },
    { name: "", symbol: tech37 },
    { name: "", symbol: tech38 },
    { name: "", symbol: tech39 },
    { name: "", symbol: tech40 },
    { name: "", symbol: tech41 },
    { name: "", symbol: tech42 },
    { name: "", symbol: tech43 },
    { name: "", symbol: tech44 },
    { name: "", symbol: tech45 },
    { name: "", symbol: tech46 },
    { name: "", symbol: tech47 },
    { name: "", symbol: tech48 },
    { name: "", symbol: tech49 },
    { name: "", symbol: tech50 },
    { name: "", symbol: tech51 },
    { name: "", symbol: tech52 },
    { name: "", symbol: tech53 },
    { name: "", symbol: tech54 },
    { name: "", symbol: tech55 },
    { name: "", symbol: tech56 },
    { name: "", symbol: tech57 },
    { name: "", symbol: tech58 },
    { name: "", symbol: tech59 },
    { name: "", symbol: tech60 },
    { name: "", symbol: tech61 },
    { name: "", symbol: tech62 },
    { name: "", symbol: tech64 },
    { name: "", symbol: tech65 },
    { name: "", symbol: tech66 },
    { name: "", symbol: tech67 },
    { name: "", symbol: tech68 },
    { name: "", symbol: tech69 },
    { name: "", symbol: tech70 },
];
export function Technologies() {
    useFade(".tech-fade");

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
                <div className="">
                    <div className="flex flex-wrap gap-4 md:gap-10 justify-center">
                        {TECHS.map((t, index) => (
                            <TCard key={`tech-${index}`}>
                                <Image
                                    src={t.symbol}
                                    alt="logo"
                                />
                            </TCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
