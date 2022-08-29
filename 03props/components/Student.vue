<template>
  <div>
    <h1>我是一个{{msg}}学生</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        msg:"IT",
        myAge:this.age
      };
    },
    methods: {
      updateAge(){
        return this.myAge++
      }
    },
    //简单类型的接收
    // props:['name','sex','age']

    //对接收的数据进行限制
    // props:{
    //   name:String,
    //   sex:String,
    //   age:String
      
    // }
// 对接收的数据进行限制+默认值指定+必要性限制
      props:{
        name:{
          type:String,
          required:true

        },
        age:{
          type:Number,
          default:99
        }
        ,sex:{
          type:String,
          required:true
        }
      }
  };
</script> 