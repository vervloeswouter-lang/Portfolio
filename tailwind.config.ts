import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#6E56CF", dark: "#4E3FA5", light: "#BEB3FF" }
      }
    }
  },
  plugins: []
};
export default config;
