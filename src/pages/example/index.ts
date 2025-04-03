import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import 'tailwindcss/tailwind.css';
// Dialog
import 'vant/es/dialog/style';
// ImagePreview
import 'vant/es/image-preview/style';
// Notify
import 'vant/es/notify/style';
// Toast
import 'vant/es/toast/style';
import { sha, committer, commitMessage } from '~build/git';
import { name, version } from '~build/package';
import now from '~build/time';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

console.log(name);
console.log(version);
console.log(new Date(now).toLocaleString());
console.log(committer);
console.log(commitMessage);
console.log(sha);
createApp(App).use(router).use(pinia).use(VueQueryPlugin).mount('#app');
