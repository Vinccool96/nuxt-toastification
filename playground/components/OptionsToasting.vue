<template>
  <button @click="showToast">Show toast</button>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#app"
import { POSITION, TYPE } from "vue-toastification"
const { $toast } = useNuxtApp()

function getRandom<T>(list: Array<T>): T {
  return list[Math.floor((Math.random() * 10) % list.length)]
}

function randomType(): TYPE {
  return getRandom(Object.values(TYPE))
}

function randomPosition(): POSITION {
  return getRandom(Object.values(POSITION))
}

function randomMessage(): string {
  return getRandom(["Hello", "I'm a toast!", "Oops!", "Hi :)"])
}

function showToast(): void {
  $toast(randomMessage(), { type: randomType(), position: randomPosition() })
}
</script>
