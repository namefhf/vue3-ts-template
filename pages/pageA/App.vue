<template>
  <div>
    <div>page A</div>
    <Child></Child>
    <van-button type="success" @click="add"> 成功按钮{{ count }} </van-button>
  </div>
</template>
<script setup lang="ts">
import img from '@/assets/img.png';
import { ref, watch, computed, toValue } from 'vue';
import { showToast } from 'vant';
import { whenever } from '@vueuse/core';
import Child from './components/Child.vue';
import { showLoadingToast, closeToast } from 'vant';

const count = ref(0);

const add = () => {
  count.value++;
};

const useAlert = (getters: unknown) => {
  getters &&
    whenever(
      () => toValue(getters),
      () => {
        showToast('提示内容');
      },
    );
};
useAlert(() => count.value % 5 === 0);
// useAlert(computed(() => count.value % 5 === 0));
</script>

<style lang="less" scoped>
div {
  color: @orange;
}

:deep(.child-wrap) {
  background: red;

  span {
    color: black;
  }
}
</style>
