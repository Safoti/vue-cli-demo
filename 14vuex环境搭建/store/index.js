import Vue from 'vue'
import Vuex from 'vuex'
//动作
const actions={}
//操作数据
const nutations={}
//存储数据
const state={}
//使用vuex
Vue.use(Vuex)	
// 创建store
const store=new Vuex.Store({
    actions,
    nutations,
    state,
})

// export store
export default store