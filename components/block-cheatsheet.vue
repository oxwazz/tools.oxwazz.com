<template>
  <div class="rounded-xl bg-white pb-2 pt-1.5">
    <h1 class="mb-1.5 px-1.5 text-xl font-bold text-black opacity-80">{{ title }}</h1>
    <div v-for="item in getData" :key="item.label" class="[&:not(:first-child)]:mt-40.5">
      <div class="bg-green-100 px-1.5 py-0.5">
        <h2 class="text-xs font-bold text-green-950 opacity-60">{{ item.label }}</h2>
      </div>
      <div class="mt-0.5" v-html="item.html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { codeToHtml } from 'shiki'
import type { PropsBlockCheatsheet } from '~/components/types'

// get props
const props = defineProps<PropsBlockCheatsheet>()

const getData = await Promise.all(
  props.cheatsheets.map(async (cheatsheet) => {
    return {
      label: cheatsheet.label,
      html: await codeToHtml(cheatsheet.code, {
        lang: cheatsheet.lang,
        theme: 'vitesse-light'
      })
    }
  })
)
</script>

<style scoped>
::v-deep(pre.shiki) {
  font-size: 12px;
  overflow-x: scroll;
  scrollbar-color: transparent transparent;
  padding: 0 6px;
}

::v-deep(pre.shiki *) {
  font-family: 'JetBrains Mono';
}

::v-deep(pre.shiki:hover) {
  scrollbar-color: rgb(238, 238, 238) #ffffff;
}
</style>
