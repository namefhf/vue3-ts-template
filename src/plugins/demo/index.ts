import demo from '../../views/Demo';
import { h, render } from 'vue';

export default {
  show() {
    const vNode = h(demo, { msg: '1231' });
    console.log(vNode);
    const el = document.createElement('div');
    document.body.append(el);
    render(vNode, el);
  },
};
