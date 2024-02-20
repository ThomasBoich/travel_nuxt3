<script lang="ts" setup>
const hello = ref('Привет накст!')
</script>

<template>
    <NuxtLoadingIndicator />
    <NuxtPage />
  <div>
    <h1>{{ hello }}</h1>
  </div>
</template>
<style>

</style>