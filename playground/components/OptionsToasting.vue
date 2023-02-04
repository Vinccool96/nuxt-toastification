<template>
  <button @click="showToast">Show toast</button>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app"
import { POSITION, TYPE } from "vue-toastification"

export default defineNuxtComponent({
  methods: {
    getRandom<T>(list: Array<T>): T {
      return list[Math.floor((Math.random() * 10) % list.length)]
    },

    randomType(): TYPE {
      return this.getRandom(Object.values(TYPE))
    },

    randomPosition(): POSITION {
      return this.getRandom(Object.values(POSITION))
    },

    randomMessage(): string {
      return this.getRandom(["Hello", "I'm a toast!", "Oops!", "Hi :)"])
    },

    showToast(): void {
      this.$toast(this.randomMessage(), { type: this.randomType(), position: this.randomPosition() })
    },
  },
})
</script>
