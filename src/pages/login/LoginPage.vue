<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">账号：</label>
        <input
          type="text"
          id="username"
          v-model="form.username"
          placeholder="请输入账号"
        />
      </div>

      <div class="form-group">
        <label for="password">密码：</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </div>

      <div class="button-group">
        <button type="submit" class="btn login-btn">登录</button>
        <button type="button" class="btn register-btn" @click="handleRegister">
          注册
        </button>
      </div>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </form>
    <!-- 路由视图 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    handleLogin() {
      // 简单的表单验证
      if (!this.form.username || !this.form.password) {
        this.errorMessage = '账号和密码不能为空'
        return
      }

      // 这里可以添加实际的登录逻辑
      // console.log('登录信息：', this.form)
      // this.errorMessage = ''
      
      //this.$router.push('/HelloWorld')
      window.location.href = '/nav.html';
    },
    handleRegister() {
      // 跳转到注册页面
      window.location.href = '/create.html';
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #666;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #409eff;
  box-shadow: 0 0 8px rgba(64, 158, 255, 0.2);
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.login-btn {
  background-color: #409eff;
  color: white;
}

.login-btn:hover {
  background-color: #66b1ff;
}

.register-btn {
  background-color: #67c23a;
  color: white;
}

.register-btn:hover {
  background-color: #85ce61;
}

.error-message {
  color: #f56c6c;
  margin-top: 15px;
  font-size: 12px;
  text-align: center;
}
</style>