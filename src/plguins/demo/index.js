import demo from '../../views/Demo';
import { h, render } from 'vue';

export default {
  show() {
    const vNode = h(demo);
    console.log(vNode);
    const el = document.createElement('div');
    el.className = 'demo';
    document.body.append(el);
    render(vNode, el);
  },
};
