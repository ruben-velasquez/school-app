import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Radio Canada Big", "ui-serif", "Georgia"],
        headings: ["Tanker", "ui-serif", "Georgia"],
      },
      colors: {
        sidebar: "#161616",
        background: "#161616",
        "sidebar-button": "#2D2C2C",
        container: "#3f3f3f",
        "box-border": "#3f3f3f",
      },
    },
  },
  plugins: [],
};
export default config;
