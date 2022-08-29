<template>
  <ul class="todo-main">
      <!-- :todo 是用来传递数据对象的 -->
      <MyItem v-for="todoObj in todoList" :key="todoObj.id" :todo="todoObj"
      :checkTodos="checkTodos"
      ></MyItem>
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
   name:'MyList',
    components:{ MyItem },
    props:['todoList','checkTodos']
}
</script>

<style scoped>
  /*main*/
  .todo-main {margin-left: 0px;border: 1px solid #ddd;border-radius: 2px;padding: 0px;}
  .todo-empty {height: 40px;line-height: 40px;border: 1px solid #ddd;
    border-radius: 2px;padding-left: 5px;margin-top: 10px;}
</style>