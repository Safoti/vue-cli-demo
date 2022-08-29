import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import Vuex from 'vuex'	// 引入Vuex
import store from './store'

// 事件总线应用
new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this  //安装全局总线
  }
}).$mount('#app')
 
