const { defineConfig } = require('@vue/cli-service')

const generatePages = () => {
  const pages = {}
  const pageList = ['login','create','nav']

  pageList.forEach(name => {
    pages[name] = {
      entry: `src/pages/${name}/main.js`,
      template: `public/${name}.html`,
      filename: `${name}.html`,
      title: `${name} Page`
    }
  })

  return pages
}

module.exports = defineConfig({
  transpileDependencies: true,
  pages: generatePages(),
  publicPath: './',          // 使用相对路径（适用于静态服务器）
  outputDir: 'dist',         // 打包输出目录
  assetsDir: 'static',       // 静态资源目录
  productionSourceMap: false // 关闭 sourcemap
})
