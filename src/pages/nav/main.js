// src/main.js
import { createApp } from 'vue';
import navPage from './navPage.vue';
import router from '@/router/nav'; // 引入路由

const app = createApp(navPage);
app.use(router); // 使用路由
app.mount('#app');