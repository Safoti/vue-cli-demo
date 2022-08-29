<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
<script>
  export default {
    name:'School',
    data() {
      return {
        name: "尚硅谷",
        address: "北京",
      };
    },
    mounted(){
      //回调数据
      this.$bus.$on('hello',(data)=>{
        console.log("我是school 组件，我接收到了数据",data)
      }) 
    },beforeDestroy(){
      //去除相关绑定
      this.$bus.$off('hello')
    }

  }
</script>

<style scoped>.school {background-color: skyblue;padding: 5px;}</style>