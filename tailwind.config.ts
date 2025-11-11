import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#D4AF37",
          600: "#b8962f",
          700: "#8f7424",
          800: "#1a1a1a",
          900: "#0a0a0a"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
