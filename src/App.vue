<template>
  <!-- <input v-model="text" type="text" />
  {{ text }} -->
  <DefineModel v-model:count="count"></DefineModel>
  <router-view v-slot="{ Component }">
    <!-- <keep-alive> -->
    <component :is="Component"></component>
    <!-- </keep-alive> -->
  </router-view>
  <AppProvider> </AppProvider>
</template>
<script setup lang="ts">
import { type Ref } from 'vue';
import AppProvider from '@/components/AppProvider.vue';
import BPopup from '@/components/BPopup';
// import JSX from "@/components/JSX.vue";
import JSX from '@/components/jsx';
import Uno from '@/views/Uno.vue';
import debounceRef from '@/utils/debounceRef';
import DefineModel from './components/DefineModel.vue';
let msg = ref('hello jsx');
setTimeout(() => {
  msg.value = 'fuck';
}, 2000);
const show = ref(true);
const jsxRef = ref();
onMounted(() => {
  console.log(jsxRef);
  jsxRef.value?.show();
});
const count = ref(0);
const handleClick = (v: Ref<number>) => {
  console.log('触发子组件派发出来的onClick事件', v);
};

function onClickCloseIcon() {
  console.log('onClickCloseIcon');
  let a = 1;
  if (a !== 1) {
    console.log(1);
  }
}

const text = debounceRef('');
</script>

<style lang="less" scoped>
a {
  display: inline;
  width: 100px;
}
</style>
