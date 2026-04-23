"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from '../../public/logo.svg'

const navLinks = [
  { label: "Services", href: "#services"     },
  { label: "Work",     href: "#portfolio"    },
  // { label: "Tech",     href: "#technologies" },
  { label: "Pricing",  href: "#pricing"      },
  { label: "Team",     href: "#founders"     },
  { label: "Contact",  href: "#contact"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoRef  = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      ctx = gsap.context(() => {
        gsap.timeline({ delay: 0.2 })
          .fromTo(logoRef.current,  { opacity:0, x:-16 }, { opacity:1, x:0, duration:.5, ease:"power2.out" }, 0)
          .fromTo(linksRef.current?.querySelectorAll("li")??[], { opacity:0, y:-10 }, { opacity:1, y:0, stagger:.07, duration:.4, ease:"power2.out" }, .15)
          .fromTo(ctaRef.current,   { opacity:0, x:16  }, { opacity:1, x:0, duration:.4, ease:"power2.out" }, .15);
      });
    })();
    return () => ctx?.revert();
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <>
      <nav className={`fixed z-[500] left-0 right-0 flex justify-center transition-all duration-500 ${scrolled ? "top-4" : "top-0"}`}>
        <div className={`flex items-center justify-between w-full transition-all duration-500 ${
          scrolled
            ? "container-site px-6 h-16 rounded-full border-white/5 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
            : "container-site px-2 h-[80px] bg-transparent"
        }`}>

          <div ref={logoRef} style={{ opacity:0 }} className="flex items-center gap-2.5 cursor-pointer select-none" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
            <Image 
            src={logo}
            width={180}
            alt="RafantoLab Logo"
            />
          </div>

          <ul ref={linksRef} className="hidden md:flex items-center gap-6 list-none">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <button onClick={() => go(href)} className={`nav-link-hover uppercase font-medium tracking-wide bg-transparent border-0 cursor-pointer transition-colors duration-200 hover:text-white ${scrolled ? "text-md text-white" : "text-md text-gray"}`}>
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a ref={ctaRef} href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }} style={{ opacity:0 }}
              className={`hidden md:inline-flex items-center gap-1.5 font-bold rounded-full cursor-pointer no-underline bg-green text-[#050505] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(82,243,23,0.45)] ${scrolled ? "text-[0.78rem] px-4 py-1.5" : "text-[0.85rem] px-5 py-2"}`}>
              Get Started
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-1.5 border-0 bg-transparent cursor-pointer" aria-label="Menu">
              <span className={`block w-5 h-[1.5px] bg-white rounded transition-all duration-300 mb-[5px] ${mobileOpen?"rotate-45 translate-y-[6.5px]":""}`}/>
              <span className={`block w-5 h-[1.5px] bg-white rounded transition-all duration-300 mb-[5px] ${mobileOpen?"opacity-0":""}`}/>
              <span className={`block w-5 h-[1.5px] bg-white rounded transition-all duration-300 ${mobileOpen?"-rotate-45 -translate-y-[6.5px]":""}`}/>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[490] md:hidden transition-all duration-300 ${mobileOpen?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={()=>setMobileOpen(false)}/>
        <div className={`absolute top-0 right-0 h-full w-72 bg-white/5 backdrop-blur-2xl border-l border-white/10 flex flex-col pt-20 px-7 gap-1 transition-transform duration-300 ${mobileOpen?"translate-x-0":"translate-x-full"}`}>
          {navLinks.map(({label, href})=>(
            <button key={label} onClick={()=>go(href)} className="text-left text-[1rem] font-semibold text-white/80 py-3.5 border-b border-white/10 bg-transparent border-l-0 border-r-0 border-t-0 cursor-pointer hover:text-green transition-colors duration-200">{label}</button>
          ))}
          <button onClick={()=>go("#contact")} className="mt-7 bg-green text-[#050505] rounded-full px-5 py-3 text-center text-[0.95rem] font-bold border-0 cursor-pointer hover:shadow-[0_0_20px_rgba(82,243,23,0.4)] transition-all">Get Started</button>
        </div>
      </div>
    </>
  );
}
