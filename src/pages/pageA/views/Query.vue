<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';

const router = useRouter();

const { data, isPending } = useQuery({
  queryKey: ['repoData'],
  queryFn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Array.from({ length: 4 }, (_, index) => ({ index })));
      }, 3000);
    });
  },
});
</script>

<template>
  <div>
    <!-- <VueQueryDevtools /> -->
    <van-nav-bar title="query-demo" left-arrow @click-left="router.back()"></van-nav-bar>
    <Container>
      <div class="flex flex-col items-center">
        <p v-if="isPending">pending</p>
        {{ data }}
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped></style>
