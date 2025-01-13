<script setup lang="ts">
import { onMounted, ref, unref } from 'vue'
import { Api } from '@/services'
import { User } from '@/api/users/types'
import UsersSection from '@/components/users/UsersSection.vue'

const users = ref<User[]>([])
const isLoading = ref(false)
const page = ref(0)

const getUsers = async () => {
  try {
    isLoading.value = true
    
    const { data } = await Api.user.fetchUsers({ page: unref(page) })
    users.value.push(...data)
  } finally {
    isLoading.value = false
  }
}

const loadMore = async () => {
  page.value += 1
  getUsers()
}

const init = async () => {
  users.value = []
  page.value = 0

  getUsers()
}

onMounted(init)
</script>

<template>
  <div class="home-view page">
    <users-section :loading="isLoading" :users="users" @load-more="loadMore" />
  </div>
</template>

<style lang="scss">

</style>
