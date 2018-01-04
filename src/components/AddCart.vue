<template>
	<section class="add-cart">
		<div class="action-bar mui-flex">
			<ul>
				<li><a href="#/cart">购物车</a></li>
				<li><a>收藏</a></li>
				<li><a href="#/cart">店铺</a></li>
			</ul>
			<button class="addCart">加入购物车</button>
			<button class="AddBuy">立即购买</button>
		</div>
	</section>
</template>
<script type="text/javascript">
	export default{
		
	}
</script>
<style type="text/css">
	.add-cart{
		position: fixed;
	    bottom: 0;
	    z-index: 1;
	    width: 100%;
	    background-color: #fff;
	}
	.add-cart a{
		color: #5a5a5a;
	}
	.add-cart .action-bar{
		display: flex;
		align-items: center;
		height: 46px;

	}
	.add-cart .action-bar ul{
		display: flex;
		text-align: center;
	}
	.add-cart ul li{
		border-top: 1px solid #ddd;
    	width: 50px;
	}
	.add-cart ul li:nth-child(2){
		border-left: 1px solid #ddd;
	    border-right: 1px solid #ddd;
	}
	.add-cart ul li:before{
		font-family: "iconfont" !important;
		content: "\e258";
		width: 25px;
	    height: 25px;
	    font-size: 18px;
	    display: block;
	    margin: 0 auto;
	}
	.add-cart button{
		flex: 1;
		border: 0;
    	color: #fff;
    	font-size: 14px;
    	outline: none;
        height: 46px;
    	text-align: center;
        font-size: 15px;
	}
	.add-cart .addCart{
		background: #ffc245;
    	font-size: 15px;
	}
	.add-cart .AddBuy{
		background: #ff4342;

	}
</style>