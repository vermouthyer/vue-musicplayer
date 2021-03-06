const path = require("path");
const express = require("express");
const app = express();
let appDataForRecommendSlider = require("./public/recommendSlider.json");
let recommendSlider = appDataForRecommendSlider;
// let recommendPlaylist = require("./public/recommendPlaylist.json");
let apiRoutes = express.Router();
app.use("/api", apiRoutes);
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本路径
  /* 部署应用包的基本URL */
  /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
  //  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set("src", resolve("src"))
      .set("api", resolve("src/api"))
      .set("base", resolve("src/base"))
      .set("common", resolve("src/common"))
      .set("components", resolve("src/components"));
  },
  configureWebpack: () => {},
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    before: app => {
      app.get("/api/recommendSlider", (req, res) => {
        res.json({
          errno: 0,
          data: recommendSlider
        });
      });
    },
    proxy: null // 设置代理
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
