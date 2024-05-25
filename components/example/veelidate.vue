<template>
  <UDivider label="test form validation (veelidate)" class="mt-16" />
  <form @submit="onSubmit">
    <UInput v-model="email" placeholder="please input email" class="mt-2" />
    <div v-for="error in errorBag.email" :key="error" class="text-red-400">{{ error }}</div>
    <UInput v-model="password" placeholder="please input password" class="mt-2" />
    <div v-for="error in errorBag.password" :key="error" class="text-red-400">{{ error }}</div>
    <UButton type="submit" label="Submit" class="mt-2" />
  </form>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'
const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: 'This is required' })
      .email({ message: 'Must be a valid email' }),
    password: zod.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' })
  })
)
const { handleSubmit, errorBag } = useForm({
  validationSchema
})
const { value: email } = useField('email')
const { value: password } = useField('password')
const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>
