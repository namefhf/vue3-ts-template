import { render, h } from 'vue';
import Loading from './Loading.vue';

interface LoadingOptions {
  duration: number;
}

function showLoading(options: LoadingOptions) {
  const vNode = h(Loading, {
    message: 'message',
  });
  console.error(vNode);
  const container = document.createElement('div');
  render(vNode, container);
  document.body.appendChild(container);

  vNode.props = {
    ...vNode.props,
    onClose: () => {
      console.error('onClose');
      close();
    },
  };

  function close() {
    render(null, container);
    document.body.removeChild(container);
  }

  if (options.duration) {
    setTimeout(() => {
      close();
    }, options.duration);
  }

  return {
    close,
  };
}
export { showLoading };
