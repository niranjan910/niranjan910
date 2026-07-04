import type { Config } from "tailwindcss";

/**
 * Design system tokens.
 * The whole palette + type scale lives here so components stay declarative.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Matte-black base + elevated surfaces
        base: "#0A0A0A",
        surface: "#121212",
        // Text
        foreground: "#EDEDED", // soft off-white (not pure white)
        muted: "#8A8A8A",
        // Accent
        accent: "#A3E635",
        "accent-hover": "#BEF264",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.08)",
        subtle: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        // Wired to next/font CSS variables (see app/layout.tsx)
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      fontSize: {
        // Confident display scale
        "display-lg": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        // Soft green glow used on hover states + hero
        glow: "0 0 0 1px rgba(163,230,53,0.35), 0 8px 40px -12px rgba(163,230,53,0.25)",
        "glow-soft": "0 12px 48px -18px rgba(163,230,53,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
