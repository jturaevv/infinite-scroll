<script setup lang="ts">

console.log('Hello world')

</script>

<template>
  <div class="default-layout">
    <div class="default-layout__header">
      Header
    </div>
    <main class="default-layout__page">
      <slot />
    </main>
    <div class="default-layout__footer">
      Footer
    </div>
  </div>
</template>

<style lang="scss">

</style>
