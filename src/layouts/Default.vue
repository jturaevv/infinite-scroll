<script setup lang="ts">

console.log('Hello world')

</script>

<template>
  <div class="default-layout">
    <div class="default-layout__header">
      <div class="container">
        Header
      </div>
    </div>
    <main class="default-layout__page">
      <slot />
    </main>
    <div class="default-layout__footer">
      <div class="container">
        Footer
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 15px 0;
  }

  &__footer {
    padding: 50px 0;
  }
  
  &__header,
  &__footer {
    font-size: 26px;
    text-align: center;
    font-weight: 700;
  }

  &__page {
    display: flex;
    flex: 1;
  }
}
</style>
