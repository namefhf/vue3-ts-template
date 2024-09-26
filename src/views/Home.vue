<template>
  <div class="home-container h-100vh flex flex-col items-center justify-center">
    <ul>
      <li v-for="(page, index) in pagesFiltered" :key="index" class="page-item m-2 p-1 w-20 text-center">
        <a :href="`${page.name}.html`"> {{ page.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { pages } from '../../pages.config';
const pagesFiltered = pages.filter((page) => page.name !== 'index');
</script>

<style lang="less" scoped>
.home-container {
  background-color: #dbd7caee;
}

.page-item {
  border-radius: 10px;
  background-color: #f6f6f7;

  a {
    color: #4d9375;
  }
}
</style>
