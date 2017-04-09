// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   // 引入vue
import App from './App' // 引入根组件
import router from './router' // 引入Router
import store from './vuex/store' // 引入 vuex store


// 引用其它组件使用的css
import '../node_modules/cropper/dist/cropper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  el: '#app',
  router,
  template: "<App></App>",
  components: { App }
})
