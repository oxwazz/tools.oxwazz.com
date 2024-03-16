<template>
  <h1 class="font-bold text-2xl">
    UUID v3 - Based On Namespace w/ MD5
  </h1>
  <div class="text-base select-all mt-4">
    {{ id }}
  </div>
  <div class="flex flex-col mt-4">
    <label for="namespace" class="font-bold">Predefined Namespace</label>
    <select id="namespace" v-model="namespace">
      <option :value="uuidv3.DNS">
        DNS
      </option>
      <option :value="uuidv3.URL">
        URL
      </option>
      <option value="6ba7b812-9dad-11d1-80b4-00c04fd430c8">
        OID
      </option>
      <option value="6ba7b814-9dad-11d1-80b4-00c04fd430c8">
        X500
      </option>
      <option value="custom">
        Custom
      </option>
    </select>
  </div>
  <div v-if="namespace === 'custom'">
    <label for="custom-namespace" class="font-bold">Custom Namespace</label>
    <input id="custom-namespace" v-model="customNamespace" class="border border-solid border-gray-500">
    <p>MD5: {{ md5 }}</p>
  </div>
  <div class="flex flex-col">
    <label for="name" class="font-bold">Name</label>
    <input id="name" v-model="name" class="border border-solid border-gray-500">
  </div>
  <button class="mt-4 text-base bg-slate-600 hover:bg-slate-700 active:bg-slate-800 px-2 py-1 rounded-xl text-white" @click="generate">
    generate
  </button>
</template>

<script setup lang="ts">
import { v3 as uuidv3 } from 'uuid'

useHead({
  title: 'UUID v3 | Oxwazz Tools',
  meta: [
    {
      name: 'description',
      content: 'Create a version 3 (Namespace w/ MD5) UUID'
    }
  ]
})

const namespace = ref(uuidv3.DNS)
const name = ref('test')
const customNamespace = ref('')
const id = ref('-')

onMounted(() => {
  id.value = uuidv3(
    name.value,
    namespace.value === 'custom' ? customNamespace.value : namespace.value
  )
})

const generate = () => {
  id.value = uuidv3(
    name.value,
    namespace.value === 'custom' ? customNamespace.value : namespace.value
  )
}
</script>
