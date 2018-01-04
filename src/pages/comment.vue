<template>
	<div class="container container-z">
		<div class="detail-hd">
			<img src="../../static/img/comment-1.jpg"/>
		</div>
		<div class="detail-bd">
			<div class="goods-info">
	            <div class="item">
	                <h4>徐福记-玉米软糖376gx1袋 结婚庆喜糖玉米糖果软糖怀旧零食大礼包</h4>
	                <h5 class="color" style="color:#999">软糯清甜 奶油味 怀旧软糖</h5>
	                <h4 class="color" id="jd-price">￥19.80</h4>
	                <h4 class="clearfix">
	                    <span><s>￥21.80</s></span>
	
	                    <span class="text-center"></span>
	                    <span class="text-center">贵州 贵阳市</span>
	                </h4>
	            </div>
	                <div class="item promotion-wrap" id="divCoupon">
	        			<i class="bonus-tip">免</i>
	        			<span>满100.00免运费</span>
	             </div>
	        </div>
	        <div class="item comment">
	            <a>
	                <div class="comment-hd">
	                    <label>评价数 ( 0 )</label>
	                    <span class="glyphicon glyphicon-menu-right"></span>
	                </div>
	            </a>
	        </div>
		</div>
		<AddCart></AddCart>
		<div style="height: 500px;background: white;"></div>
	</div>
</template>
<script type="text/javascript">
	import AddCart from "../components/AddCart"
	export default {
		name: "comment",
		components:{
			AddCart
		}
	}
</script>
<style type="text/css">body {
	font-size: 12px;
	background-color: #f4f6f8;
}

.container-z {
	position: relative;
	z-index: 1;
}

.container {
	max-width: 640px;
	padding: 0;
	overflow: hidden;
	margin: auto;
	height: auto;
	padding-bottom: 60px!important;
}

.detail-hd {
	width: 375px;
	height: 375px;
	position: fixed;
	top: 0;
	left: 50%;
	z-index: -1;
	width: 100%;
	max-width: 640px;
	margin-bottom: 10px;
	overflow: hidden;
	margin-left: -50%;
}

.detail-hd img {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 10;
	backface-visibility: hidden;
	display: block;
}

.detail-bd {
	position: relative;
	z-index: 1;
	background-color: #f4f6f8;
	margin-top: 386px;
}

.goods-info {
	background-color: #fff;
	border-top: 1px solid #eaeaea;
}

.goods-info .item:first-of-type {
	border: 0 none;
}

.goods-info .item {
	padding: 0 10px !important;
}

.detail-bd .item {
	position: relative;
	padding: 10px;
	background-color: #fff;
	border-top: 1px solid #eaeaea;
	border-bottom: 1px solid #eaeaea;
	overflow: hidden;
}

.h4,.h5,.h6,h4,h5,h6 {
	margin-top: 10px;
	margin-bottom: 10px;
	font-family: inherit;
	font-weight: 500;
}

h4 {
	font-size: 14px;
}

h5 {
	font-size: 14px;
}

.color {
	color: #e73641;
}

.goods-info h4 span {
	float: left;
	width: 33.33333%;
	color: #999;
	font-size: 12px;
}

span {
	display: inline-block;
}

.text-center {
	text-align: center;
}

.goods-info .promotion-wrap {
	width: 375px;
	height: 39px;
	margin-top: 0;
	background-color: #f6f6f6;
	border-top: 0 none;
	position: relative;
	margin-right: -10px;
	color: #6b6c6e;
	line-height: 39px;
}

.goods-info .promotion-wrap i {
	display: inline-block;
	float: left;
	margin-right: 10px;
	width: 14px;
	height: 14px;
	margin-top: 12px;
	font-size: 10px;
	font-style: normal;
	line-height: 14px;
	color: #fff;
	text-align: center;
	background-color: #f23a16;
	border-radius: 3px;
}

.comment-hd {
	overflow: hidden;
	line-height: 24px;
}

.comment-hd label {
	font-size: 13px;
}

label,
b {
	font-weight: normal;
	margin: 0;
}

label {
	display: inline-block;
	max-width: 100%;
	margin-bottom: 5px;
}

.glyphicon-menu-right:before {
	content: "\e258";
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

.detail-bd .item .glyphicon-menu-right {
	position: absolute;
	top: 50%;
	right: 10px;
	margin-top: -6px;
	color: #999;
}</style>