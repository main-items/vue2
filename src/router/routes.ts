import { RouteConfig } from 'vue-router'

const routerFiles: any = require.context('./../modules', true, /\.router.ts$/)
let routers: any = []
routerFiles.keys().forEach((key: string) => {
  const routerArr = routerFiles(key).default
  routers = routers.concat(routerArr)
})

const routes: Array<RouteConfig> = [
  ...routers
]

export default routes
