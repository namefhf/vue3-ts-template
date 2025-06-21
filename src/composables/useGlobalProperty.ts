import { getCurrentInstance } from 'vue';

export default function useGlobalProperty<T>(key: string): T | undefined {
  const globalProperties = getCurrentInstance()?.appContext.config.globalProperties;
  return globalProperties ? (globalProperties[key] as T) : undefined;
}
