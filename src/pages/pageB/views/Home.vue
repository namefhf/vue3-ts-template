<template>
  <div>
    <p>pageB===Home</p>
    <button @click="$router.push({ name: 'about' })">to about</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
