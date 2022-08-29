<template>
  <div>
    <!-- 进行简化操作 -->
    <h2>当前求和为：{{$store.state.sum}}</h2>
    <h2>当前求和的10倍为：{{$store.getters.AllSum}}</h2>
    <h2>我在 :{{$store.state.school}}学习 :{{$store.state.course}}</h2>


    <h1> 简化后的数据为：</h1>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前求和的10倍为：{{allSum}}</h2>
    <h2>我在 :{{school}}学习 :{{course}}</h2>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: "Count",
    data() {
      return {
            n:0
      };
    },
    computed:{
       sum(){
          return this.$store.state.sum
       },
       allSum(){
        return this.$store.getters.AllSum
       }
       ,school(){
          return this.$store.state.school
       },
       course(){
          return this.$store.state.course
       }
    },
    methods: {
      increment() {
        this.$store.dispatch("add",this.n)
      },
      decrement() {
        this.$store.dispatch("jian",this.n)
      },
      incrementOdd() {
        
             this.$store.dispatch("addOdd",this.n)
     
      },
      incrementWait() {
        setTimeout(() => {
            this.$store.dispatch("jiaWait",this.n)
        }, 500);
      },
    },
  };
</script>

<style>
  button {margin-left: 5px;}
</style>