// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    components: [
        { path: '~/components/layouts', pathPrefix: false },
        // ~/components/Btn.vue => <Btn />
        // ~/components/resource/Card.vue => <ResourceCard />
        '~/components',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@element-plus/nuxt',
        'nuxt-svgo',
        // 'nuxt-icon',
    ],
    svgo: {
        // global: false,
        defaultImport: 'component',
        customComponent: 'SharedIcon'
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
    colorMode: {
        classSuffix: '',
    },
})
