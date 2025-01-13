<script setup lang="ts">
import { User } from '@/api/users/types'
import { computed } from 'vue'

const props = defineProps<{
  user: User
}>()

const address = computed(() => {
  const { country, city } = props.user.location

  return `${country}, ${city}`
})

const fullname = computed(() => {
  const { title, first, last } = props.user.name

  return `${title}. ${first} ${last}`
})
</script>

<template>
  <div class="user-card">
    <div class="user-card__header">
      <img :src="user.avatar" alt="User avatar" class="user-card__avatar">
      <div class="user-card__header-info">
        <p class="user-card__fullname">
          {{ fullname }}
        </p>
        <p class="user-card__username">
          @{{ user.username }}
        </p>
      </div>
      <button class="user-card__action">
        Follow
      </button>
    </div>

    <div class="user-card__body">
      <div class="user-card-field">
        <div class="user-card-field__name">
          Gender:
        </div>
        <div class="user-card-field__value">
          {{ user.gender }}
        </div>
      </div>

      <div class="user-card-field">
        <div class="user-card-field__name">
          Address:
        </div>
        <div class="user-card-field__value">
          {{ address }}
        </div>
      </div>

      <div class="user-card-field">
        <div class="user-card-field__name">
          Email:
        </div>
        <a class="user-card-field__value" :href="`mailto:${user.email}`">
          {{ user.email }}
        </a>
      </div>

      <div class="user-card-field">
        <div class="user-card-field__name">
          Phone:
        </div>
        <a class="user-card-field__value" :href="`tel:${user.phone}`">
          {{ user.phone }}
        </a>
      </div>

      <div class="user-card-field">
        <div class="user-card-field__name">
          Registered:
        </div>
        <div class="user-card-field__value">
          {{ user.registered.toLocaleDateString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user-card {
  height: 100%;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  background: #F7F6FA;

  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  &__avatar {
    --user-avatar-size: 48px;

    width: var(--user-avatar-size);
    min-width: var(--user-avatar-size);
    height: var(--user-avatar-size);
    min-height: var(--user-avatar-size);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }

  &__header-info {
    flex: 1;
  }

  &__fullname {
    font-weight: 600;
    color: #2A282F;
    margin-bottom: 4px;
  }

  &__username {
    color: #A8A6AC;
    font-size: 14px;
  }

  &__action {
    color: #fff;
    font-size: 14px;
    padding: 12px;
    background-color: #7949FF;
    border-radius: 8px;
    transition: 200ms;

    &:hover {
      opacity: 0.9;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &:active {
      box-shadow: none;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  #{&}-field {
    display: flex;
    font-size: 14px;

    &__name {
      color: #2A282F;
      font-weight: 600;
      width: 100px;
    }

    &__value {
      flex: 1;
    }
  }
}
</style>
