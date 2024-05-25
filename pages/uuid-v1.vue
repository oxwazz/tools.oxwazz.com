<template>
  <h1 class="text-2xl font-bold">UUID v1 - Based On Timestamp</h1>
  <div class="mt-4 select-all text-base">
    {{ id }}
  </div>
  <button
    class="mt-2 rounded-xl bg-slate-600 px-2 py-1 text-base text-white hover:bg-slate-700 active:bg-slate-800"
    @click="generate"
  >
    generate
  </button>

  <hr class="my-6" />
  <h1 class="text-2xl font-bold">UUID v1 - Parse Time</h1>
  <label for="UUID V1">
    UUID V1:
    <input v-model="uuid" type="text" class="w-1/2 rounded border" />
  </label>
  <p>Time: {{ time }}</p>
</template>

<script setup lang="ts">
import { v1 as uuidv1, validate as uuidValidate } from 'uuid'
import { UUIDv1ToDate } from '~/utils/uuidv1-to-date'

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
