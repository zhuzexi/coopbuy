<template>
	<div class="container">
		<div class="user-info clearfix">
	        <div class="img">
	        	<img src="">
	        	<div class="border"></div>
	        </div>
	        <p>
	        	<span>{{username}}</span>
	        	<span>Vip0</span>
	        </p>
	        <div class="user-fav row">
	            <span class="col-xs-5">
	            	<a href="CollectionProduct">
	            		<i>0</i>
	            		<br>收藏的商品
	            	</a>
	            </span>
	            <span class="col-xs-2 line"><br>|</span>
	            <span class="col-xs-5">
	            	<a href="CollectionShop">
	            		<i>0</i>
	            		<br>收藏的店铺
	            	</a>
	            </span>
	        </div>
	    </div>
	    <div class="my_menu">
	        <div class="total-order">
	            <a>
	            	<h5>全部订单</h5>
	            	<i class="glyphicon glyphicon-menu-right"></i>
	            	<em>查看全部订单</em>
	            </a>
	        </div>
	        <ul class="clearfix">
	            <li><a><span class="icon01"></span><p>待付款</p></a></li>
	            <li><a><span class="icon02"></span><p>待发货</p></a></li>
	            <li><a><span class="icon03"></span><p>待收货</p></a></li>
	            <li><a><span class="icon04"></span><p>待评论</p></a></li>
	            <li><a><span class="icon05"></span><p>退款/售后</p></a></li>
	        </ul>
	    </div>
	    <div class="groupp-top">
	        <div class="list-grouppp">
	            <a>
	                <b class="icon06"></b>
	                <div class="list">我的优惠劵</div>
	                <span class="rt">你有0张优惠券未使用</span>
	            </a>
	        </div>
	        <div class="list-grouppp">
	            <a>
	                <b class="icon07"></b>
	                <div class="list">我的积分</div>
	                <span class="rt code">1分</span>
	            </a>
	        </div>
	        <div class="list-grouppp">
	            <a>
	                <b class="icon08"></b>
	                <div class="list">我的资产</div>
	                <span class="rt ">0元</span>
	            </a>
	        </div>
	    </div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {username:""}
		},
		created(){
			let login=JSON.parse(localStorage.getItem("user"));
			
			let {username}=login
			this.username=username
		}
	}
