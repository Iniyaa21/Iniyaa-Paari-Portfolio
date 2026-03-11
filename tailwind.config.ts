import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "rgb(var(--bg-main) / <alpha-value>)",
        foreground: "rgb(var(--text-primary) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--text-highlight) / <alpha-value>)",
          foreground: "rgb(var(--bg-main) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--text-muted) / <alpha-value>)",
          foreground: "rgb(var(--bg-main) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--text-muted) / <alpha-value>)",
          foreground: "rgb(var(--bg-main) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--text-muted) / <alpha-value>)",
          foreground: "rgb(var(--text-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--text-highlight) / <alpha-value>)",
          foreground: "rgb(var(--bg-main) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--bg-secondary) / <alpha-value>)",
          foreground: "rgb(var(--text-primary) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--bg-secondary) / <alpha-value>)",
          foreground: "rgb(var(--text-primary) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "rgb(var(--bg-secondary) / <alpha-value>)",
          foreground: "rgb(var(--text-primary) / <alpha-value>)",
          primary: "rgb(var(--text-highlight) / <alpha-value>)",
          "primary-foreground": "rgb(var(--bg-main) / <alpha-value>)",
          accent: "rgb(var(--text-highlight) / <alpha-value>)",
          "accent-foreground": "rgb(var(--bg-main) / <alpha-value>)",
          border: "var(--border)",
          ring: "var(--ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.9" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        typing: "typing 3s steps(40) infinite",
        blink: "blink 1s step-end infinite",
        float: "float 3s ease-in-out infinite",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
