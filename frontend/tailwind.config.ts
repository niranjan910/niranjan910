import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Satoshi", "sans-serif"],
        body:    ["Inter",   "sans-serif"],
      },
      colors: {
        background: "#090414",
        purple:  "#C85CFF",
        orange:  "#FF8A3D",
        pink:    "#FF5FD2",
        cyan:    "#00E5FF",
        blue:    "#4D7CFF",
      },
      animation: {
        "spin-slow": "spin 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;