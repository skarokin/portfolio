import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgImg": "url('/bg.png')",
      },
      colors: {
        'bgColor': '#242933',
        'mainColor': '#ec4c56',
      }
    },
  },
  plugins: [],
};
export default config;