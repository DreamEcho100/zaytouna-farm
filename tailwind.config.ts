import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "xl-3-sm": "250px",
        // // => @media (min-width: 250px) { ... }
        "xl-2-sm": "400px",
        // // => @media (min-width: 400px) { ... }
        "xl-sm": "512px",
        // => @media (min-width: 512px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        // ...defaultTheme,

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        special: {
          primary: {
            100: "rgba(var(--color-special-primary-100) / <alpha-value>)",
            200: "rgba(var(--color-special-primary-200) / <alpha-value>)",
            300: "rgba(var(--color-special-primary-300) / <alpha-value>)",
            400: "rgba(var(--color-special-primary-400) / <alpha-value>)",
            500: "rgba(var(--color-special-primary-500) / <alpha-value>)",
            600: "rgba(var(--color-special-primary-600) / <alpha-value>)",
            700: "rgba(var(--color-special-primary-700) / <alpha-value>)",
            800: "rgba(var(--color-special-primary-800) / <alpha-value>)",
            900: "rgba(var(--color-special-primary-900) / <alpha-value>)",
          },
        },
      },
      spacing: {
        "main-header-h": "var(--main-header-h)",
      },
      minHeight: {
        "main-content": "var(--main-content-min-h)",
      },
      maxWidth: {
        main: "var(--main-max-w)",
      },
    },
  },
  plugins: [],
} satisfies Config;
