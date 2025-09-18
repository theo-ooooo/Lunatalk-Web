// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/image"],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000",
      cdnBase: "https://media-v2.lunatalk.co.kr/",
    },
  },
});
