/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Samouraï
        crimson: {
          light: '#e23b4e',
          DEFAULT: '#c8102e', // shu - rouge vermillon
          dark: '#7a0e1e',
        },
        gold: {
          light: '#e6c34d',
          DEFAULT: '#d4af37', // kin - or
          dark: '#9c7c1e',
        },
        ember: '#e85d2f',
        washi: '#f3ead8', // papier japonais
        sumi: {
          light: '#241c18',
          DEFAULT: '#14100e', // encre noire
          dark: '#0a0807',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        samurai: ['"Shippori Mincho"', 'serif'],
        zen: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
