<template>
  <div>
    <van-nav-bar title="pageA-About" left-arrow @click-left="router.back()"></van-nav-bar>
    <Container>about</Container>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped></style>
