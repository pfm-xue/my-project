// src/main.js
import { createApp } from 'vue';
import LoginPage from './LoginPage.vue';
import router from '@/router/login'; // 引入路由

const app = createApp(LoginPage);
app.use(router); // 使用路由
app.mount('#app');