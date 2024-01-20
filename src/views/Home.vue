<template>
  <div>home</div>
  <van-button type="primary" @click="handleClick"> go about </van-button>
  <van-button type="danger" @click="addCount">
    {{ count }}
  </van-button>
  <Suspense>
    <AsyncComponent></AsyncComponent>
    <template #fallback> loading... </template>
  </Suspense>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VHome',
});

import AsyncComponent from '@/components/AsyncComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { count, addCount } = useCount();

function useCount() {
  const count = ref(0);

  const addCount = () => {
    count.value++;
  };

  watch(count, () => {
    console.log(111);
  });

  return {
    count,
    addCount,
  };
}

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
