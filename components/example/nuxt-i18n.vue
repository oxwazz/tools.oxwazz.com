<template>
  <UDivider label="test i18n (nuxt-i18n)" class="mt-16" />
  <div class="flex gap-2">
    <UButton @click="setLocale('en')">en</UButton>
    <UButton @click="setLocale('fr')">fr</UButton>
  </div>
  <p>current: {{ locale }}</p>
  <p>{{ $t('welcome') }}</p>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
