import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#FFFFFF',
        white: '#FFFFFF',
        grey: '#F4F4F4',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.typography-h1': {
          '@apply text-[1.5rem] lg:text-[2.5rem]': '',
        },

        '.typography-h2': {
          '@apply text-[1rem] font-bold lg:text-[1.5rem]': '',
        },

        '.typography-body': {
          '@apply text-[1rem]': '',
        },
      })
    }),
  ],
}
