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

  <hr class="my-6">
  <h1 class="font-bold text-2xl">
    UUID v1 - Parse Time
  </h1>
  <label for="UUID V1">
    UUID V1:
    <input v-model="uuid" type="text" class="border rounded w-1/2">
  </label>
  <p>Time: {{ time }}</p>
</template>

<script setup lang="ts">
import { v1 as uuidv1, validate as uuidValidate } from 'uuid'
import { UUIDv1ToDate } from '~/utilities/uuidv1-to-date'
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
const uuid = ref('')
const time = ref<Date | string>('-')

onMounted(() => {
  id.value = uuidv1()
})

const generate = () => {
  id.value = uuidv1()
}
watch(uuid, (value) => {
  if (uuidValidate(uuid.value)) {
    time.value = UUIDv1ToDate().get_date_obj(value)
  } else {
    time.value = 'uuid not valid!'
  }
})
</script>
