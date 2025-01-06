<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <p class="mb-2 text-xl font-extrabold text-[#09090B]">Vue multi page template</p>
    <div class="text-slate-500">total:{{ pagesFiltered.length }}</div>
    <ul>
      <li
        v-for="(page, index) in pagesFiltered"
        :key="index"
        class="m-2 w-40 rounded-lg border-2 border-solid border-gray-100 p-1 text-center"
      >
        <a :href="`${page.name}.html`">
          <p class="text-[#09090B]">{{ page.desc }}</p>
          <p class="text-neutral-500">{{ `${page.name}.html` }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { pages } from '../../../pages.config';

const pagesFiltered = pages.filter((page) => page.name !== 'index');
</script>

<style lang="less" scoped></style>
