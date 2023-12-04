<template>
  <div>home</div>
  <div style="height: 100vh"></div>
  <van-button type="primary" @click="handleClick"> go about </van-button>
  <van-button type="danger" @click="count++">
    {{ count }}
  </van-button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VHome',
});
import { useRouter } from 'vue-router';

const count = ref(0);
const router = useRouter();
function handleClick() {
  router.push({
    name: 'about',
    query: {
      a: 1,
    },
  });
}
</script>

<style scoped></style>
