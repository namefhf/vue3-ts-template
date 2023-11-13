import { defineStore } from "pinia";
import { ref } from "vue";
export const useCountStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// export const useCountStore = defineStore("counter", () => {
//   const count = ref(0);
//   const increment = () => {
//     count.value++;
//   };
//   return {
//     count,
//     increment,
//   };
// });
