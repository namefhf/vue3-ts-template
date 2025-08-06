<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-3">Vue Multi Page Template</h1>
        <p class="text-lg text-gray-600">Total Pages: {{ pagesFiltered.length }}</p>
      </div>

      <!-- Pages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(page, index) in pagesFiltered"
          :key="index"
          :href="`${page.name}.html`"
          class="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {{ page.desc }}
            </h2>
            <p class="mt-2 text-sm text-gray-500 group-hover:text-blue-500">
              {{ `${page.name}.html` }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showLoading } from '@/components/Loading';
import { pageType } from '../../../pages.config';
import { pages } from '../../../pages.config';

const pagesFiltered = pages.filter((page: pageType) => page.name !== 'index');

showLoading({ duration: 1000 });
</script>

<style lang="less" scoped></style>
