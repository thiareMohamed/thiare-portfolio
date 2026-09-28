/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Thème « Le Dōjō » : fond encre, un seul accent vermillon
      colors: {
        ink: 'oklch(0.13 0.006 40)',
        surface: 'oklch(0.17 0.008 40)',
        paper: 'oklch(0.94 0.012 80)',
        soft: 'oklch(0.84 0.012 75)', // texte des paragraphes « lead »
        muted: 'oklch(0.72 0.012 70)',
        line: 'oklch(1 0 0 / 0.09)',
        vermilion: 'oklch(0.66 0.21 36)',
        'on-vermilion': 'oklch(0.14 0.01 40)',
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        kanji: ['"Shippori Mincho"', 'serif'],
      },
      screens: {
        nav: '900px',
      },
      transitionTimingFunction: {
        dojo: 'cubic-bezier(.2,.7,.2,1)',
      },
    },
  },
  plugins: [],
}
