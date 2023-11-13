import { Button as VanButton } from 'vant';
import { Popup as VanPopup } from 'vant';
import 'vant/es/button/style';
import 'vant/es/popup/style';
import { showToast } from 'vant';
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    console.log(ctx);
    const { expose, emit } = ctx;
    // showToast("提示内容");
    const count = ref<number>(0);
    const handleClick = () => {
      count.value++;
      emit('onClick', count);
    };
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 2000);

    const show = () => {
      console.log('show method from jsx component');
    };

    /**
     * 暴露出去 让父组件能够通过ref访问
     */
    expose({
      show,
      loading,
    });
    const visible = ref(false);
    return () => (
      <div class="bg-gray">
        <p>我是jsx语法写的组件！</p>
        <h1>{props.msg}</h1>
        <VanButton type={'warning'} onClick={handleClick} loading={loading.value}>
          add
        </VanButton>
        <p>{count.value}</p>

        <VanPopup
          closeable
          show={visible.value}
          onUpdate:show={($event: boolean) => (visible.value = $event)}
          position="bottom"
          round
          style={{ padding: '64px' }}
        >
          内容
        </VanPopup>
      </div>
    );
  },
});
