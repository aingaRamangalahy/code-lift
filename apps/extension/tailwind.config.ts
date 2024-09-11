import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './vueform.config.ts', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
        './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
        './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@vueform/vueform/tailwind')],
} satisfies Config
