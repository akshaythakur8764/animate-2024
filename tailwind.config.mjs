/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // colors: {
      //   custom: {
      //     background: 'white',
      //     text: 'black',
      //   },
      // },
      maxWidth: {
        '8xl': '110rem',
      },
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       '*': {
      //         color: theme('colors.custom.text'),
      //       },
      //     },
      //   },
      // }),
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  // plugins: [require('@tailwindcss/typography')],
};
