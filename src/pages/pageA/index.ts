import { createApp } from 'vue';
import 'tailwindcss/tailwind.css';
import App from './App.vue';
import router from './router';
import { name, version } from '~build/package';
import now from '~build/time';
import { sha, committer, commitMessage } from '~build/git';
import { createPinia } from 'pinia';
const pinia = createPinia();
import { VueQueryPlugin } from '@tanstack/vue-query';
// Toast
import 'vant/es/toast/style';

// Dialog
import 'vant/es/dialog/style';

// Notify
import 'vant/es/notify/style';

// ImagePreview
import 'vant/es/image-preview/style';

console.log(name);
console.log(version);
console.log(new Date(now).toLocaleString());
console.log(committer);
console.log(commitMessage);
console.log(sha);
createApp(App).use(router).use(pinia).use(VueQueryPlugin).mount('#app');
