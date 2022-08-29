
import Vue from 'vue'
import Vuex from 'vuex'
// //动作
const actions={
   add(context,value){
      context.commit('ADD',value)
   },   
   jian(context,value){
        context.commit('JIAN',value)
   },
   addOdd(context,value){
    console.log('actions中的addOdd被调用了')
    if(context.state.sum % 2){
        context.commit('ADD',value)
    }  
   },jiaWait(context,value){
    console.log('actions中的jiaWait被调用了')
    setTimeout(()=>{
        context.commit('ADD',value)
    },500)
}

}
//     // 03
//     //加方法
//     // add(a,b){//接收数据
//     add(context,value){//接收数据
//     //  console.log(a,b)
//       //确认接收的数据
//      context.commit('add',value)
//     },
//     jian(context,value){//接收数据
//         //  console.log(a,b)
//           //确认接收的数据
//          context.commit('jian',value)
//     }
// }
// //操作数据
const mutations={
//     //操作接收的数据
//     // 04
  ADD(state,value){
        // console.log(a,b)
        console.log("mutations add 被调用了")
        state.sum += value;  

    },
    JIAN(state,value){
        console.log("mutations JIAN 被调用了")
        state.sum-=value
    }
//     jian(state,value){
//         // console.log(a,b)
//         console.log("mutations jian 被调用了")
//         state.sum -= value;  
//     }
// }
}
// //存储数据
const state={
    sum:0  
}
//     // 01
//需要共享的数据
// }
// //使用vuex  
Vue.use(Vuex)	
// // 创建store
const store=new Vuex.Store({
    actions,
    mutations,
    state,
})
 
// // export store
export default store