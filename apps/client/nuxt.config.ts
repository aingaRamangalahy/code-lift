// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/ui', '@pinia/nuxt'],
    css: ['~/assets/scss/main.scss'],
    runtimeConfig: {
        public: {
            baseURL: process.env.API_BASE_URL,
        },
    },
    ui: {
        icons: ['mdi', 'heroicons'],
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode',
    },
})
