const path = require("path")
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === "production" ? "/iview-admin" : "/"

module.exports = {
  lintOnSave:false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@",resolve("src"))
      .set("_c",resolve("src/components/"))
  },
  //*打包时不生成.map文件
  productionSourceMap:false,
  devServer:{
    // proxy:'http://localhost:4000' //* 告诉开发服务器将任何未知请求（没有请求到静态文件的请求）代理到这个URL，来满足跨域的需求
  }
}
