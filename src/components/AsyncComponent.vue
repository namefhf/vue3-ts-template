<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const list = await new Promise((reslove) => {
  setTimeout(() => {
    reslove(Array.from({ length: 10 }, (_, index) => ({ id: index })));
  }, 2000);
});
</script>

<style lang="less" scoped></style>
