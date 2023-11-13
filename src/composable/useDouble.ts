import { ref } from "vue";
export default function useDouble(v: number) {
  const val = ref(v);
  const setDouble = function () {
    val.value = val.value * 2;
  };
  return {
    val,
    setDouble,
  };
}
