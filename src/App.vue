<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/Default.vue'
import EmptyLayout from '@/layouts/Empty.vue'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'empty': return EmptyLayout
    default: return DefaultLayout
  }
})

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style lang="scss">

</style>
