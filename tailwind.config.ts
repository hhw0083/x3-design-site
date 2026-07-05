import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1a17",
        panel: "#fffdf8",
        canvas: "#f7f2ea",
        paper: "#fffdf8",
        line: "#ded6ca",
        cream: "#f7f2ea",
        "warm-paper": "#fffdf8",
        "warm-line": "#ded6ca",
        charcoal: "#1d1a17",
        cyanline: "#7c6a56",
        mint: "#6f7d69",
        brass: "#9a7452",
        signal: "#be123c",
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-tc)",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
        ],
        serif: [
          "var(--font-noto-sans-tc)",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
        ],
        noto: [
          "var(--font-noto-sans-tc)",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      fontSize: {
        "section-kicker": [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.24em",
          },
        ],
        "project-card-meta": [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.18em",
          },
        ],
        "project-card-title": [
          "1.5rem",
          {
            lineHeight: "1.2",
          },
        ],
        "project-card-year": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "project-card-detail": [
          "0.875rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "project-detail-title": [
          "clamp(2rem, 3.4vw, 3.25rem)",
          {
            lineHeight: "1.08",
          },
        ],
        "project-detail-lede": [
          "1.125rem",
          {
            lineHeight: "2rem",
          },
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
