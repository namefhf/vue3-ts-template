import type { MaybeRefOrGetter, Ref, DeepReadonly } from 'vue';
import { ref, toValue, readonly as VueReadonly } from 'vue';

interface Options {
  readonly?: boolean;
  shallow?: boolean;
}

function useState<T>(initialValue: MaybeRefOrGetter<T>, options?: Options): [DeepReadonly<Ref<T>>, (value: T) => void] {
  const { readonly = true, shallow = false } = options || {};
  const state = shallow ? shallowRef(toValue(initialValue)) : (ref(toValue(initialValue)) as Ref<T>);

  const setState = (value: T) => {
    state.value = value;
  };

  return [readonly ? VueReadonly(state) : state, setState];
}
export default useState;
