import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit"
import type { PluginOptions } from "vue-toastification"

export * from "./importWrapper"

export type ToastificationOptions = PluginOptions

export default defineNuxtModule<ToastificationOptions>({
  meta: {
    name: "toastification",
    configKey: "toastification",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.options.runtimeConfig.public.toastification = options
    nuxt.options.build.transpile.push("./runtime")

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin.client"))
  },
})
