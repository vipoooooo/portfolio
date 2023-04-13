import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "InputMono, sans-serif",
        nimbus: "NimbusSans, sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
