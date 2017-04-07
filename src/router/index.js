import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入vue-router
import Hello from '@/components/Hello'
// import Welcome from '@/components/Welcome'

const Welcome = resolve => require(['@/components/Welcome.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: "/welcome",
    name: "Welcome",
    component: Welcome
  }]
})
