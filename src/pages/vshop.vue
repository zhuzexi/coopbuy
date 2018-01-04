<template>
	<div class="container">
		<!--<section class="vshop-section">
			<h5>微店推荐：贵农自营</h5>
			<div class="vshop-item">
	            <div class="vshop-banner">
	                <a>
	                	<img src="http://img.coopbuy.com//ShopAttachment/Shop/15/VShop/BackgroundImage.png"> 
	                </a>
	                <a class="btn">收 藏</a>
	            </div>
	            <ul class="v-goods clearfix">	
	               
	                {{item1}}
	            </ul>
	        </div>
		</section>-->
		 <vshopItem :item="item1.item1" :bool="false"></vshopItem>
		 <vshopItem :item="item1.item2" :bool="true"></vshopItem>
		 <div class="more-btn" id="more">
		 	<a class="btn"> 查看更多微店 </a>
		 </div>
		<Footer></Footer>
		<WxAside></WxAside>
	</div>
	
</template>
<script type="text/javascript">
	import Footer from "../components/Footer"
	import VshopItem from "../components/VshopItem"
	import WxAside from "../components/WxAside"
	import {mapState} from "vuex"
	export default {
		computed:{
			...mapState({
				item1:"vshop-item"
			})
		},
		components:{
			Footer,
			vshopItem:VshopItem,
			WxAside
		}
	}
</script>
<style type="text/css">
	.container{
		max-width: 640px;
	    margin: auto;
	    height: auto;
		padding-bottom: 110px;
		background-color: #F5F5F5;
	}
	.container .vshop-section {
	    padding: 0 10px;
		overflow: hidden;
	}
	.container .vshop-section h5 {
	    padding-left: 5px;
	    border-left: 2px solid #333;
	    margin-top: 10px;
    	margin-bottom: 10px;
    	font-weight: 200;
	}
	.vshop-section .vshop-item {
	    padding: 15px 10px 5px;
	    margin-bottom: 15px;
	    background-color: #fff;
	    border-radius: 20px 0 0 0;
	    overflow: hidden;
	}
	.vshop-section .vshop-item .vshop-banner {
	    position: relative;
	}
	.vshop-banner img {
	    width: 100%;
	}
	
	.vshop-section .vshop-banner .btn {
		display: inline-block;
	    position: absolute;
	    top: 10px;
	    right: 10px;
	    z-index: 2;
	    background-color: #e73641;
	    border-color: #d02e39;
	    padding: 5px 10px;
	    font-size: 12px;
	    border-radius: 3px;
	    color: #fff;
	    text-align: center;
	}
	.vshop-section .v-goods {
	    padding-right: 10px;
	    margin-top: 10px;
	    overflow: auto;
	}
	.v-goods li {
	    width: 50%;
	    float: left;
	    border: 1px solid #eee;
	    margin-bottom: 10px;
	}

	.v-goods li:nth-child(2n) {
	    float: right;
	    margin-right: -10px;
	}
	.v-goods li .p-img {
	    position: relative;
	    padding-top: 100%;
	    height: 0;
	    overflow: hidden;
	    display: block;
	    text-align: center;
	    min-height: 100px;
	}
	.v-goods .p-img img {
	    position: absolute;
	    top: 0;
	    display: block;
	    width: 100%;
	    max-height: 1000px;
	}
	.v-goods h3 a {
	    color: #000;
	    margin: 5px 10px 0;
	    height: 24px;
	    line-height: 26px;
	    overflow: hidden;
	    display: block;
	    font-size: 12px;
	}
	.v-goods li p {
	    padding: 0 10px;
	    font-size: 12px;
	    margin-bottom: 8px;
	    color: #e73641;
	}
	.more-btn {
	    text-align: center;
	    padding: 10px 0;
	    background: #fff;
	    margin-top: -10px;
	}
	.more-btn .btn{
		background-color: #e73641;
	    border-color: #d02e39;
	    padding: 5px 10px;
	    font-size: 12px;
	    line-height: 1.5;
	    border-radius: 3px;
	    color: #fff;
	    display: inline-block;
	    font-weight: 400;
	    text-align: center;
	}
	
</style>