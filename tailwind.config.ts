import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        panel: "#ffffff",
        canvas: "#f6f7f9",
        paper: "#ffffff",
        line: "#e5e7eb",
        cyanline: "#0f766e",
        mint: "#047857",
        brass: "#b45309",
        signal: "#be123c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        noto: [
          "var(--font-noto-sans-tc)",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      boxShadow: {
        "panel-glow": "0 24px 70px rgba(15, 23, 42, 0.12)",
        "portfolio-card": "0 18px 50px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
