<template>
	<div>
		<button @click="getHello">点击我获取</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getHello(){
				 axios.get('http://localhost:8088/say')
				 .then(res=>{
						console.log("请求成功了",res.data)
				 },error=>{
					console.log("请求失败了")
						
				 }
				 )
			}
		},
	}
</script>