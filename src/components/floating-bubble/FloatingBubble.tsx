import { CSSProperties } from 'vue';
import { useTouch } from './useTouch';
import { useRect, useEventListener } from '@vant/use';
export function closest(arr: number[], target: number) {
  return arr.reduce((pre, cur) => (Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur));
}
export default defineComponent({
  name: 'FloatingBubble',
  inheritAttrs: false,
  props: {
    gap: {
      type: Number,
      default: 24,
    },
    axis: {
      type: String,
      default: 'y',
      validate: (v: string) => ['x', 'y', 'xy'].includes(v),
    },
    magnetic: {
      type: String,
      default: 'x',
    },
    offset: {
      type: Object,
      default: () => ({ x: -1, y: -1 }),
    },
  },
  emits: ['update:offset', 'offsetChange', 'click'],
  setup(props, { slots, attrs, emit }) {
    const rootRef = ref<HTMLDivElement>();
    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);
    const state = ref({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

    // 边界
    const boundary = computed(() => ({
      top: props.gap,
      right: windowWidth.value - state.value.width - props.gap,
      bottom: windowHeight.value - state.value.height - props.gap,
      left: props.gap,
    }));

    const dragging = ref(false);
    let initialized = false;
    const show = ref(true);

    const rootStyle = computed(() => {
      const style: CSSProperties = {};
      const x = `${state.value.x}px`;
      const y = `${state.value.y}px`;
      style.transform = `translate3d(${x},${y},0)`;
      style.width = '50px';
      style.height = '50px';
      style.transition = 'all ease-in-out .5s';
      if (dragging.value || !initialized) {
        style.transition = 'none';
      }
      return style;
    });

    const updateState = () => {
      // onDeactivated with window size change will cause this
      if (!show.value) return;

      const { width, height } = useRect(rootRef.value!);
      const { offset } = props;
      state.value = {
        x: offset.x > -1 ? offset.x : windowWidth.value - width - props.gap,
        y: offset.y > -1 ? offset.y : windowHeight.value - height - props.gap,
        width,
        height,
      };
    };

    const touch = useTouch();
    let prevX = 0;
    let prevY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touch.start(e);
      dragging.value = true;

      prevX = state.value.x;
      prevY = state.value.y;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      console.error('onTouchMove');
      touch.move(e);

      if (props.axis === 'lock') return;

      if (!touch.isTap.value) {
        if (props.axis === 'x' || props.axis === 'xy') {
          let nextX = prevX + touch.deltaX.value;
          if (nextX < boundary.value.left) nextX = boundary.value.left;
          if (nextX > boundary.value.right) nextX = boundary.value.right;
          state.value.x = nextX;
        }

        if (props.axis === 'y' || props.axis === 'xy') {
          let nextY = prevY + touch.deltaY.value;
          if (nextY < boundary.value.top) nextY = boundary.value.top;
          if (nextY > boundary.value.bottom) nextY = boundary.value.bottom;
          state.value.y = nextY;
        }

        // const offset = pick(state.value, ["x", "y"]);
        const offset = {
          x: state.value.x,
          y: state.value.y,
        };
        emit('update:offset', offset);
      }
    };

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchMove, {
      target: rootRef,
    });
    const onTouchEnd = () => {
      dragging.value = false;

      nextTick(() => {
        if (props.magnetic === 'x') {
          const nextX = closest([boundary.value.left, boundary.value.right], state.value.x);
          state.value.x = nextX;
        }
        if (props.magnetic === 'y') {
          const nextY = closest([boundary.value.top, boundary.value.bottom], state.value.y);
          state.value.y = nextY;
        }

        if (!touch.isTap.value) {
          // const offset = pick(state.value, ["x", "y"]);
          const offset = {
            x: state.value.x,
            y: state.value.y,
          };
          emit('update:offset', offset);
          if (prevX !== offset.x || prevY !== offset.y) {
            emit('offsetChange', offset);
          }
        }
      });
    };
    const onClick = (e: MouseEvent) => {
      if (touch.isTap.value) emit('click', e);
      else e.stopPropagation();
    };
    onMounted(() => {
      updateState();
      nextTick(() => {
        initialized = true;
      });
    });

    watch([windowWidth, windowHeight, () => props.gap, () => props.offset], updateState);

    onActivated(() => {
      show.value = true;
    });

    onDeactivated(() => {
      // if (props.teleport) {
      //   show.value = false;
      // }
    });
    return () => (
      <div
        style={rootStyle.value}
        ref={rootRef}
        onTouchstart={onTouchStart}
        onTouchend={onTouchEnd}
        onTouchcancel={onTouchEnd}
        onClick={onClick}
        v-show={show.value}
        {...attrs}
      >
        {slots.default && slots.default()}
      </div>
    );
  },
});
