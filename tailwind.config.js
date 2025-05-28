module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant file types in your `src` folder
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite",
        wavy1: "wave 1.2s infinite ease-in-out 0s",
        wavy2: "wave 1.2s infinite ease-in-out 0.05s",
        wavy3: "wave 1.2s infinite ease-in-out 0.1s",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(-15px)", opacity: "0.5" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-68%)" }, // Move halfway for infinite effect
        },
      },
      colors: {
        darkgray: '#171717',
        darkpurple: '#160647',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #052A8066, #01091A)',
        'custom-gradient2': 'linear-gradient(to bottom, #01091A1F, #01091A)',
        'custom-gradient3': 'linear-gradient(to bottom, #171717 0%, #171717 70%, #160647 70%, #160647 100%)',
      },
    },
  },
  plugins: [],
};

