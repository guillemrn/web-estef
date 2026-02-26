import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        brand: {
          wine: "#3B010B",
          light: "#FDFBF7",
          gold: "#F2D9A0",
          dark: "#201500",
          champagne: "#F2E5C6",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#F2D9A0',
              '&:hover': {
                color: '#3B010B',
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit', fontFamily: 'var(--font-serif)' },
            h2: { color: 'inherit', fontFamily: 'var(--font-serif)' },
            h3: { color: 'inherit', fontFamily: 'var(--font-serif)' },
            h4: { color: 'inherit', fontFamily: 'var(--font-serif)' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
