<template>
  <div>about=={{ a }}</div>
  <van-button type="primary" @click="$router.back()"> back </van-button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VAbout',
});
import { useRoute } from 'vue-router';
const route = useRoute();
const {
  query: { a },
} = route;
</script>

<style scoped></style>
