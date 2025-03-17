<template>
  <!-- navPage.vue -->
  <div class="home-container">
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
    </main>
  </div>
</template>

<script>
export default {
  name: 'navPage',
  data() {
    return {
      navItems: [
        { title: '首　　页', path: '/Welcome' },
        { title: '用户列表', path: '/UserList' },
        { title: '服　　务', path: '/Services' },
        { title: '联　　系', path: '/Contact' },
        { title: '关　　于', path: '/About' },
      ]
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
</style>