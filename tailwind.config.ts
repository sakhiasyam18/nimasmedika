// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet Warna Kustom dari Mood Board kita
        primary: {
          light: "#8DD8FF", // Biru muda cerah
          DEFAULT: "#4E71FF", // Biru utama
          dark: "#5409DA", // Ungu/Biru gelap
        },
        accent: {
          light: "#BBFBFF", // Biru langit sangat muda
          DEFAULT: "#8DD8FF",
        },
      },
      fontFamily: {
        // Font Kustom yang sudah kita sepakati
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
