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
  pages: generatePages()
})
