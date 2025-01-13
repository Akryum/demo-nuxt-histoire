import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  css: [
    resolve('./styles/fonts.css'),
  ],

  compatibilityDate: '2025-01-13',
})