const defaultConfig = {
  NODE_ENV: process.env.NODE_ENV,
  ENV: process.env.NODE_ENV === "dev",
  mock: false,
  urlName: "",
  routeBaseURL: process.env.BASE_URL,
  apiBaseURL: "",
  //开发以及部署时的URL
  publicPath: "/",
  //生产环境构建文件的目录名
  outputDir: "platform",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  //开发环境端口号
  devHost: "0.0.0.0",
  devPort: 8001,
  //接口的基础路径
  baseUrl: "",
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //是否显示顶部进度条
  progressBar: true,
  // 路由模式，可选值为 history 或 hash
  routerMode: "history",
  //不经过token校验的路由
  routesWhiteList: ["/login", "/404", "/401"],
  //加载时显示文字
  loadingText: "正在加载中...",
  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true
}

module.exports = Object.assign({}, defaultConfig)
