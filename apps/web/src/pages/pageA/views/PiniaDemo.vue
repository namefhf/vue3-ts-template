<template>
  <div>
    <van-nav-bar title="pinia-demo" left-arrow @click-left="router.back()"></van-nav-bar>
    <Container>
      <div class="flex flex-col items-center gap-2">
        <van-button type="primary" @click="handleClick">+{{ store.count }}</van-button>
        double:{{ store.double }}
        <div>
          <van-button type="warning" @click="store.$reset()">reset</van-button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import useStore from '@/pages/pageA/store';
import { storeToRefs } from 'pinia';

const router = useRouter();
const store = useStore();

// lose reactive
// const { count } = store;

// keep reactive
const { count } = storeToRefs(store);

// action can spread directly
const { increment } = store;

function handleClick() {
  // store.count++;
  // store.$patch({ count: store.count + 1 });
  increment();
}

store.$subscribe((mutation, state) => {
  console.log(mutation, state);
});
</script>

<style scoped></style>
