<template>
  <h1 class="font-bold text-2xl">
    UUID v1 - Based On Timestamp
  </h1>
  <div class="text-base select-all mt-4">
    {{ id }}
  </div>
  <button class="mt-2 text-base bg-slate-600 hover:bg-slate-700 active:bg-slate-800 px-2 py-1 rounded-xl text-white" @click="generate">
    generate
  </button>
</template>

<script setup lang="ts">
import { v1 as uuidv1 } from 'uuid'
useHead({
  title: 'UUID v1 | Oxwazz Tools',
  meta: [
    {
      name: 'description',
      content: 'Create a version 1 (timestamp) UUID'
    }
  ]
})

const id = ref('-')

onMounted(() => {
  id.value = uuidv1()
})

const generate = () => {
  id.value = uuidv1()
}
</script>
