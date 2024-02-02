/** @type {import('tailwindcss').Config} */
module.exports = {
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
        backgroundColor:"rgb(27, 23, 23, 1)",
        colorCenter : '#1B1717',
        colorBorder:'rgba(238, 235, 221, 0.1)',
        'gradient-1':'rgba(27, 23, 23, -0.7) 48%',
        'gradient-2':'rgba(27, 23, 23, 0.9) 20%',
        'gradient-2m':'rgba(27, 23, 23, -0.5) 20%',
        'gradient-3':'#1B1717',
    
      },
     
      fontFamily: {
         roboto:"Roboto",
      },
      borderRadius:{
        all:"100px"
      },
      rotate:{
        '17':"17deg",
        '8':"8deg",
        '7':"7deg",
        '12.53':"-12.53deg",
      },
      margin: {
        '18.53px':"18.53px",
        '120px':"120px",
          '15px':"15px",
          '300px':"300px",
          '370px':"370px",
          '280px':"280px",
          '350px':"350px",
          '375px':"375px",
          '150px':"150px",
          '15px':"15px",
          '238.5':'238.5px',
          '260':'260px',
          
      },
      height: {
        '61': "61px",
        '727': "727px",
        '671':"671px",
        '264':"264px",
        '415':"415px",
        '27':'27px',
        '144':'144px',
        '102':'102px',
        '409':'409px',
        '342':'342px',
        '75':'75px',
        '61':'61px'
      },
      padding: {
        '18px': '18px',
        
      },
      width: {
        '267': '267px',
        '27':'27px',
        '216':'216px',
        '158':'158px',
        '276':'276px',
        '320':'320px',
        '75':'75px',
        '227':'227px',
        '1200':'1200px'
      },
    
      fontSize: {
        'sm':['48px','56.25px'],
       'base':[ '96px','112.5px'],
        'xl':['16px','20px'],
        'xxl':['16px','18.75px'],
        '2xl': ['21px','24.61px'],
        'norm':['18px','21px'],
        '28':['28px','50px'],
        '24':['24px','50px'],
        '25':['25px','29px'],
        '12':['12px','14px'],
        '14':['14px','16.41px'],
        '26':['24px','28px'],
        '128': '128px',
        '48': '48px',
        '96': '96px',
        '40':'40px',
      },
     
      backgroundImage:{
        'pattern': "url('@/assets/images/pattern.svg')",
        'patterns': "url('@/assets/images/patterns.svg')",
        'poster':"linear-gradient(to bottom, #1b171700,#1B1717CC , #1b1717)",
         'posters':"url('@/assets/images/posters.svg')",
      
      },
      lineHeight: {
        '150': '150px',
        '56': '56px',
        '112.5':'112.5px',
        '46.88':'46.88px'
      },
      gap: {
        '60': '60px',
        '18':'18px'
      }

    
    },
  },
  plugins: [require("daisyui"),('tailwind-aspect-ratio')],
  };