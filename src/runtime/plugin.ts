import { defineNuxtPlugin } from "#app"
import Toaster, { PluginOptions, useToast } from "vue-toastification"
import "vue-toastification/dist/index.css"

type ToastType = ReturnType<typeof useToast>

declare module "#app" {
  export interface NuxtApp {
    $toast: ToastType
  }
}

declare module "vue" {
  export interface ComponentCustomProperties {
    $toast: ToastType
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  const { toastification: options }: { options: PluginOptions } = nuxtApp.payload.config.public

  nuxtApp.vueApp.use(Toaster, options)
  const toast: ToastType = useToast()

  nuxtApp.provide("toast", toast)
})
