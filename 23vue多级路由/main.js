import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import VueRouter from 'vue-router'	// 引入VueRouter
// import router from './router'				// 引入路由器

import router from './router'				// 引入路由器

Vue.use(VueRouter)
// 事件总线应用
new Vue({
  render: h => h(App),
  router,
  // router:router,
  beforeCreate(){
    Vue.prototype.$bus=this  //安装全局总线
  }
}).$mount('#app')
 

