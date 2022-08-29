import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 事件总线应用
new Vue({
  render: h => h(App),
  store,  //配置项添加
  beforeCreate(){
    Vue.prototype.$bus=this  //安装全局总线
  }
}).$mount('#app')
