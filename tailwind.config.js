/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors: {
    //   black: '#000000',
    // },

    extend: {
      fontFamily:{
        'serif': ['Source Serif'],
        'Georgian' :'Noto Serif Georgian',
        'Poppins':'Poppins',
        'RadioCanada':'Radio Canada',
      },
       
        screens: {
          'xs': '220px',
          'sm': '400px'// Define your desired extra small device width
        },
        
        colors:{
          customGray: '#242424',
        customCyan:'#50C2C9',
        blogclrb:'#6268F5',
        secbg:'#3F9AFF0F',
       
         
         }
      },
      // maxWidth: {
      //   'sm': '16rem', // Small
       
      // },
      // colors:{
      //   green:"#C1E502",
      // }
    },
    "text":"black",
  
  plugins: [],
}