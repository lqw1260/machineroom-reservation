const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:10010/', // 需要代理的域名
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求
        pathRewrite: { //重写匹配的字段，如果不需要在请求路径上，重写为""
          '^/api': ''
        }
      }
    }
  }
})
