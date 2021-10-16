import { defineNuxtPlugin } from '#app'
import '../libs/tree.min.js'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('VANTA', VANTA);
})
