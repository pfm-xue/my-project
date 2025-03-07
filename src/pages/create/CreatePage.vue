<template>
    <div class="register-container">
      <h2>用户注册</h2>
      <form @submit.prevent="handleRegister">
        <!-- 用户名 -->
        <div class="form-group">
          <label for="username">用户名：</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            placeholder="请输入用户名"
            @input="validateField('username')"
          />
          <div v-if="errorMessages.username" class="error-message">
            {{ errorMessages.username }}
          </div>
        </div>
  
        <!-- 邮箱 -->
        <div class="form-group">
          <label for="email">邮箱：</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="请输入邮箱"
            @input="validateField('email')"
          />
          <div v-if="errorMessages.email" class="error-message">
            {{ errorMessages.email }}
          </div>
        </div>
  
        <!-- 密码 -->
        <div class="form-group">
          <label for="password">密码：</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="form.password"
              placeholder="请输入密码"
              @input="validateField('password')"
            />
            <button
              type="button"
              class="toggle-password"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '隐藏' : '显示' }}
            </button>
          </div>
          <div class="password-requirements">
            密码要求：
            <ul>
              <li :class="{ valid: hasLowerCase }">至少一个小写字母</li>
              <li :class="{ valid: hasUpperCase }">至少一个大写字母</li>
              <li :class="{ valid: hasNumber }">至少一个数字</li>
              <li :class="{ valid: hasMinLength }">至少6位字符</li>
            </ul>
          </div>
        </div>
  
        <!-- 确认密码 -->
        <div class="form-group">
          <label for="confirmPassword">确认密码：</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="confirmPassword"
            v-model="form.confirmPassword"
            placeholder="请再次输入密码"
            @input="validateField('confirmPassword')"
          />
          <div v-if="errorMessages.confirmPassword" class="error-message">
            {{ errorMessages.confirmPassword }}
          </div>
        </div>
  
        <button type="submit" class="submit-btn">
        立即注册
      </button>

      <!-- 反馈消息 -->
      <div v-if="message" :class="['message', message.type]">
        {{ message.text }}
      </div>

      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    name: 'CreatePage',
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        errorMessages: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        showPassword: false
      }
    },
    computed: {

      // 密码复杂度验证
      hasLowerCase() {
        return /[a-z]/.test(this.form.password)
      },
      hasUpperCase() {
        return /[A-Z]/.test(this.form.password)
      },
      hasNumber() {
        return /\d/.test(this.form.password)
      },
      hasMinLength() {
        return this.form.password.length >= 6
      }
    },
    methods: {
      validateField(field) {
        switch (field) {
          case 'username':
            this.errorMessages.username = this.form.username ? '' : '用户名不能为空'
            break
          case 'email':
            this.validateEmail()
            break
          case 'password':
            this.validatePassword()
            this.validateConfirmPassword() // 同时验证确认密码
            break
          case 'confirmPassword':
            this.validateConfirmPassword()
            break
        }
      },
  
      validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!this.form.email) {
          this.errorMessages.email = '邮箱不能为空'
        } else if (!emailRegex.test(this.form.email)) {
          this.errorMessages.email = '邮箱格式不正确'
        } else {
          this.errorMessages.email = ''
        }
      },
  
      validatePassword() {
        if (!this.form.password) {
          this.errorMessages.password = '密码不能为空'
        } else if (!this.hasLowerCase || !this.hasUpperCase || !this.hasNumber || !this.hasMinLength) {
          this.errorMessages.password = '密码不符合复杂度要求'
        } else {
          this.errorMessages.password = ''
        }
      },
  
      validateConfirmPassword() {
        if (!this.form.confirmPassword) {
          this.errorMessages.confirmPassword = '请确认密码'
        } else if (this.form.password !== this.form.confirmPassword) {
          this.errorMessages.confirmPassword = '两次输入的密码不一致'
        } else {
          this.errorMessages.confirmPassword = ''
        }
      },
  
      validateForm() {
        this.validateField('username')
        this.validateEmail()
        this.validatePassword()
        this.validateConfirmPassword()
  
        return Object.values(this.errorMessages).every(msg => msg === '')
      },
  
    // 提交注册
    async handleRegister() {

      this.loading = true;
      this.message = null;

      try {
        await axios.post('http://localhost:5000/api/auth/register', {
          username: this.form.username,
          password: this.form.password
        });

        window.location.href = '/nav.html';

      } catch (error) {
        const errorMessage = error.response?.data?.error || '注册失败，请稍后重试';
        this.showMessage('error', errorMessage);
      } finally {
        this.loading = false;
      }
    },

    }
  }
  </script>
  
  <style scoped>
  .register-container {
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
  
  .password-input {
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 12px;
  }
  
  .password-requirements {
    margin-top: 8px;
    font-size: 12px;
    color: #666;
  }
  
  .password-requirements ul {
    list-style: none;
    padding-left: 20px;
    margin: 5px 0;
  }
  
  .password-requirements li {
    position: relative;
    color: #f56c6c;
  }
  
  .password-requirements li:before {
    content: '✖';
    position: absolute;
    left: -15px;
  }
  
  .password-requirements li.valid {
    color: #67c23a;
  }
  
  .password-requirements li.valid:before {
    content: '✓';
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #67c23a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #85ce61;
  }
  
  .error-message {
    color: #f56c6c;
    font-size: 12px;
    margin-top: 5px;
  }
  </style>