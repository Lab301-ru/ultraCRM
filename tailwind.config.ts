import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Фирменная палитра построена по логотипу UltraCRM:
        // тёплый коралл/оранжевый + розовый/магента, синий и зелёный — акценты данных.
        brand: {
          orange: "#FF7A1A",
          amber: "#FBB040",
          coral: "#FB5C4C",
          pink: "#F43F8E",
          magenta: "#EC2D7A",
          blue: "#5B7CFA",
          green: "#3FC56B",
        },
        ink: {
          DEFAULT: "#0B0B12",
          soft: "#16161F",
          muted: "#5A5A6E",
          line: "#ECECF2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(100deg, #FF7A1A 0%, #FB5C4C 38%, #F43F8E 72%, #EC2D7A 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(255,122,26,0.12) 0%, rgba(244,63,142,0.12) 100%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,11,18,0.04), 0 8px 24px rgba(11,11,18,0.06)",
        card: "0 1px 2px rgba(11,11,18,0.05), 0 18px 40px -12px rgba(11,11,18,0.12)",
        float: "0 24px 60px -20px rgba(244,63,142,0.35), 0 12px 30px -16px rgba(255,122,26,0.30)",
        glow: "0 0 0 1px rgba(255,255,255,0.6), 0 30px 80px -24px rgba(244,63,142,0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
