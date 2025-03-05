// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';


// 导入组件
import navPage from '@/pages/nav/navPage.vue';
import Welcome from '@/views/Welcome.vue';
import About from '@/views/About.vue';

// 定义路由
const routes = [
  {
    path: '/', // 路径
    name: 'navPage', // 路由名称
    component: navPage, // 对应的组件
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
  
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;