/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // padding: {
      //   DEFAULT: '2rem'
      // }
    },
    screens: {
      'sm': '500px',
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        {'min': '668px', 'max': '767px'},
        {'min': '868px'}
      ],
      'lg': '1024px',
      'xl': '1440px',
    },
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
          "100%": { left: "273px" },
        },
        quickLinks: {
          "0%": { left: "0px" },
          "100%": { left: "184px" },
        },
        usefulLinks: {
          "0%": { left: "0px" },
          "100%": { left: "220px" },
        },
        bannerScale: {
          "0%": { transform: 'scale(1)' },
          "100%": { transform: 'scale(1.2)' },
        },
        menuTransform: {
          "0%": { left: '-320px' },
          "100%": { left: '0px' },
        },
        menuTransform2: {
          "0%": { left: '0px' },
          "100%": { left: '-320px' },
        },
        dropdownAnimation: {
          "0%": { opacity: 0 },
          "100%": { opacity: 10 },
        },
        dropdownAnimation2: {
          "0%": { opacity: 10 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        contactAnimation: "contact 5s linear infinite",
        quickLinkAnimation: "quickLinks 5s linear infinite",
        usefulLinkAnimation: "usefulLinks 5s linear infinite",
        bannerScaleAnimation: "bannerScale 10s linear infinite",
        menuTransformAnimation: "menuTransform 0.3s linear forwards",
        menuTransformAnimation2: "menuTransform2 0.3s linear forwards",
        dropdown: "dropdownAnimation 0.3s linear forwards",
        dropdown2: "dropdownAnimation2 0.3s linear forwards"
      },
    },
  },
  plugins: [],
};
