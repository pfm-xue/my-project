// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';


// 导入组件
import LoginPage from '@/pages/login/LoginPage.vue';

// 定义路由
const routes = [
  {
    path: '/', // 路径
    name: 'LoginPage', // 路由名称
    component: LoginPage // 对应的组件
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;