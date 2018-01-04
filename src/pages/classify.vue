<template>
	<div>
		<Header></Header>
		<section class="category-box">
			<div class="category-left">
				<ul class="clearfix"> 
					<li v-for="li in list">
						{{li}}
					</li>
					
				</ul>
			</div>
			<div class="category-right">
				<dl>
					<dt>{{dl.dt}}</dt>
					<dd>
						<a v-for="span in dl.span">
                            <img src="http://img.coopbuy.com//Plat/Category/20160321171311960053.png">
                            <span >{{span}}</span>
                       </a>
					</dd>
				</dl>
			</div>
		</section>
		<WxAside></WxAside>
	</div>
</template>
<script type="text/javascript">
	import Header from "../components/Header"
	import WxAside from "../components/WxAside"
	import {mapState} from "vuex"
	export default {
		computed:{
			...mapState({
				list:"classify-ul",
				dl:"classify-dl"
			})
		},
		components:{
			Header,
			WxAside
		}
	}
</script>
<style type="text/css">

	.category-box {
	    padding-top: 56px;
	    margin-top: -66px;
	    width: 100%;
	    overflow: hidden;
	}
	.category-box .category-left{
		height: 100%;
	    float: left;
	    width: 25%;
	    background-color: #f3f3f3;
	    position: relative;
	}
	.category-box .category-left .clearfix{
		position: relative;
	    left: 0;
	    width: 100%;
	    background: red;
	}
	.category-box .category-left .clearfix li{
		width: 100%;
	    float: left;
	    height: 44px;
	    line-height: 44px;
	    padding: 0 10px;
	    background-color: #f3f3f3;
	    border-top: 1px solid #e5e5e5;
	    font-size: 14px;
	    position: relative;
	}
	.category-box .category-right {
	    height: 100%;
	    float: right;
	    width: 75%;
	    background-color: #fff;
	    overflow-y: auto;
	}
	.category-box .category-right dl{
		padding: 0 10px 10px 10px;
	}
	.category-box .category-right dl dt{
		margin-top: 5px;
	    line-height: 2;
	    color: #333;
	    font-size: 14px;
	    font-weight: normal;
	}
	.category-box .category-right dl dd a{
		float: left;
	    width: 31%;
	    min-height: 80px;
	    font-size: 12px;
	    padding: 4px 0;
	    margin: 5px 5px 5px 0;
	    text-align: center;
	    background-color: #f8f8f8;
	}
	.category-box .category-right dl dd img{
		width: 50px;
		height: 50px;
		vertical-align: middle;
	}
	.category-box .category-right dl dd span{
	    display: block;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    height: 30px;
	    line-height: 34px;	
	}
	.cify-footer{
		width: 100%;
		height: 60px;
		background-color: #f3f3f3;
	}
</style>