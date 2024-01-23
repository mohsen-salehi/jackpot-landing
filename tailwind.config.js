// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius : {
        '20' : "20px"
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/jackpot.svg')",
        'jackpot-handler': "url('src/assets/images/Jackpot-handler.png')",
        "elanza-orange" : 'linear-gradient(91deg, #F26C36 -2.12%, #F38559 115.95%)',
        "main-desktop" : "url('src/assets/images/main-desktop.png')",
        "main-mobile" : "url('src/assets/images/main-mobile.png')",
        "main-loser" : "url('src/assets/images/loser-background.png')",
        "main-winner" : "url('src/assets/images/winner-background.png')",
      },
    },
  },
  plugins: [],
}