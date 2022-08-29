<template>
	<div>
		<h2>Home组件内容</h2>
		<h4>多级路由</h4>

		<div>
			<ul class="nav nav-tabs">
				<li><router-link class="list-group-item" 
                       active-class="active" to="/home/news">News</router-link></li>
				<li><router-link class="list-group-item" 
                       active-class="active" to="/home/message">Message</router-link></li>
			</ul>
			<!-- 组件需要显示的内容 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
	}
</script>