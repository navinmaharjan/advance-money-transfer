/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF1C0A",
        offWhite: "#F5F5F6",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        contact: {
          "0%": { left: "0px" },
          "100%": { left: "573px" },
        },
        quickLinks: {
          "0%": { left: "0px" },
          "100%": { left: "184px" },
        },
        usefulLinks: {
          "0%": { left: "0px" },
          "100%": { left: "220px" },
        },
      },
      animation: {
        contactAnimation: "contact 5s linear infinite",
        quickLinkAnimation: "quickLinks 5s linear infinite",
        usefulLinkAnimation: "usefulLinks 5s linear infinite",
      },
    },
  },
  plugins: [],
};
