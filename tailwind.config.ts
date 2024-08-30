import type { Config } from "tailwindcss";
import daisy from "daisyui";
import typography from "@tailwindcss/typography";

const dark = {
  neutral: "#333",
  primary: "#FFF",
  secondary: "#666",
  "base-100": "#000",
};

const light = {
  neutral: "#999",
  primary: "#000",
  secondary: "#666",
  "base-100": "#FFF",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [typography, daisy],
  daisyui: {
    themes: [{ light }, { dark }],
    darkTheme: "dark",
  },
};

export default config;
