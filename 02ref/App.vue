<template>
  <div id="app">
    <!-- ref 获取dom 元素   ID 的替代者-->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的DOM 元素</button>
    <Student></Student>
    
  </div>
</template>
<script>
 import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    Student,
} ,
  data() {
    return {
      msg:"欢迎输入"
    }
  },methods: {
    showDom(){
      console.log(this.$refs.title)	
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




