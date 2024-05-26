<template>
  <UDivider label="test fetching data support ssr (vue-query)" class="mt-16" />
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <li v-for="(todo, idx) in data" :key="todo.id">{{ idx + 1 }}. {{ todo.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

type Todo = {
  id: number
  title: string
}[]

const { isPending, isError, data, error, suspense } = useQuery<Todo>({
  queryKey: ['todos'],
  queryFn: async () => {
    const tes = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return tes.data
  }
})

// for ssr
onServerPrefetch(async () => {
  await suspense()
})
</script>
