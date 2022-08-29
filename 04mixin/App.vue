<template>
  <div id="app">
    <!-- ref 获取dom 元素   ID 的替代者-->
    <Student ></Student>
    <School></School>
  </div>
</template>
<script>
 import Student from './components/Student.vue'
import School from './components/School.vue';


export default {
  name: 'App',
  components: {
    Student,
    School
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




