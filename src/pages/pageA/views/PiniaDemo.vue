<template>
  <div>
    <p>pinia demo</p>
    <button @click="handleClick">{{ store.count }}</button>
    double:{{ store.double }}
    <div>
      <button @click="store.$reset()">reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from '@/pages/pageA/store';
import { storeToRefs } from 'pinia';

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
