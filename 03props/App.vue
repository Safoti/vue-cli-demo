<template>
  <div id="app">
    <!-- ref 获取dom 元素   ID 的替代者-->
    <Student name="王红" sex="女" age=19></Student>
    <Student name="李四" sex="男" age=30></Student>
  </div>
</template>
<script>
 import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    Student,
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




