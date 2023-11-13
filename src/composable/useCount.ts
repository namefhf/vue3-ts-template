import { ref, watch } from "vue"

export const useCount = (num: number) => {
  const a = 1
  const count = ref<number>(num)
  const setCount = (v: number) => {
    count.value = v
  }

  watch(count, () => {
    console.log('count changed');
  })
  return {
    count,
    setCount
  }
};
