<template>
  <UDivider label="test mutation (vue-query)" class="mt-16" />
  <form class="flex flex-col gap-2 items-start" @submit="onSubmit">
    <UInput v-model="url" placeholder="please input url" class="w-full [&>input]:pl-12">
      <template #leading>
        <span class="text-gray-500 dark:text-gray-400 text-xs">POST:</span>
      </template>
    </UInput>
    <UButton type="submit" label="Submit" :loading="status === 'pending'" :disabled="!url" />
    <div>
      status: <b>{{ status }}</b>
    </div>
  </form>
</template>
<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'

const url = ref('jsonplaceholder.typicode.com/posts')
const title = ref('foo')
const body = ref('bar')

const { mutate, status } = useMutation({
  mutationFn: () =>
    $fetch(`https://${url.value}`, {
      method: 'POST',
      body: {
        title: title.value,
        body: body.value,
        userId: 1
      }
    })
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  mutate()
}
</script>
