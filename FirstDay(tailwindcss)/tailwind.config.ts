import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      background: {
        bannergradient:
          "linear-gradient(45deg, #096BDE 0%, #096BDE 30%, ##DDF1FF 100%)",
      },
      keyframes: {
        open: {
          from: { opacity: "0%", transform: "translateY(-20px)" },
          to: { opacity: "100%", transform: "translateY(0)" },
        },
        close: {
          from: { opacity: "100%", transform: "translateY(0)" },
          to: { opacity: "0%", transform: "translateY(-20px)" },
        },
      },
      animation: {
        "modal-open": "open 300ms ease-in-out forwards",
        "modal-close": "close 300ms ease-in-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
