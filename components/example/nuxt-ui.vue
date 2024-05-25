<template>
  <UDivider label="test ui component (nuxt ui)" />
  <UAccordion :items="items" class="mt-2" />
  <ExampleToggleTheme />
</template>

<script setup lang="ts">
const items = ref([
  {
    label: 'Getting Started',
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
  {
    label: 'Theming',
    icon: 'i-heroicons-eye-dropper',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  }
])
</script>
