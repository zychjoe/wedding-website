<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const password = ref('')
const error = ref('')
const router = useRouter()

const handleSubmit = () => {
  if (password.value === 'wedding') {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/portal')
  } else {
    error.value = 'Incorrect password. Please try again.'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <Card class="max-w-md w-full">
      <template #title>
        <h2 class="text-center text-3xl font-extrabold text-gray-900">
          Welcome to Our Wedding
        </h2>
      </template>
      <template #subtitle>
        <p class="text-center text-sm text-gray-600">
          Please enter the password to access guest information
        </p>
      </template>
      <template #content>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="p-float-label">
              <Password
                id="password"
                v-model="password"
                :feedback="false"
                toggleMask
                class="w-full"
                required
              />
              <label for="password">Password</label>
            </div>
          </div>

          <div v-if="error" class="text-red-500 text-sm text-center">
            {{ error }}
          </div>

          <div>
            <Button
              type="submit"
              label="Enter"
              class="w-full"
              severity="primary"
            />
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>