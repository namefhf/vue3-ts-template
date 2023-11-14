import { customRef } from 'vue';

/**
 *防抖
 *
 * @param {*} value
 * @param {number} [delay=1000]
 * @return {*}
 */
const debounceRef = function (value: any, delay = 1000) {
  let timer: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(v) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = v;
          trigger();
        }, delay);
      },
    };
  });
};
export default debounceRef;
