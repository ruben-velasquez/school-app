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
        "sidebar": "#0B0A0B",
        "background": "#363737",
        "sidebar-button": "#2D2C2C"
      },
    },
  },
  plugins: [],
};
export default config;