</script>
<style type="text/css">
	body {
	    font-size: 12px;
	    background-color: #f4f6f8;
	}
	.container{
		max-width: 640px;
		margin: auto;
		height: auto;
		padding: 0;
		overflow: hidden;
		padding-bottom: 60px!important;
	}
	img {
	    vertical-align: middle;
	}
	span {
	    display: inline-block;
	}
	a{
		color: #333;
	}
	.user-info {
	    width: 93.125%;
	    height: 182px;
	    background-color: #e3393c;
	    border-radius: 2%;
	    margin: 11px auto;
	    color: #fff;
	    overflow: auto;
	}
	.user-info .img {
	    width: 79px;
	    height: 79px;
	    border-radius: 50%;
	    margin: 20px auto 10px;
	    background-color: #fff;
	    position: relative;
	}
	.user-info img {
	    width: 71px;
	    height: 71px;
	    border-radius: 50%;
	    position: relative;
	    top: 4px;
	    left: 4px;
	}
	.user-info .img .border {
	    border: 2px solid #e3393c;
	    left: 2px;
	    position: absolute;
	    top: 2px;
	    width: 75px;
	    height: 75px;
	    border-radius: 50%;
	}
	.user-info p {
	    text-align: center;
	    font-size: 10px;
	    margin-right: -45px;
	}
	.user-info p span {
	    padding-right: 45px;
	}
	.user-fav {
	    margin-top: 5px;
	}
	
	.row {
	    margin-right: -15px;
	    margin-left: -15px;
	}
	.user-fav span {
	    text-align: center;
	    font-size: 10px;
	    line-height: 20px;
	}
	.col-xs-5 {
	    width: 41.66666667%;
	    float: left;
	    position: relative;
	    min-height: 1px;
	    padding-right: 15px;
	    padding-left: 15px;
	}
	.user-fav a {
	    color: #fff;
	}
	.user-fav span i {
	    font-style: normal;
	    font-size: 18px;
	}
	.user-fav .line {
	    font-size: 15px;
	}
	.user-fav span {
	    text-align: center;
	    font-size: 10px;
	    line-height: 20px;
	}
	.col-xs-2 {
	    width: 16.66666667%;
	    float: left;
	    position: relative;
	    min-height: 1px;
	    padding-right: 15px;
	    padding-left: 15px;
	}
	.my_menu {
	    background-color: #fff;
	    border-bottom: 10px solid #e7e7e7;
	    border-top: 5px solid #e7e7e7;
	    height: 124px;
	}
	.my_menu .total-order {
	    height: 47px;
	    margin-left: 10px;
	    padding-right: 10px;
	    border-bottom: 1px solid #e9e9ea;
	    line-height: 47px;
	    position: relative;
	}
	.my_menu .total-order a {
	    display: block;
	}
	.my_menu .total-order h5 {
	    margin: 0;
	    font-size: 14px;
	    color: #14181b;
	    float: left;
	    line-height: 47px;
	        font-family: inherit;
	    font-weight: 500;
	}
	.my_menu .total-order i {
	    float: right;
	    line-height: 47px;
	    color: #999;
	    font-size: 12px;
	}
	
	.glyphicon {
	    position: relative;
	    top: 1px;
	    display: inline-block;
	    font-family: 'Glyphicons Halflings';
	    font-style: normal;
	    font-weight: 400;
	
	}
	.glyphicon-menu-right:before {
	    content: "\e258";
	}
	.my_menu .total-order em {
	    font-size: 12px;
	    color: #aeaeae;
	    margin-right: 15px;
	    float: right;
	}
	
	em {
	    font-style: normal;
	}
	.my_menu li {
	    float: left;
	    width: 20%;
	    text-align: center;
	    line-height: 18px;
	    color: #5e5d62;
	    position: relative;
	    font-size: 11px;
	    margin-top: 15px;
	}
	.my_menu li a {
	    position: relative;
	    color: #47474a;
	    display: inline-block;
	}
	.my_menu .icon01 {
	    background-position: 0px 0px;
	}
	.my_menu span {
	    display: inline-block;
	    background-repeat: no-repeat;
	    width: 100%;
	    height: 20px;
	    width: 20px;
	    background-image: url("http://static.coopbuy.com/Areas/Mobile/Templates/Default/Images/menber_center_icon.png");
	    background-size: cover;
	}
	.my_menu .icon02 {
	    background-position: 0px -20px;
	}
	.my_menu .icon03 {
	    background-position: 0px -40px;
	}
	.my_menu .icon04 {
	    background-position: 0px -120px;
	}
	.my_menu .icon05 {
	    background-position: 0px -241px;
	}
	.groupp-top {
    width: 100%;
    background-color: #fff;
}
.list-grouppp {
    height: 54px;
    border-bottom: 1px solid #e9e9ea;
    background-color: #fff;
    margin-left: 10px;
    padding-right: 10px;
}
.list-grouppp a {
    display: inline-block;
    width: 100%;
    line-height: 54px;
    color: #2a2a2e;
    font-size: 13px;
}
.list-grouppp .list {
    line-height: 54px;
    display: inline;
    position: relative;
}
.list-grouppp span {
    float: right;
    font-size: 12px;
    color: #aeaeae;
    line-height: 54px;
}
.list-grouppp a b {
    background-image: url("http://static.coopbuy.com/Areas/Mobile/Templates/Default/Images/menber_center_icon.png");
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    display: inline-block;
    position: relative;
    top: 8px;
    background-size: 20px;
    margin-right: 12px;
    background-size: 19px;
     height: 18px;
    top: 5px;
}
.list-grouppp .icon06 {
    background-position: 0px -75px;
}
.list-grouppp .icon07 {
    background-position: 0 -90px;
}
.list-grouppp .icon08 {
    background-position: 0 -114px;

}
</style>