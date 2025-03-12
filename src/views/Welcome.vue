<template>
  <div class="welcome-page">
    <h1>欢迎来到系统</h1>
    <p>请使用左侧导航栏访问功能</p>

    <button class="logout-btn" @click="showModal = true">
      退出登录
    </button>

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
  </div>
</template>

<script>
export default {
  name: 'LogoutButton',
  data() {
    return {
      showModal: false
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
    }
  }
}
</script>

<style scoped>
.welcome-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
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