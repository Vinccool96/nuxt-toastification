import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  typescript: {
    includeWorkspace: true,
  },
})
