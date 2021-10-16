import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'theme-color', content:'#01a093'},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Front End Engineer / Full Stack Developer' },
            { name: 'format-detection', content: 'telephone=no' },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'Chingiz Mammadov'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'CREATIVE FRONT-END ENGINEER'
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: 'https://chz.dev/img/icons/_icon.png'
            },
            {
                hid: 'twitter:image:alt',
                name: 'twitter:image:alt',
                content: 'Chingiz Mammadov'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'CHZ | Chingiz Mammadov'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'CREATIVE FRONT-END ENGINEER'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://chz.dev/img/icons/_icon.png'
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: 'https://chz.dev/img/icons/_icon.png'
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: 'CHZ'
            }
        ],
        link: [
            { rel: 'preconnect', href:"https://fonts.googleapis.com"},
            { rel: 'preconnect', href:"https://fonts.gstatic.com", crossorigin: true},
            { rel: 'icon', type: 'image/png', href: '/_icon.png' }
        ]
    },
    components: true,
    css: ['~/assets/css/variables.scss', '~/assets/css/mini.scss','~/assets/css/main.scss']
})
