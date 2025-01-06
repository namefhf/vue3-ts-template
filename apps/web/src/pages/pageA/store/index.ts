import { defineStore } from 'pinia';

const useStore = defineStore('store', {
  state() {
    return {
      count: 1,
    };
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export default useStore;
