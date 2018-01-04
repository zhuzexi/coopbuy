<template>
	<ul class="floor-ul">
		<li v-for='imgs in images'>
			<a>
				<img :src="imgs" alt="" />
			</a>
		</li>

	</ul>
</template>
<script type="text/javascript">
	export default {
		props:{
			images:null
		}
	}
</script>
<style type="text/css">
	.floor-ul{
	    width: 100%;
	    margin: 10px auto;
	    overflow: hidden;	
	}
	.floor-ul li{
		height: 123px !important;
	    overflow: hidden;
	    float: left;
	    width: 50%;
	    margin-bottom: 4px;
	    background: white;
	}
	.floor-ul li img{
		display: block;
		height: auto;
		width: 100%;
	}
	.floor-ul li:nth-child(1){
		height: 250px !important;
    	overflow: hidden;
        padding-right: 3px;
	}
	.floor-ul li:nth-child(1) img{
		display: block;
	    width: 100%;
	}
</style>