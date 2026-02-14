export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/i18n", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "preload",
          as: "font",
          href: "/fonts/IRANSansXV.woff",
          type: "font/woff",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  ui: {
    fonts: false,
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

    vueI18n: "../app/i18n/config.ts",
  },

  // nitro: {
  //   routeRules: {
  //     "/_nuxt/**": {
  //       headers: { "cache-control": "public, max-age=31536000, immutable" },
  //     },
  //     "/fonts/**": {
  //       headers: { "cache-control": "public, max-age=31536000, immutable" },
  //     },
  //   },
  // },

  nitro: {
    preset: "node-server",
  },
});
