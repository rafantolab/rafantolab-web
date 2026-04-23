import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#050505",
        bg2:      "#0a0a0a",
        bg3:      "#111111",
        bg4:      "#181818",
        green:    "#52f317",
        green2:   "#6fff2e",
        gray:     "#888888",
        gray2:    "#222222",
        gray3:    "#333333",
        offwhite: "#f5f5f5",
      },
      fontFamily: {
        body:    ["var(--font-redhat)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        badgePulse: {
          "0%,100%": { opacity: "1",  transform: "scale(1)" },
          "50%":     { opacity: ".5", transform: "scale(.8)" },
        },
        marqueeL: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        marqueeR: {
          from: { transform: "translateX(-50%)" },
          to:   { transform: "translateX(0)" },
        },
        spinSlow:  { from:{ transform:"rotate(0deg)"   }, to:{ transform:"rotate(360deg)"  } },
        spinSlowR: { from:{ transform:"rotate(0deg)"   }, to:{ transform:"rotate(-360deg)" } },
        floatY:    { "0%,100%":{ transform:"translateY(0px)"  }, "50%":{ transform:"translateY(-14px)" } },
        glowPulse: {
          "0%,100%": { boxShadow:"0 0 20px rgba(82,243,23,0.3)" },
          "50%":     { boxShadow:"0 0 55px rgba(82,243,23,0.75)" },
        },
      },
      animation: {
        badgePulse: "badgePulse 2s ease-in-out infinite",
        marqueeL:   "marqueeL 32s linear infinite",
        marqueeR:   "marqueeR 28s linear infinite",
        spinSlow:   "spinSlow 22s linear infinite",
        spinSlowR:  "spinSlowR 32s linear infinite",
        floatY:     "floatY 4s ease-in-out infinite",
        glowPulse:  "glowPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
