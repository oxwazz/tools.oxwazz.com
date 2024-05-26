<template>
  <UDivider label="test mutation (vue-query)" class="mt-16" />
  <form class="flex flex-col items-start gap-2" @submit="onSubmit">
    <UInput v-model="url" placeholder="please input url" class="w-full [&>input]:pl-12">
      <template #leading>
        <span class="text-xs text-gray-500 dark:text-gray-400">POST:</span>
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
import axios from 'axios'

const url = ref('jsonplaceholder.typicode.com/posts')
const title = ref('foo')
const body = ref('bar')

const { mutate, status } = useMutation({
  mutationFn: () =>
    axios.post(`https://${url.value}`, {
      title: title.value,
      body: body.value,
      userId: 1
    })
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  mutate()
}
</script>
