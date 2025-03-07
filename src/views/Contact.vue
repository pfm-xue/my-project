<template>
    <div class="contact-page">
      <h1>联系我们</h1>
      <div class="contact-info">
        <div class="contact-item">
          <span class="label">邮箱地址：</span>
          <a href="mailto:Email@pfm-techl.com">Email@pfm-techl.com</a>
        </div>
        <div class="contact-item">
          <span class="label">联系电话：</span>
          <a href="tel:0411-86666666">0411-86666666</a>
        </div>
        <div class="contact-item">
          <span class="label">联系地址：</span>
          <span>中国辽宁省大连市沙河口区东软软件园服务中心-C1栋</span>
        </div>
      </div>
  
      <!-- 百度地图显示 -->
      <div class="map-container">
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          style="border: 0"
          :src="baiduMapUrl"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        // 百度地图嵌入 URL
        baiduMapUrl:
          'https://j.map.baidu.com/46/00N' // 百度地图嵌入 URL  
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  .contact-info {
    margin-bottom: 30px;
  }
  
  .contact-item {
    margin-bottom: 15px;
    font-size: 16px;
  }
  
  .label {
    font-weight: bold;
    color: #555;
  }
  
  a {
    color: #42b983;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .map-container {
    margin-top: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  </style>