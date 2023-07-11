/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#1b3350",
          500: "#8DC2FF",
          600: "#0E70E2",
          700: "#1B3350",
          800: "#0c2341",
          DEFAULT: "#0E70E2",
        },
        secondary: {
          100: "#777F8E",
          150: "#51555c",
          200: "#343943",
          300: "#31353C",
          400: "#2C3038",
          500: "#24282e",
          550: "#292C31",
          600: "#1F2227",
          700: "#22252a",
          750: "#1A1E23",
          800: "#15181D",
          900: "#0C0E14",
          DEFAULT: "#1F2227",
        },
        success: {
          600: "#1BC19B",
          DEFAULT: "#1BC19B",
        },
        danger: {
          DEFAULT: "#F54D4D",
          600: "#F54D4D",
          500: "#f22159",
        },
        info: "secondary",

        warning: {
          600: "#E59232",
          DEFAULT: "#E59232",
        },
        white: {
          DEFAULT: "#ffffff",
          500: "#A3A5A7",
          600: "#F8F8F8",
          900: "#ffffff",
        },
      },
      fontSize: {
        xs: "9px",
        sm: "11px",
        base: "13px",
        lg: "15px",
        xl: "23px",
        xl2: "29px",
        xl3: "75px",
      },
      borderRadius: {
        btn: "10.664px",
        "btn-lg": "18.62px",
      },
      spacing: {
        btny: "10.64px",
        btnx: "41.23px",
        base: "6.25px",
      },
      fontFamily: {
        maisonNeue: ['"Maison Neue"', "sans-serif"],
        maisonNeueMedium: ["Maison Neue Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
