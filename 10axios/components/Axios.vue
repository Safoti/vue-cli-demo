<template>
  
</template>

<script>
import axios from 'axios'
import func from 'vue-editor-bridge'
export default {
    name:"Axios"
   
}
// 为给定 ID 的 user 创建请求
  axios.get('/user?ID=12345')
  .then(function(res){
    console.log(response)
  })
 //和上面的两者相互替换
  axios.get('/user',{
    params:{
        ID:12345
    }
  }).then(resp=>{
 console.log(resp);
  }).catch(err=>{
    // 请求错误的处理
     console.log(err);
  })
// pot请求测试
axios.post('/user',{
    firstName:'rfils',
    lastName:'last'
}).then(rep=>{

}).catch(err=>{

})


</script>

<style>

</style>