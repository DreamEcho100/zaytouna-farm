import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      //

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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
