import { Popup as VanPopup } from 'vant';
import 'vant/es/popup/style';
export default defineComponent({
  name: 'BPopup',
  inheritAttrs: false,
  setup(props, ctx) {
    console.log(ctx);
    return () => (
      <div>
        <VanPopup {...ctx.attrs}>{{ ...ctx.slots }}</VanPopup>
      </div>
      //  <VanPopup>{{ ...ctx.slots }}</VanPopup>
    );
  },
});
