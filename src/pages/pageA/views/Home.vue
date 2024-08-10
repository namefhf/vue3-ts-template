<template>
  <div>
    <p>pageA===Home</p>
    <button @click="router.push({ name: 'about' })">to about</button>
    <button @click="router.push({ name: 'pinia' })">to pinia demo</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped></style>
