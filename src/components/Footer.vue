<template>
	<footer class="clearfix">
	    <div>
	        <router-link to="/">
	            <i class="home"></i>
	            <p>首页</p>
	        </router-link>
	    </div>
	    <div>
	        <router-link to="/vshop">
	            <i class="vshop"></i>
	            <p>微店</p>
	        </router-link>
	    </div>
	    <div>
	        <router-link to="/classify">
	            <i class="classify"></i>
	            <p>分类</p>
	        </router-link>
	    </div>
		<div>
	        <router-link :to="to">
	            <i class="f-cart"></i>
	            <p>购物车</p>
	        </router-link>
	    </div>
	    <div>
	        <router-link to="/user">
	            <i class="user"></i>
	            <p>个人中心</p>
	        </router-link>
	    </div>
	</footer>
	
</template>
<script type="text/javascript">
	import {mapState,mapMutations} from "vuex"
	export default {
		data(){
			return {
				to:"/cart"
			}
		},
		name:"Footer",
		
		created(){
			let login=localStorage.getItem("user")
			if(login==null){
				this.to="/user"
			}
		}
		
	}
</script>
<style type="text/css">
	footer {
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    background-color: #f4f6f8;
	    width: 100%;
	    font-size: 12px;
	    z-index: 100;
 	}
 	footer div {
	    width: 20%;
	    float: left;
	    border-top: 1px solid #ddd;
	}
	footer div a{
		display: block;
	    width: 100%;
	    text-align: center;
		color: #47474a;
	}
	footer div i {
	    display: inline-block;
	    width: 23px;
	    height: 20px;
	    background: url("http://static.coopbuy.com/Areas/Mobile/Templates/Default/images/footer-icon01.png") no-repeat;
	    margin: 6px 0 3px;
	    background-size: 25px auto;
	}
	footer div i.vshop {
    	background-position: 1px -24px;
	}
	footer div i.classify {
    	background-position: 2px -49px;
	}
	footer div i.f-cart {
    	background-position: 0 -225px;
	}
	footer div i.user {
   		background-position: 0 -74.9px;
	}
	footer div p{
		margin-bottom: 3px;
    	line-height: 14px;
	}
	footer div .router-link-exact-active{
		color: #e73641;
	}
	footer div .router-link-exact-active i{
		background-image: url("http://static.coopbuy.com/Areas/Mobile/Templates/Default/Images/footer-icon-hover01.png");
	}
	
</style>