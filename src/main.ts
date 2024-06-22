import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@unocss/reset/normalize.css';
import 'uno.css';

import router from './router';
// Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法解析自动注册组件，导致 @vant/auto-import-resolver 无法解析样式，因此需要手动引入样式
// Toast
import 'vant/es/toast/style';

// Dialog
import 'vant/es/dialog/style';

// Notify
import 'vant/es/notify/style';

// ImagePreview
import 'vant/es/image-preview/style';

import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App);
app.use(router).use(pinia).mount('#app');
