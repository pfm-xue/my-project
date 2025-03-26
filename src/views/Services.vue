<template>
    <div class="service-page">
      <h1>AI 服务推荐</h1>
      <div class="service-list">
        <!-- OpenAI -->
        <div class="service-item">
          <h2>OpenAI</h2>
          <p>
            OpenAI 提供强大的自然语言处理模型,如 GPT-3 和 GPT-4,适用于文本生成、翻译、问答等场景。
          </p>
          <a href="https://openai.com" target="_blank" rel="noopener noreferrer">访问 OpenAI</a>
        </div>
  
        <!-- TensorFlow -->
        <div class="service-item">
          <h2>TensorFlow</h2>
          <p>
            TensorFlow 是由 Google 开发的开源机器学习框架,支持深度学习模型的训练和部署。
          </p>
          <a href="https://www.tensorflow.org" target="_blank" rel="noopener noreferrer">访问 TensorFlow</a>
        </div>
  
        <!-- Hugging Face -->
        <div class="service-item">
          <h2>Hugging Face</h2>
          <p>
            Hugging Face 提供丰富的预训练模型和数据集,支持自然语言处理、计算机视觉等任务。
          </p>
          <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer">访问 Hugging Face</a>
        </div>
  
        <!-- IBM Watson -->
        <div class="service-item">
          <h2>IBM Watson</h2>
          <p>
            IBM Watson 是一个企业级 AI 平台,提供语音识别、视觉识别、自然语言处理等服务。
          </p>
          <a href="https://www.ibm.com/watson" target="_blank" rel="noopener noreferrer">访问 IBM Watson</a>
        </div>
  
        <!-- Microsoft Azure AI -->
        <div class="service-item">
          <h2>Microsoft Azure AI</h2>
          <p>
            Azure AI 是微软提供的云 AI 服务,涵盖机器学习、认知服务、机器人开发等功能。
          </p>
          <a href="https://azure.microsoft.com/ai" target="_blank" rel="noopener noreferrer">访问 Azure AI</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicePage'
  }
  </script>
  
  <style scoped>
  .service-page {
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
  
  .service-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .service-item {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #42b983;
    margin-bottom: 10px;
  }
  
  p {
    color: #555;
    line-height: 1.6;
  }
  
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  a:hover {
    background-color: #33a06f;
  }
  </style>