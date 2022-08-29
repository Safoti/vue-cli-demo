<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>
<script>
import{mixins} from '../mixin'
  export default {
    name: "School",
    data() {
      return {
        name:"北邮",
        address:'pking'
      };
    },
     mixins:[mixins]
    // // 通过对比Student.vue 发现方法相同，限制需要进行提取操作
    // methods: {
    //  showName(){
    //   alert(this.name)
    //  }
    // }
  };
</script> 