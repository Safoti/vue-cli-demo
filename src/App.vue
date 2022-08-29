<template>
  <div>
    <SP name="李四" sex="女" :age="18"/>
    <SP name="王五" sex="男" :age="18"/>
  </div>
</template>

<script>
import SP from './components/SP.vue';


  export default {
    name: "App",
    components: { SP }
}
</script>