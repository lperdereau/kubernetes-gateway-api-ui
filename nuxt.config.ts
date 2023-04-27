// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  devtools: true,
  router: {
    options: {
      linkActiveClass: "active",
    },
  },
  runtimeConfig: {
    "demo": process.env.DEMO ? true : false,
  }
});
