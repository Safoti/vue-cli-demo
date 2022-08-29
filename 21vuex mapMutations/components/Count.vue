<template>
  <div>
    <h2>当前求和为：{{sum }}</h2>
    <h2>当前求和的10倍为：{{AllSum}}</h2>
    <h2>我在 :{{school}}学习 :{{course}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>
<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
  export default {
    name: "Count",
    data() {
      return {
            n:0
      };
    },
    computed:{
      /**
       *  sum school  course 三种书写有很大的重复，怎么去进行简化
       */
      //  sum(){
      //     return this.$store.state.sum
      //  }
      //  ,school(){
      //     return this.$store.state.school
      //  },
      //  course(){
      //     return this.$store.state.course
      //  }
      //  ,
        // 上面的简化，写出来的。生成计算属性
        // ...mapState({he:'sum',xuexiao:'school',xueke:'course'})
        // ...mapState({sum:'sum',school:'school',course:'course'})
        // 更为简化的写法
        ...mapState(['sum','school','course'])
        ,
        //生成mapgetters 写法
        ...mapGetters(['AllSum'])
      //  allSum(){
      //   return this.$store.getters.AllSum
      //  }
      // 使用代码成功工具
     
    },
    methods: {
      // increment() {
      //   this.$store.dispatch("add",this.n)
      // },
      // decrement() {
      //   this.$store.dispatch("jian",this.n)
      // },
      // incrementOdd() {
      //   this.$store.dispatch("addOdd",this.n)
      // },
      // incrementWait() {
      //   setTimeout(() => {
      //     this.$store.dispatch("jiaWait",this.n)
      //   }, 500);
      // }
       //简化写法
      ...mapMutations({increment:'add',decrement:'jian',incrementOdd:'addOdd',incrementWait:'jiaWait'})
    }
    // },
    // mounted() {
    //  const x= mapState({he:'sum',xuexiao:'school',xueke:'course'})
    //   console.log(x)
    // },
  };
</script>

<style>
  button {margin-left: 5px;}
</style>