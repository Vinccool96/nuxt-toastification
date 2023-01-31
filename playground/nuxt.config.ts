export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
    },
  },
  ssr: false,
  modules: ["../src/module"],
  toastification: {},
})
