import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");


export default withMT({
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      canonicalAubergine: {
      100: "#F1E9ED",
      200: "#E3D4DC",
      300: "#D6BECB",
      400: "#C8A9BA",
      500: "#BB94A9",
      600: "#AD7E97",
      700: "#9F6986",
      800: "#925375",
      900: "#843E64",
      DEFAULT: "#772953"
    },
    darkAubergine: {
      800: "#56334B",
      900: "#411934",
      DEFAULT: "#2C001E"
    },
    ubuntuOrange: {
      100: "#FEEDE9",
      200: "#FBDDD2",
      300: "#F8CCBC",
      400: "#F6BBA6",
      500: "#F4AA90",
      600: "#F29879",
      700: "#F08763",
      800: "#ED764D",
      900: "#EB6536",
      DEFAULT: "#E95420"
    },
    warmGrey: {
      100: "#F6F6F5",
      200: "#EEEDEB",
      300: "#E6E4E2",
      400: "#DEDBD8",
      500: "#D6D3CF",
      600: "#CECAC5",
      700: "#C6C1BB",
      800: "#BEB8B2",
      900: "#B6AFA8",
      DEFAULT: "#AEA79F"
    }
  },
    extend: {},
  },
  plugins: [],
}) satisfies Config;
