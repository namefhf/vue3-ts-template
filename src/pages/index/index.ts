import { createApp } from 'vue';
import 'tailwindcss/tailwind.css';
import Container from '@/components/Container.vue';
import App from './App.vue';

const app = createApp(App);
app.component('Container', Container);
app.mount('#app');
