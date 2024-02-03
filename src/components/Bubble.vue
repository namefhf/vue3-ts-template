<template>
  <div
    ref="bubbleRef"
    class="bubble-wrap"
    :style="styled"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleClick"
  ></div>
</template>

<script setup lang="ts">
const state = reactive({
  x: 0,
  y: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  width: 0,
  height: 0,
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  isDragging: false,
});

const boundary = computed(() => ({
  right: state.windowWidth - state.width,
  left: 0,
  top: 0,
  bottom: state.windowHeight - state.height,
}));
const bubbleRef = ref<HTMLElement>();
function updateState() {
  const { width, height } = bubbleRef.value?.getBoundingClientRect() || { x: 0, y: 0, width: 0, height: 0 };
  state.x = state.windowWidth - width;
  state.y = state.windowHeight - height;
  state.width = width;
  state.height = height;
}

onMounted(() => {
  updateState();
});
const styled = computed(() => ({
  transform: `translate(${state.x}px,${state.y}px)`,
  transition: state.isDragging ? 'none' : 'all ease 0.5s',
}));

let prevX = 0;
let prevY = 0;
function handleTouchStart(e: TouchEvent) {
  // console.log('start', e);

  state.startX = e.touches[0]?.clientX || 0;
  state.startY = e.touches[0]?.clientY || 0;

  prevX = state.x;
  prevY = state.y;
}

function handleTouchMove(e: TouchEvent) {
  // console.log('move', e);
  e.preventDefault();
  state.isDragging = true;
  const touch = e.touches[0] || { clientX: 0, clientY: 0 };
  state.deltaX = touch.clientX - state.startX;
  state.deltaY = touch.clientY - state.startY;

  let nextX = prevX + state.deltaX;
  let nextY = prevY + state.deltaY;
  if (nextX < boundary.value.left) {
    nextX = boundary.value.left;
  }
  if (nextX > boundary.value.right) {
    nextX = boundary.value.right;
  }
  if (nextY < boundary.value.top) {
    nextY = boundary.value.top;
  }
  if (nextY > boundary.value.bottom) {
    nextY = boundary.value.bottom;
  }
  state.x = nextX;
  state.y = nextY;
}

function handleTouchEnd(e: TouchEvent) {
  // console.log('end', e);
  state.isDragging = false;
  if (Math.abs(state.x - boundary.value.left) < Math.abs(state.x - boundary.value.right)) {
    state.x = boundary.value.left;
  } else {
    state.x = boundary.value.right;
  }
}

function handleClick(e: Event) {
  console.log('handleClick');
  e.stopPropagation();
}
</script>

<style lang="less" scoped>
.bubble-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 100%;
  cursor: pointer;
}
</style>
