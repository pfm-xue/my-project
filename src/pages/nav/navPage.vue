<template>
  <!-- navPage.vue -->
  <div class="home-container">
    <!-- 头部导航栏 -->
    <nav class="header-nav">
      <div class="header-title">用户管理系统</div>
      <button class="logout-btn" @click="showModal = true">退出登录</button>
    </nav>
    <!-- 右侧导航栏 -->
    <nav class="right-nav">
      <router-link 
        v-for="item in navItems" 
        :key="item.path" 
        :to="item.path"
        class="nav-link"
        active-class="active"
      >
        {{ item.title }}
      </router-link>
    </nav>

    <!-- 页面内容区域 -->
    <main class="content">
      <router-view></router-view>
      <!-- 自定义确认弹窗 -->
      <div v-if="showModal" class="modal-mask">
        <div class="modal-content">
          <h3>确认退出</h3>
          <p>确定要退出当前账号吗？</p>
          <div class="modal-actions">
            <button @click="showModal = false">取消</button>
            <button @click="confirmLogout">确定退出</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'navPage',
  data() {
    return {
      showModal: false, // 自定义确认弹窗
      navItems: [
        { title: '首　　页', path: '/Welcome' },
        { title: '用户列表', path: '/UserList' },
        { title: '服　　务', path: '/Services' },
        { title: '联　　系', path: '/Contact' },
        { title: '关　　于', path: '/About' },
      ]
    }
  },
  methods: {
    confirmLogout() {
      this.showModal = false;
      this.performLogout();
    },
    performLogout() {
      // 跳转登录页
      window.location.href = '/login.html';
    },
    handleLogout() {
      if (confirm('确定要退出系统吗？')) {
            alert('退出成功，即将跳转到登录页');
            window.location.href = '/login'; // 模拟页面跳转
          }
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  min-height: 100vh;
}

.right-nav {
  width: 200px;
  background: #f5f5f5;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.nav-link {
  padding: 12px 20px;
  margin: 8px 0;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: all 0.3s;
  width: 100%;
  text-align: right;
}

.nav-link:hover {
  background: #e8e8e8;
}

.active {
  background: #409eff;
  color: white;
}

.content {
  flex: 1;
  padding: 30px;
  background: white;
}

/* 新增导航栏样式 */
.header-nav {
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.header-title {
  font-size: 1.5em;
  color: #2c3e50;
}

.logout-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background: #c0392b;
}

/* 调整原有表格间距 */
.user-table {
  margin-top: 80px; /* 为导航栏留出空间 */
}

/* 调整原有表格间距 */
.user-table {
  margin-top: 80px; /* 为导航栏留出空间 */
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 320px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-content h3 {
  margin: 0 0 16px;
  color: #333;
}

.modal-actions {
  margin-top: 20px;
  text-align: right;
}

.modal-actions button {
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-actions button:first-child {
  background-color: #f0f0f0;
  color: #666;
}

.modal-actions button:last-child {
  background-color: #ff4444;
  color: white;
}
</style>