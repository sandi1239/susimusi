import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        heading: ["Playfair Display", "serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        wood: {
          light: "hsl(var(--wood-light))",
          medium: "hsl(var(--wood-medium))",
          dark: "hsl(var(--wood-dark))",
        },
        christmas: {
          red: "hsl(var(--christmas-red))",
          green: "hsl(var(--christmas-green))",
        },
        cream: "hsl(var(--cream))",
        gold: "hsl(var(--gold))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "sunbeam-1": {
          "0%": { transform: "rotate(0deg) scale(1)", opacity: "0.25" },
          "50%": { transform: "rotate(3deg) scale(1.15)", opacity: "0.35" },
          "100%": { transform: "rotate(0deg) scale(1)", opacity: "0.25" },
        },
        "sunbeam-2": {
          "0%": { transform: "rotate(0deg) scale(1)", opacity: "0.2" },
          "50%": { transform: "rotate(-2deg) scale(1.1)", opacity: "0.3" },
          "100%": { transform: "rotate(0deg) scale(1)", opacity: "0.2" },
        },
        "sunbeam-3": {
          "0%": { transform: "translateX(0) scale(1)", opacity: "0.18" },
          "50%": { transform: "translateX(5%) scale(1.15)", opacity: "0.26" },
          "100%": { transform: "translateX(0) scale(1)", opacity: "0.18" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "sunbeam-1": "sunbeam-1 12s ease-in-out infinite",
        "sunbeam-2": "sunbeam-2 15s ease-in-out infinite",
        "sunbeam-3": "sunbeam-3 18s ease-in-out infinite",
      },
      boxShadow: {
        'warm': '0 10px 40px -10px hsl(var(--wood-medium) / 0.3)',
        'warm-lg': '0 20px 60px -15px hsl(var(--wood-dark) / 0.4)',
        'glow': '0 0 30px hsl(var(--christmas-red) / 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
