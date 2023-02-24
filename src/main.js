import Vue from 'vue'
import App from './App.vue'
// import { Button, Row } from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'

// Vue.config.productionTip = false
Vue.use(VueRouter)
// 全局引入
Vue.use(ElementUI);
// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  // 判断token存不存在
  const token = Cookie.get('token')
  // token不存在,说明当前用户未登录,应该跳转至登录界面
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    // token存在,说明用户登录,此时跳转到首页
    next({ name: 'home' })
  } else {
    next()
  }
})


// 按需引入
// Vue.use(Button)
// Vue.use(Row)


new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
