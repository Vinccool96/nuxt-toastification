export type ToastType = ReturnType<typeof pkg.useToast>

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
