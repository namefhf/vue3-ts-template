<template>
  <div>
    <van-nav-bar title="pageA-Home" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <Container>
      <div class="flex flex-col items-center gap-2 pt-5">
        <van-button style="width: 200px" @click="router.push({ name: 'pinia' })">to pinia demo</van-button>
        <van-button style="width: 200px" @click="router.push({ name: 'about' })">to about</van-button>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
function onClickLeft() {
  history.back();
}
</script>

<style scoped></style>
