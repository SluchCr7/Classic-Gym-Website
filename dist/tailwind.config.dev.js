"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1400px"
    },
    fontFamily: {
      primary: "var(--font-jetBrainsMono)"
    },
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#000000",
        100: "#484848",
        200: "#151515",
        300: "#111",
        accent: {
          DEFAULT: "#d4000d",
          hover: "#dc2f02"
        }
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};