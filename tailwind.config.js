export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-border': 'linear-gradient(to top right, #ec4899, #7c3aed, #4f46e5)', // Gradient for the border
      },
    },
  },

  plugins: [],
};
