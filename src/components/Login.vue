 <template>
 	<div>
 		<!--登录页面的头部-->
 		<header class="user-header">
	 		<a class="back" href="javascript:history.go(-1);"></a>
	 		<div class="tc" id="titleType">登录</div>
	 	</header>
	 	<section class="login-se">
	 		<div class="login-content">
	            <div class="login-phone mb20">
	                <lable class="phone-lable phone"></lable>
	                <input class="phone-input" v-model.lazy="username" type="text" id="username" placeholder="请输入手机号/用户名">
	            </div>
	            <div class="login-psw mb20">
	                <lable class="psw-lable psw"></lable>
	                <input class="psw-input" v-model.lazy="pwd" type="password" placeholder="请输入6-12位密码" id="password">
	            </div>
	            <div class="login mb20" id="bindBtn" @click="handleLogin">
	                <a href="javascript:;">登 录</a>
	            </div>
	            <div class="login-text clearfix">
	                <a class="right mr20 c-f0" id="register"> 新用户注册</a>
	            </div>
	
	        </div>

	 	</section>
	 	<!--登录页面的客服-->
	 	<div class="login-kf">
	        <a>遇到问题?请联系客服</a>
	    </div>
 	</div>
 	
 </template>
 <script type="text/javascript">
 	import {mapState,mapMutations} from "vuex"
 	export default {
 		name:"login",
 		data(){
 			return {username:"",pwd:""}
 		},
 		methods:{
 			handleLogin(){
 				let login={username:this.username,pwd:this.pwd}
 				console.log(this.username,this.pwd)
 				if(!this.username||!this.pwd){
 					alert("不能为空")
 					return
 				}
 				localStorage.setItem("user",JSON.stringify(login))
 				this.$router.push({
 					path:"/"
 				})
 			}
 		}
 	}
 </script>
 <style type="text/css">
 	.user-header{
 		position: fixed;
	    z-index: 201;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 39px;
	    line-height: 39px;
	    border-bottom: solid 1px #d5d5d5;
	    background-color: #90be30;
	    color: #fff;
	    font-size: 18px;
	    text-align: center;
 	}
 	.user-header .back {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 64px;
	    height: 100%;
	    background: url(http://static.coopbuy.com/Areas/Mobile/Templates/Default/images/arrow-back.png) no-repeat 22px 5px;
	    background-size: 18px;
	}
	.login-kf {
	    position: absolute;
	    bottom: 50px;
	    left: 30%;
	    font-size: 14px;
	    
	}
	.login-kf a{
		color: inherit;
	}
	.login-se{
		position: relative;
	    background-color: #fff;
	    margin-top: 40px;
	    padding-top: 10px;
	    padding-bottom: 20px;
	}
	.login-content {
	    margin: 20px 50px;
	}
	.login-content .login-phone,.login-content .login-psw {
	    border: 1px solid #b3b3b3;
	    height: 40px;
	    line-height: 40px;
	    border-radius: 3px;
	    margin-bottom: 20px;
	}
	.login-phone .phone-lable, .login-psw .psw-lable {
	    position: absolute;
	    width: 45px;
	    height: 30px;
	    margin: 5px 0 5px 20px;
	    border-right: 1px solid #B3B3B3;
	}
	.login-phone .phone-input, .login-psw .psw-input {
	    position: relative;
	    left: 80px;
	    overflow: hidden;
	    font-size: 12px;
	    color: #b2b2b2;
	    height: 30px;
	    margin-top: 5px;
	    outline: none;
	    border: none;
	}
	.login-phone .phone {
	    background: url(http://static.coopbuy.com/Areas/Mobile/Templates/Default/Images/phone.png) no-repeat;
	    background-size: 18px;
	   
	}
	.login-psw .psw {
	    background: url( http://static.coopbuy.com/Areas/Mobile/Templates/Default/Images/psw.png) no-repeat;
	    background-size: 23px;
	}
	.login-se .login {
	    background-color: #a0d235;
	    border-radius: 5px;
	    color: #fff;
	    font-size: 16px;
	    text-align: center;
	    padding: 5px 0;
	}
	.login-se .login a{
		
		color:inherit;
	}
	.login-se .login-text{
		text-align: right;    
	}
	.login-se .login-text a{
		color: #ffaa00;
		font-size:12px ;
	}
	.mb20 {
	    margin-bottom: 20px;
	}
 </style>