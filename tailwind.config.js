/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
          "**/*.{vue,js,ts,html,jsx,tsx}",
          "./index.html"
  ],
  theme: {
    container: {
      center: true,
    },
    screens :{
      ml: "340px",
      // => @media (min-width: 340px) { ... }
      ml2: "480px",
      // => @media (min-width: 480px) { ... }
      ml3: "640px",
      // => @media (min-width: 640px) { ... }

      ml4: "768px",
      // => @media (min-width: 768px) { ... }

      ls: "1024px",
      // => @media (min-width: 1024px) { ... }

      ls2: "1280px",
      // => @media (min-width: 1280px) { ... }
      ls3: "1380px",
      // => @media (min-width: 1380px) { ... }

      sd: "1536px",
      // => @media (min-width: 1536px) { ... }
      xxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "489px" },
      // => @media (max-width: 489px) { ... }
      xxsm: { max: "399px" },
      // => @media (max-width: 399px) { ... }
      xxxsm: { max: "369px" },
      // => @media (max-width: 369px) { ... }
    },

    extend: {
      colors:{
        colorTitle:"#EEEBDD ",
        colorSearch:" #CE1212",
        colorTheme:" #00000080",


      },
      lineHeight:{
            sx:"56.25px"
      },
      fontFamily: {
         roboto:"Roboto"
      },
      borderRadius:{
        in:"100px"
      },
      rotate:{
        '17':"17deg",
        '8':"8deg",
        '7':"7deg",
        '12.53':"-12.53deg"
      },
      margin: {
        '18.53px': "18.53px",
      },
      height: {
        '61': "61px",
      }

    },
  },
  plugins: [require("daisyui")],
};

