<template>
	<ul class="home-ul">
		<li v-for="(img,index) in fimg" :class="{li2:true,li4:imgs}">
			<a>
				<img :src="img"/>
			</a>
		</li>
		
	</ul>
</template>
<script type="text/javascript">
	export default {
		name:"HomeUl",
		props:{
			fimg:null,
			imgs:null
		}
	}
</script>
<style type="text/css">
	.home-ul{
		display: flex;
		margin-top: 10px;
		flex-wrap: wrap;
	}
	.home-ul li{
		float: left;
		padding-right:1px;
		margin-bottom: 10px;
	}
	.home-ul .li2{
		width: 50%;
	}
	.home-ul .li4{
		width: 25%;
	}
	.home-ul li img{
		display: block;
	    width: 100%;
	    height: auto;
	}
	
</style>