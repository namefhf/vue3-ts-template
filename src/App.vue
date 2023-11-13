<template>
  <router-view v-slot="{ Component }">
    <!-- <keep-alive> -->
    <component :is="Component"></component>
    <!-- </keep-alive> -->
  </router-view>
  <AppProvider>
    <!-- <Uno ></Uno> -->
    <!-- <JSX :msg="msg" ref="jsxRef" @onClick="handleClick" /> -->
    <!-- <p>我是来自子组件的值=={{ count }}</p> -->
    <!-- <BPopup
      v-model:show="show"
      a="1"
      round
      position="bottom"
      :style="{
        padding: '20px',
      }"
      closeable
      @click-close-icon="onClickCloseIcon"
    >
      123123123
      <template #overlay-content>
        <div>overlay-content</div>
      </template>
    </BPopup> -->
    <!-- <FloatingBubble axis="xy" magnetic="x">
      123
    </FloatingBubble> -->
  </AppProvider>
</template>
<script setup lang="ts">
import { type Ref } from 'vue';
import AppProvider from '@/components/AppProvider.vue';
import BPopup from '@/components/BPopup';
// import JSX from "@/components/JSX.vue";
import JSX from '@/components/jsx';
import Uno from '@/views/Uno.vue';

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
</script>

<style lang="less" scoped></style>
