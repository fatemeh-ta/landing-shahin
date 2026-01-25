export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/i18n", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],

  ui: {
    fonts: false, // stops unifont/fontshare/fontsource network calls
  },
  eslint: {
    checker: true,
  },

  i18n: {
    langDir: "../app/locales/",
    strategy: "prefix",
    locales: [
      { code: "en", name: "English", dir: "ltr", file: "en/index.ts" },
      { code: "fa", name: "فارسی", dir: "rtl", file: "fa/index.ts" },
    ],
    defaultLocale: "fa",
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: false,
    //   cookieKey: "i18n_redirected",
    //   fallbackLocale: "en",
    // },

    vueI18n: "../app/i18n/config.ts",
  },
});
