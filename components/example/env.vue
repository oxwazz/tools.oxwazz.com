<template>
  <UDivider label="test env variable" class="mt-16" />
  <div class="mt-2">
    <p>Test Env Secret: {{ runtimeConfig.OXWAZZ_TEST_PRIVATE }}</p>
    <p>Test Env Public: {{ runtimeConfig.public.OXWAZZ_TEST_PUBLIC }}</p>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
