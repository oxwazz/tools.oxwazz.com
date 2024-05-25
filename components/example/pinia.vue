<template>
  <UDivider label="test persist global store support ssr (pinia)" class="mt-16" />
  <div>
    <p>counter: {{ counter }}</p>
    <UButton label="Counter--" @click="store.decrement()" />
    <UButton label="Counter++" class="ml-2" @click="store.increment()" />
  </div>
</template>

<script setup lang="ts">
const store = useCounterStore()

const counter = computed(() => store.doubleCount)
</script>
