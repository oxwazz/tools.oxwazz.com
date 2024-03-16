<template>
  <h1 class="font-bold text-2xl">
    Image to Base64
  </h1>
  <div class="text-base select-all mt-4">
    <input type="file" name="image" @change="getImage">
  </div>
  <div class="w-[100vw] select-all overflow-hidden text-ellipsis">
    {{ base64Output }}
  </div>
  <button class="mt-2 text-base bg-slate-600 hover:bg-slate-700 active:bg-slate-800 px-2 py-1 rounded-xl text-white" @click="convert">
    Convert
  </button>
</template>

<script setup lang="ts">
useHead({
  title: 'Image to Base64 | Oxwazz Tools',
  meta: [
    {
      name: 'description',
      content: 'Convert image to base64'
    }
  ]
})

const images = ref<FileList | null>()
const base64Output = ref<string | ArrayBuffer | null>('-')

const getImage = (e: Event) => {
  images.value = (e.target as HTMLInputElement)?.files
}

const convert = () => {
  if (images.value?.[0]) {
    const reader = new FileReader()
    reader.onloadend = function () {
      base64Output.value = reader.result
    }
    reader.readAsDataURL(images.value[0])
  }
}

</script>
