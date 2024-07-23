/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    space: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },

    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },

    fontSize: {
      "heading-xl": [
        "15.625rem",
        {
          lineHeight: "12.5rem",
          letterSpacing: "-0.3125rem",
          fontWeight: "700",
        },
      ],
      "heading-l": [
        "6rem",
        {
          lineHeight: "5rem",
          letterSpacing: "-0.125rem",
          fontWeight: "700",
        },
      ],
      "heading-m": [
        "4.5rem",
        {
          lineHeight: "4rem",
          letterSpacing: "-0.125rem",
          fontWeight: "700",
        },
      ],
      "heading-s": [
        "2rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "700",
        },
      ],
      body: [
        "1.025rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.03em",
          fontWeight: "400",
        },
      ],
    },

    extend: {
      colors: {
        "dark-blue": "hsla(224, 14%, 12%, 1)",
        "dark-grey": "hsla(224, 6%, 40%, 1)",
        "medium-grey": "hsla(224, 8%, 53%, 1)",
        "light-grey": "hsla(224, 17%, 82%, 1)",
        "thin-grey": "hsla(224, 23%, 94%, 1)",
        red: "hsla(0, 69%, 61%, 1)",
      },
      screens: {
        s: "600px",
        ls: "900px",
      },
    },
  },
  plugins: [],
};
