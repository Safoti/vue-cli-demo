<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>
<script>
export default {
    name:'SP',
    data(){
        return {
            msg:'测试vue 传参方式之props',
            myAge:this.age,
        }
    }
    ,methods:{
       updateAge(){
        this.myAge++;
       } 
    },
    // 使用props 接收属性   简单的属性传值
    // props:['name','age','sex']
    props:{
        name:String,
        age:Number,
        sex:String
    }
}
</script>

<style>

</style>