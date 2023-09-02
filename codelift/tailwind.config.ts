import type { Config } from 'tailwindcss'

export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      containers: {
        'sm': '40rem',
        'md': '48rem',
        'lg': '64rem',
        'xl': '80rem',
        '2xl': '96rem',
      },
    },
    screens: {
      // from daily.dev tailwind config
      mobileL: '420px',
      tablet: '656px',
      laptop: '1020px',
      laptopL: '1360px',
      laptopXL: '1668px',
      desktop: '1976px',
      desktopL: '2156px',
    },
    zIndex: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      rank: '3',
      header: '4',
      sidebar: '9',
      dialog: '10',
      max: '100',
      '-1': '-1',
    },
    // width: {
    //   70: '17.5rem',
    // },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config
