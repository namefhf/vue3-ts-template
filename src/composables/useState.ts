import type { MaybeRefOrGetter, Ref, DeepReadonly } from 'vue';
import { ref, toValue, readonly } from 'vue';

function useState<T>(initialValue: MaybeRefOrGetter<T>): [DeepReadonly<Ref<T>>, (value: T) => void] {
  const state = ref(toValue(initialValue)) as Ref<T>;

  const setState = (value: T) => {
    state.value = value;
  };

  return [readonly(state), setState];
}
export default useState;
