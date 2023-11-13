<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    // return () => slots.default?.()
    return () => slots.default?.();
  },
});
</script>
