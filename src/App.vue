<template>
  <router-view v-slot="{ Component }">
    <!-- <keep-alive> -->
    <component :is="Component"></component>
    <!-- </keep-alive> -->
  </router-view>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
a {
  display: inline;
  width: 100px;
}
</style>
