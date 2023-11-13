import { createApp } from 'vue';
import '@unocss/reset/normalize.css';
import 'uno.css';
import App from './App.vue';
// Toast
import 'vant/es/toast/style';
// Dialog
import 'vant/es/dialog/style';
// Notify
import 'vant/es/notify/style';
// ImagePreview
import 'vant/es/image-preview/style';
import { Toast } from 'vant';

createApp(App).use(Toast).mount('#app');
import { omit } from 'lodash-es';
console.log(omit({ a: 1, b: 2 }, 'a'));
console.log(import.meta.env);
console.log('current env', import.meta.env.VITE_ENV_NAME);
