<template>
	<div class="container">
		<!--头部导航-->
		<div class="top-nav">
			<span id="deleteProducts">
				<i class="glyphicon glyphicon-trash"></i>删除商品
			</span>
		</div>
		<!--购物车内容-->
		<ul class="list-group cart">
			<li class="list-group-item">
				<div class="cart-shop">
					<i class="glyphicon glyphicon-ok check-custom"></i>
					<a>德尔惠专卖店</a>
				</div>                        
				<div class="cart-goods">                            
					<i class="glyphicon glyphicon-ok check-custom"></i>                            
					<a><img src="http://img.coopbuy.com/p/g3/fj/7ad70251919348f287eacd48ac3951af0.jpg"></a>
					<p>
						<a>德尔惠2017女鞋休闲运动鞋女跑步鞋女士旅游鞋春季复古慢跑鞋正品</a>
					</p>
					<span id="price">¥169</span>                            
					<div class="wrap-num">                            
						<a @click="handleMinus" class="glyphicon glyphicon-minus minus" href="javascript:;"></a> 
						<input v-model="count" type="text">
						<a @click="handleAdd" class="glyphicon glyphicon-plus add" href="javascript:;"></a> 
					</div>                            
					<a class="cart-remove">删除</a>  
				</div>
			</li>
		</ul>
		<!--底部结算-->
		<footer class="cart-footer">
	        <i id="checkAll" class="glyphicon glyphicon-ok check-custom"></i>
	        <label>全选</label>
	        <span class="cart-total">
	            <b>合计：<a id="totalSkuPrice">¥0</a></b>
	            <b>不含运费</b>
	        </span>
	        <a id="toSettlement" class="cart-pay">
	        	结算
	        	<b id="selectedCount">(0)</b>
	        </a>
	   </footer>
	    <WxAside></WxAside>
	</div>
	
</template>
<script type="text/javascript">
	import WxAside from "../components/WxAside"
	import {mapState} from "vuex"
	export default {
		name:"cart",
		data(){
			return {count:1}
		},
		methods:{
			handleMinus(){
				if(this.count==1){
					return
				}
				this.count--
			},
			handleAdd(){
				this.count++
			}
		},
		components:{
			WxAside
		}
	}
</script>
<style type="text/css">
	body{
		font-size: 12px;
    	background-color: #f4f6f8;
	}
	.container {
	    max-width: 640px;
	    min-height: 100%;
	    padding: 0;
	    margin: auto;
	    height: auto;
	    overflow: hidden;
	    padding-bottom: 60px!important;
	}
	.top-nav {
	    color: #0e7be0;
	    text-align: right;
	    padding: 10px;
	    font-size: 14px;
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    background-color: #f4f6f8;
	    z-index: 999;
	    border-bottom: 1px solid #c2c2c2;
	}
	.top-nav .glyphicon-trash {
	    margin-right: 5px;
	}
	.glyphicon {
	    position: relative;
	    top: 1px;
	    display: inline-block;
	    font-family: 'Glyphicons Halflings';
	    font-style: normal;
	    font-weight: 400;
	    line-height: 1;
	
	}
	.glyphicon-trash::before {
	    content: "\e020";
	}
	.cart-footer{
		position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    font-size: 12px;
	    z-index: 100;
	    height: 50px;
	    background-color: #f5f7f9;
	    border-top: 1px solid #ddd;
	}
	.cart-footer .check-custom {
    	left: 10px;
	}
	.check-custom{
		border: 2px solid #6d6d6e;
	    color: #fff;
	    left: 0;
	    top: 50%;
	    margin-top: -10px;
	    font-size: 12px;
	    border-radius: 100%;
	    padding: 2px;
	    position: absolute;
	    z-index: 10;
	}
	.glyphicon-ok:before {
	    content: "\e013";
	}
	.cart-footer label {
	    padding-left: 40px;
	    line-height: 50px;
	    font-size: 14px;
	    vertical-align: top;
	}
	.cart-footer .cart-total {
	    padding-left: 10px;
	    width: 200px;
	    display: inline-block;
	    line-height: 50px;
	    font-size: 14px;
	    color: #1e1e1e;
	}
	.cart-footer .cart-total b {
	    display: block;
	    line-height: 20px;
	    font-size: 12px;
	}
	.cart-footer .cart-total a {
	    color: #dd2727;
	}
	.cart-footer .cart-total b {
	    display: block;
	    line-height: 20px;
	    font-size: 12px;
	}
	.cart-footer .cart-total b:last-child {
	    color: #999;
	}
	.cart-footer .cart-pay {
	    display: block;
	    height: 50px;
	    position: absolute;
	    right: 0;
	    top: 0;
	    background-color: #f92a20;
	    color: #fff;
	    text-align: center;
	    font-size: 16px;
	    line-height: 50px;
	    width: 100px;
	    cursor: pointer;
	}
	.cart {
	    padding-top: 40px;
	    margin-bottom: 10px;
	}
	.cart li{
		padding: 0 0 0 10px;
	}
	.list-group-item {
	    position: relative;
	    display: block;
	        
	    background-color: #fff;
	    border: 1px solid #ddd;
	}
	.cart .list-group-item div {
	    position: relative;
	}
	.cart .cart-shop {
	    padding: 10px 0;
	    font-size: 14px;
	    border-bottom: 1px solid #d7d7d7;
	    line-height: 24px;
	}
	.cart .cart-shop a {
		display: inline-block;
		color: #333;
	    margin-left: 30px;
	    line-height: 24px;
	    
	}
	.cart .cart-goods {
	    padding: 10px 0;
	    height: 90px;
	}
	.cart .cart-goods img {
	    width: 70px;
	    height: 70px;
	    float: left;
	    margin: 0 10px 0 30px;
	}
	.cart .cart-goods p {
	    font-size: 14px;
	    position: relative;
	    padding-right: 70px;
	    line-height: 18px;
	    height: 37px;
	    overflow: hidden;
	}
	.cart .cart-goods span {
	    position: absolute;
	    right: 10px;
	    top: 12px;
	}
	.cart .wrap-num {
	    font-size: 0;
	    margin-top: 4px;
	    display: inline-block;
	}
	.cart .wrap-num .glyphicon-minus {
	    border-right: 0;
	}
	
	.cart .wrap-num .glyphicon {
	    padding: 7px 10px;
	    font-size: 12px;
	}
	.wrap-num .glyphicon {
	    top: 0;
	    padding: 10px;
	    font-size: 12px;
	    color: #666;
	    border: 1px solid #ddd;
	}
	.glyphicon-minus:before {
	    content: "\2212";
	}
	.cart .wrap-num input {
	    border: 1px solid #ddd;
	    height: 28px;
	    line-height: 28px;
	    outline: none;
	    font-size: 12px;
	}
	.wrap-num input {
	    display: inline-block;
	    width: 50px;
	    text-align: center;
	    border-radius: 0;
	    box-shadow: none;
	    border-left: 0;
	    border-right: 0;
	    -webkit-appearance: none;
	    vertical-align: top;
	}
	.cart .wrap-num .glyphicon-plus {
	    border-left: 0;
	}
	.glyphicon-plus:before {
	    content: "\2b";
	}
	.cart .cart-remove {
	    color: #e73641;
	    float: right;
	    margin: 10px 10px 0 0;
	}
	label, b {
	    font-weight: normal;
	    margin: 0;
	}
</style>