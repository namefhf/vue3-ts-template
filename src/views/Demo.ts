import { h, render } from 'vue';

export default {
  props: {
    msg: {
      type: String,
      default: 'msg',
    },
  },
  render(props: Record<string, any>) {
    return h('h1', props.msg);
  },
};
