import Toaster, { PluginOptions, useToast } from "vue-toastification"

import { defineNuxtPlugin } from "#app"

import "vue-toastification/dist/index.css"

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  const { toastification: options }: { options: PluginOptions } = nuxtApp.payload.config.public

  nuxtApp.vueApp.use(Toaster, options)

  return {
    provide: {
      toast: useToast(),
    },
  }
})
