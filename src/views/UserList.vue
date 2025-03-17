<template>
  <div class="user-list-container">
    <!-- 标题和操作栏 -->
    <div class="list-header">
      <h2>用户列表</h2>
      <button 
        @click="refreshData"
        :disabled="loading"
        class="refresh-btn"
      >
        <span v-if="!loading">刷新数据</span>
        <span v-else>加载中...</span>
      </button>
    </div>

    <!-- 数据表格 -->
    <div class="table-wrapper">
      <table v-if="users.length > 0">
        <thead>
          <tr>
            <th>番号</th>
            <th>用户名</th>
            <th>创建时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ (pagination.page - 1) * pagination.limit + index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ formatDate(user.created_at) }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 空状态 -->
      <div v-else class="empty-state">
        <img src="@/assets/empty.svg" alt="暂无数据">
        <p>暂无用户数据</p>
      </div>
    </div>

    <!-- 分页组件 -->
    <div class="pagination" v-if="pagination.totalPages > 1">
      <button 
        @click="changePage(pagination.page - 1)"
        :disabled="pagination.page === 1"
      >
        上一页
      </button>
      <span>第 {{ pagination.page }} 页 / 共 {{ pagination.totalPages }} 页</span>
      <button 
        @click="changePage(pagination.page + 1)"
        :disabled="pagination.page === pagination.totalPages"
      >
        下一页
      </button>
    </div>

    <!-- 错误提示 -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      loading: false,
      errorMessage: '',
      pagination: {
        page: 1,
        limit: 2,
        total: 0,
        totalPages: 1
      }
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    // 获取数据
    async fetchData() {
      try {
        this.loading = true;
        this.errorMessage = '';

        const response = await axios.get(`http://localhost:5000/api/auth/getUsers`, {
          params: {
            page: this.pagination.page,
            limit: this.pagination.limit
          }
        });

        this.users = response.data.data;
        this.pagination = {
          ...this.pagination,
          total: response.data.pagination.total,
          totalPages: response.data.pagination.totalPages
        };

      } catch (error) {
        this.errorMessage = error.response?.data?.error || '数据加载失败';
        console.error('数据加载错误:', error);
      } finally {
        this.loading = false;
      }
    },

    // 刷新数据
    refreshData() {
      this.pagination.page = 1;
      this.fetchData();
    },

    // 切换分页
    changePage(newPage) {
      if (newPage < 1 || newPage > this.pagination.totalPages) return;
      this.pagination.page = newPage;
      this.fetchData();
    },

    // 格式化日期
    formatDate(dateString) {
      return dayjs(dateString).format('YYYY/MM/DD');
    }
  }
};
</script>

<style scoped>
.user-list-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.refresh-btn {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.refresh-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.table-wrapper {
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background: #f8f9fa;
  font-weight: 600;
}

tr:hover {
  background-color: #f5f5f5;
}

.empty-state {
  padding: 4rem;
  text-align: center;
}

.empty-state img {
  width: 200px;
  margin-bottom: 1rem;
}

.pagination {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.error-message {
  padding: 1rem;
  background: #f8d7da;
  color: #721c24;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
}
</style>