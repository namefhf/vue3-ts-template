import type { MaybeRefOrGetter, Ref, DeepReadonly } from 'vue';
import { ref, toValue, readonly as VueReadonly } from 'vue';

interface Options {
  readonly?: boolean;
  shallow?: boolean;
}

type StateReturn<T, O extends Options> = [
  O['readonly'] extends true ? DeepReadonly<Ref<T>> : Ref<T>,
  (value: T) => void,
];

function useState<T, O extends Options = Options>(initialValue: MaybeRefOrGetter<T>, options?: O): StateReturn<T, O> {
  const { readonly = true, shallow = false } = options || {};
  const state = shallow ? shallowRef(toValue(initialValue)) : (ref(toValue(initialValue)) as Ref<T>);

  const setState = (value: T) => {
    state.value = value;
  };

  return [readonly ? VueReadonly(state) : state, setState] as StateReturn<T, O>;
}
export default useState;
