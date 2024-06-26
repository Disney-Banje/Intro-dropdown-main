/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'Almost-white': 'hsl(0, 0%, 98%)',
      'Medium-Gray': 'hsl(0, 0%, 41%)',
      'Almost-Black': 'hsl(0, 0%, 8%)',
      'White': 'rgb(255 255 255)',
    },
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
    },
  },
  plugins: [],
}

