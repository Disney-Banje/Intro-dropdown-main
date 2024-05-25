/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      md: '768px',
    },
    colors: {
      'Almost-white': 'hsl(0, 0%, 98%)',
      'Medium-Gray': 'hsl(0, 0%, 41%)',
      'Almost-Black': 'hsl(0, 0%, 8%)',
    },
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
    },
  },
  plugins: [],
}

