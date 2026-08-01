/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0b0e13",
        elev: "#12161d",
        elev2: "#171c25",
        sw: "#22d3ee",
        ai: "#e879f9",
        sec: "#fb923c",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        "glow-sw": "0 20px 45px -20px rgba(34,211,238,0.5)",
        "glow-ai": "0 20px 45px -20px rgba(232,121,249,0.5)",
        "glow-sec": "0 20px 45px -20px rgba(251,146,60,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
