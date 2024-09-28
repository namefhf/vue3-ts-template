import { createApp } from 'vue';
import 'tailwindcss/tailwind.css';

import App from './App.vue';
import Container from '@/components/Container.vue';

const app = createApp(App);
app.component('Container', Container);
app.mount('#app');
