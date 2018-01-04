<template>
	<div :class="{wx_aside:bool1,active:bool2}" @click="handleClick">
		<a class="btn_more"></a>
		<ul class="wx_aside_item" v-show="bool2">
			<li>
				<router-link to="/">首页</router-link>
			</li>
			<li>
				<router-link to="/vshop">微店</router-link>
			</li>
			<li>
				<router-link to="/classify">分类</router-link>
			</li>
			<li>
				<router-link :to="to">购物车</router-link>
			</li>
			<li>
				<router-link to="/user">个人中心</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"WxAside",
		data(){
			return {
				bool1:true,
				bool2:false,
				to:"/cart"
			}
		},
		methods:{
			handleClick(){
				this.bool2=!this.bool2
			}
		},
		created(){
			let login=localStorage.getItem("user");
			if(login==null){
				this.to="/user"
			}
		}
	}
</script>
<style type="text/css">
	.wx_aside {
	    position: fixed;
	    z-index: 100;
	    right: 0;
	    bottom: 80px;
	    width: 40px;
	    background-color: rgba(0, 0, 0, 0.7);
	    border-radius: 3px 0 0 3px;
	}
	.wx_aside .btn_more {
	    width: 40px;
	    height: 40px;
	    font-size: 0;
	    text-indent: -9999em;
	    overflow: hidden;
	    display: block;
	    color: #333;
	    
	}
	.wx_aside .btn_more::after{
		width: 25px;
	    height: 26px;
	    content: '';
	    margin: 10px;
	    float: left;
	    background: url("http://static.coopbuy.com/Areas/Mobile/Templates/Default/images/footer-icon01.png") no-repeat;
	    background-size: 25px;
	    
	}
	.wx_aside .btn_more:after{
		background-position: 0 -199px;
	}
	.wx_aside.active .btn_more:after {
	    background-position: 0 -174px;
	}
	.wx_aside_item {
	    position: absolute;
	    top: -230px;
	    right: 0;
	    background: white;
	    border: 1px solid #ddd;
	    width: 116px;
	    margin-bottom: 10px;
	}
	.wx_aside_item a {
	    line-height: 44px;
	    height: 44px;
	    overflow: hidden;
	    display: block;
	    margin: 0 15px;
	    border-bottom: 1px solid #eee;
	    font-size: 14px;
	    color: #333;
	}
	
	.wx_aside_item a::before{
	    float: left;
	    content: '\20';
	    width: 23px;
	    height: 24px;
	    background: url("http://static.coopbuy.com/Areas/Mobile/Templates/Default/images/footer-icon01.png") no-repeat;
	    margin: 12px 5px 12px 0;
	    background-size: 25px;
	}
	.wx_aside_item li:nth-child(2) a:before{
		background-position: 1px -24px;
	}
	.wx_aside_item li:nth-child(3) a:before{
		background-position: 2px -49px;
	}
	.wx_aside_item li:nth-child(4) a:before{
		background-position: 0 -225px;
	}
	.wx_aside_item li:nth-child(5) a:before{
		background-position: 0 -75px;
	}
	.wx_aside_item .router-link-exact-active{
		color: #e73641;
	}
</style>