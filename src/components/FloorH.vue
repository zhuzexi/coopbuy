<template>
	<div class="floor-h2">
		<h2>{{title}}</h2>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"FloorH",
		props:{
			title:null
		}
	}
</script>
<style type="text/css">
	.floor-h2{
		padding: 0 8px;
	    background-color: #fff;
	    width: 100%;
	    margin: 10px 0;
	    overflow: hidden;
	    text-align: center;
	}
	.floor-h2 h2{
		height: 40px;
	    line-height: 40px;
	    border-bottom: 2px solid #ff3a3a;
	    display: inline-block;
	    font-size: 14px;
	    color: #232323;
	}
</style>