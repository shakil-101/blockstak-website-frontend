import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        // => @media (min-width: 400px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      colors: {
        primary: "#C98BEF",
        primaryDark: "#202020",
        secondaryDark: "#1e2235",
        tertiaryDark: "#292828",
        primaryWhite: "#F4F4F4",
        primaryLight: "#8B80F9",
        secondaryLight: "#C7C8FE",
        borderWhite: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
export default config;
