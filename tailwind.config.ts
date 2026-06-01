import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7FAFF",
        porcelain: "#EDF4FF",
        stone: "#6B7280",
        charcoal: "#172033",
        ink: "#07162F",
        navy: "#062B5F",
        deep: "#03224C",
        sky: "#DCEBFF",
        bluegrey: "#8EA4C2",
        olive: "#66725B",
        terracotta: "#B5644A",
        sand: "#E7DED1"
      },
      fontFamily: {
        brand: [
          "\"Montaser Arabic\"",
          "\"Avenir Next\"",
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(6, 43, 95, 0.12)",
        line: "0 1px 0 rgba(6, 43, 95, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
