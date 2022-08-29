<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
import{mixins} from '../mixin'
  export default {
    name: "Student",
    data() {
      return {
        name:"safoti",
        sex:'男'
      };
    // },
    // methods: {
    //  showName(){
    //   alert(this.name)
    //  }
    // }
    }
    ,mixins:[mixins]
  }
</script> 