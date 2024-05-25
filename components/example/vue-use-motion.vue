<template>
  <UDivider label="test @vueuse/motion" class="mt-16" />
  <div class="flex flex-col gap-2">
    <div v-motion-roll-visible-bottom class="bg-red-200 h-[150px] w-full"/>
    <div v-motion-roll-visible-bottom class="bg-green-200 h-[150px] w-full"/>
    <div v-motion-roll-visible-bottom class="bg-blue-200 h-[150px] w-full"/>
  </div>
</template>
