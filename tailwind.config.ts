import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep midnight navy / near-black — primary
        ink: {
          DEFAULT: "#0D1220",
          soft: "#161D2E",
        },
        // Cool optical blue — secondary
        optical: {
          DEFAULT: "#2C4A7C",
          light: "#4C6FA3",
        },
        // Electric blue / refined cobalt — accent
        cobalt: {
          DEFAULT: "#2F6FED",
          dim: "#1F52C4",
        },
        // Warm white / soft ivory — background
        ivory: "#FAF7F1",
        // Charcoal / near-black — text
        charcoal: "#1E222A",
        // Supporting cool light gray surface
        mist: "#EEF1F5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wideish: "0.08em",
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(13,18,32,0.08)",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
