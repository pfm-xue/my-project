// src/main.js
import { createApp } from 'vue';
import CreatePage from './CreatePage.vue';
import router from '@/router/create'; // 引入路由

const app = createApp(CreatePage);
app.use(router); // 使用路由
app.mount('#app');