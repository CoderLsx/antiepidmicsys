const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 跨域
    proxy: {
      "/api": {
        // 目标路径
        target: "http://localhost:8080/Maintenance",
        // 允许跨域
        changeOrigin: true,
        // 重新写路径
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    host: "localhost",
    port: 8081,
  },
});
