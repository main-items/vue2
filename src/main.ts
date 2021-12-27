import Vue from 'vue'
import VueRouter from 'vue-router'
import { registerMicroApps, start } from 'qiankun'
import './registerServiceWorker'
import microApps from './micro-app'
import route from './router'
import store from './store'
import Api from './api'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Api)
Vue.config.productionTip = false;

const { routes, AfterEach, BeforeEach } = route
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to: any, from: any, next: any) => {
  BeforeEach(to, from, next)
})
router.afterEach(() => {
  AfterEach()
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

function loader (loading: any) {
  console.log(loading)
}
const apps = microApps.map((item: any) => {
  return {
    ...item,
    loader
  };
})
registerMicroApps(apps, {
  beforeLoad: (app): any => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    (app): any => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    (app): any => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    (app): any => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
start()
