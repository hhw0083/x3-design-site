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
        contact: {
          canvas: "#f7f2ea",
          surface: "#fffdf8",
          "surface-strong": "#f1e9dc",
          line: "#d8cec0",
          muted: "#756c61",
          ink: "#1d1a17",
          accent: "#7c6a56",
        },
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
            letterSpacing: "0.18em",
          },
        ],
        "section-title": [
          "clamp(1.5rem, 2.1vw, 2.25rem)",
          {
            lineHeight: "1.22",
          },
        ],
        "section-lede": [
          "1.0625rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        "content-lead": [
          "clamp(1.125rem, 1.45vw, 1.375rem)",
          {
            lineHeight: "1.75",
          },
        ],
        "body-copy": [
          "1rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        "meta-label": [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.14em",
          },
        ],
        "meta-value": [
          "0.9375rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "item-number": [
          "1.875rem",
          {
            lineHeight: "1",
          },
        ],
        "item-title": [
          "1.375rem",
          {
            lineHeight: "1.28",
          },
        ],
        "item-meta": [
          "0.8125rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.14em",
          },
        ],
        "chip": [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        "cta-title": [
          "clamp(1.5rem, 2.35vw, 2.125rem)",
          {
            lineHeight: "1.2",
          },
        ],
        "page-title": [
          "clamp(1.375rem, 1.45vw, 1.625rem)",
          {
            lineHeight: "1.35",
            letterSpacing: "0.01em",
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
        "contact-info": [
          "0.9375rem",
          {
            lineHeight: "1.625rem",
          },
        ],
        "contact-label": [
          "0.8125rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.02em",
          },
        ],
        "contact-note": [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        "contact-control": [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "contact-choice": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "contact-button": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.04em",
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
