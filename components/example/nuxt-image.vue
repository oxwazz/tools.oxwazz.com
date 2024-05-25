<template>
  <UDivider label="test get image from imagekit (nuxt-image)" class="mt-16" />
  <NuxtImg
    provider="imagekit"
    src="/pwa_webp/new_landing_page/logo-color@3x.webp?updatedAt=1689904664797"
    :modifiers="{ blur: 5 }"
  />
</template>
