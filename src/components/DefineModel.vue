<template>
  <div>
    <h3>defineModel</h3>
    <van-button @click="count++">修改{{ count }}</van-button>
  </div>
</template>

<script setup lang="ts">
const count = defineModel<number>('count', { required: true });
</script>

<style scoped></style>
