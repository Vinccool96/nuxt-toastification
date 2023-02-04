import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit"

import { PluginOptions } from "vue-toastification"

export default defineNuxtModule<PluginOptions>({
  meta: {
    name: "toastification",
    configKey: "toastification",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.options.runtimeConfig.public.toastification = options

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin.client"))
  },
})
