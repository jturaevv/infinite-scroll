<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { User } from '@/api/users/types'
import UserCard from '@/components/users/UserCard.vue'

const props = withDefaults(defineProps<{
  users: User[]
  loading?: boolean
}>(), {
  loading: false
})

const emit = defineEmits<{
  loadMore: []
}>()

let loadMoreTriggerObserver: IntersectionObserver = null
const loadMoreTrigger = ref<HTMLElement>(null)

const initLoadMoreTriggerObserver = () => {
  loadMoreTriggerObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting && !props.loading) {
        emit('loadMore')
      }
    }
  )
}

onMounted(() => {
  initLoadMoreTriggerObserver()

  if (loadMoreTrigger.value) {
    loadMoreTriggerObserver.observe(loadMoreTrigger.value)
  }
})

onUnmounted(() => {
  if (loadMoreTriggerObserver && loadMoreTrigger.value) {
    loadMoreTriggerObserver.unobserve(loadMoreTrigger.value)
  }
})

</script>

<template>
  <section class="users-section">
    <div class="container">
      <div class="users-section__title">
        Users Section
      </div>

      <div class="users-section__list">
        <user-card v-for="user in users" :key="user.id" :user="user" />
      </div>
      <div v-if="loading" class="users-section__loader">
        Loading
      </div>
      <div ref="loadMoreTrigger" />
    </div>
  </section>
</template>

<style lang="scss">
.users-section {
  padding: 50px 0;

  &__title {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
  }

  &__list {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    margin: 24px 0;
  }

  &__loader {
    padding: 24px 0;
    font-size: 25px;
    text-align: center;

    &::after {
      content: '';
      animation: dotBlink 1.5s steps(5, end) infinite;
    }
  }


  @keyframes dotBlink {
    0% { content: '.'; }
    25% { content: '..'; }
    50% { content: '...'; }
    75% { content: '..'; }
    100% { content: '.'; }
  }
}
</style>
