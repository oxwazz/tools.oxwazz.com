<template>
  <UDivider label="test @vueuse" class="mt-16" />
  <div>pos: {{ x }}, {{ y }}</div>
</template>

<script setup lang="ts">
const { x, y } = useMouse()
</script>
