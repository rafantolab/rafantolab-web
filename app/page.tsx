import Navbar     from "@/components/shared/Navbar";
import Hero       from "@/components/HomePage/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import {
  CtaStrip,
} from "@/components/Sections";
import { Marquee } from "@/components/HomePage/Marquee";
import { TreeSection } from "@/components/HomePage/TreeSection";
import { Services } from "@/components/HomePage/Services";
import { Process } from "@/components/HomePage/Process";
import { Portfolio } from "@/components/HomePage/Portfolio";
import { Technologies } from "@/components/HomePage/Technologies";
import { Testimonials } from "@/components/HomePage/Testimonials";
import { Founders } from "@/components/HomePage/Founders";
import { Pricing } from "@/components/HomePage/Pricing";
import { Footer } from "@/components/shared/Footer";
import Contact from "@/components/HomePage/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TreeSection />
        <Services />
        <Process />
        {/* <Portfolio /> */}
        <Technologies />
        <Testimonials />
        <Founders />
        <Pricing />
        <Contact />
        <CtaStrip />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
