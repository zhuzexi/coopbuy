<template>
  <div id="app" class="container">
	<!--头部-->
    <Header></Header>
    <!--第一个轮播图-->
    <carousel :auto="3000" :watch-items="list">
        <carousel-item v-for="(item, index) in list">
            <img :src="item.url"/>
        </carousel-item>
    </carousel>
    <!--导航栏-->
    <div class="ul-nav">
    	<ul class="pic-nav">
	    	<li v-for="li in lis">
	    		<img :src="li"/>
	    	</li>
	    </ul>
    </div>
    <!--第一层  贵农资讯-->
    <section class="floor1">
    	<!--第一层标题-->
    	<div class="box-title">
    		<a class="fl1-title">
    			<span>贵农资讯</span>
    		</a>
    	</div>
    	<!--第一层轮播图-->
    	<carousel :auto="3000" :watch-items="swiper1">
        <carousel-item v-for="(item, index) in swiper1">
            <img :src="item.url"/>
        </carousel-item>
    	</carousel>
    	<!--第一层内容-->
    	<div>
    		<HomeUl :fimg="img1"></HomeUl>
    		<HomeUl :fimg="img2" :imgs="true"></HomeUl>
    		<ul class="f9">
    			<li><a><img src="static/img/floor1-9.jpg"/></a></li>
    		</ul>
    	</div>

    </section>
    <!--第二层-->
    <section class="floor2">
    	<FloorH title="享实惠"></FloorH>
    	<FloorUl :images="fimg21"></FloorUl>
    	<HomeUl :fimg="fimg22"></HomeUl>
    	<!--第一层轮播图-->
    	<carousel :auto="3000" :watch-items="swiper2">
        <carousel-item v-for="(item, index) in swiper2">
            <img :src="item.url"/>
        </carousel-item>
    	</carousel>
    </section>
    <!--第三层-->
    <section class="floor3">
    	<FloorH title="购特色"></FloorH>
    	<FloorUl :images="fimg31"></FloorUl>
    	<HomeUl :fimg="fimg32"></HomeUl>
    	<HomeUl :fimg="fimg33" :imgs="true"></HomeUl>
    	<HomeUl :fimg="fimg34" :imgs="true"></HomeUl>
    	<ul class="f9">
    			<li><a><img src="static/img/floor3-18.jpg"/></a></li>
    		</ul>
    </section>
     <!--第四层-->
     <section class="floor4">
     	<FloorH title="猜你喜欢"></FloorH>
     	<ul class="f4-ul">
     		<li v-for="li in f4">
          <a href="/#/comment">
            <img :src="li.src">
          </a>
          <span>{{li.price}}</span>
				</li>
				
     	</ul>
     </section>
     <!--搜索-->
     <div class="foot-search">
     	<form>
     		<input type="text" placeholder="搜索"/>
     		<label></label>
     	</form>
     </div>
    <Footer></Footer>
  </div>
</template>

<script>
	import Header from "../components/Header"
	import Footer from "../components/Footer"
	import HomeUl from "../components/HomeUl"
	import FloorH from "../components/FloorH"
	import FloorUl from "../components/FloorUl"
	import {mapState} from "vuex"
	import { Carousel, CarouselItem } from 'vue-l-carousel'
	
	
	export default {
	  name: 'home',
	  data() {
        return {
            auto: 3000,
            list: [
                {url: 'static/img/slider1-1.jpg'},
                {url: 'static/img/slider1-2.jpg'},
                {url: 'static/img/slider1-3.jpg'},
            ]
        }
   },
   
   computed:{
   	...mapState({
   		lis:"home-nav",
   		swiper1:"swiper1",
   		swiper2:"swiper2",
   		img1:"floor1-img1",
   		img2:"floor1-img2",
   		"fimg21":"floor2-img1",
   		"fimg22":"floor2-img2",
   		"fimg31":"floor3-img1",
   		"fimg32":"floor3-img2",
   		"fimg33":"floor3-img3",
   		"fimg34":"floor3-img4",
			"f4":"floor4",
   	}),
   },
	  components:{
	  	Header,
	  	Footer,
	  	'carousel': Carousel,
      'carousel-item': CarouselItem,
      HomeUl,
      FloorH,
      FloorUl
	  }
	}
</script>

<style>
	section{
		overflow: auto;
	}
	.container {
	    max-width: 640px;
	    min-height: 100%;
	    padding: 0;
	    background-color: #F5F5F5;
	    margin: auto;
	    height: auto;
	    overflow: hidden;
	    padding-bottom: 60px!important;
	}
	.v-carousel{
		overflow:hidden;
	}
	.v-carousel-item{
		float: left;
	}
	.v-carousel-item img{
		width: 100%;
		height: 188px;
	}
	.v-carousel-nav{
		display: none !important; 
	}
	.ul-nav{
		width: 100%;
    margin: 10px auto;
    margin-bottom: 0;
    overflow: hidden;
	}
	.ul-nav li{
		width: 25%;
    padding-right: 1px;
    float: left;
    margin-bottom: 10px;
	}
	.ul-nav li img{
		display: block;
    width: 100%;
    height: auto;
	}
	.floor1 .box-title{
		background-color: #fbfbfb;
	}
	.floor1 .fl1-title{
		display: block;
    width: 406px;
    height: 40px;
    margin-left: 8px;
    font-size: 14px;
    color: #232323;
    line-height: 40px;
    background: url(../../static/img/icon-arrow-12-12.png) no-repeat  340px center;
	}
	.floor4 .f4-ul{
		width: 100%;
	}
	.floor4 .f4-ul li{
		display: inline-block;
    float: left;
    width: 50%;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    margin-bottom: 4px;
   background: white;
	}
	.floor4 .f4-ul li img{
		height: auto;
		width: 100%;
	}
	.floor4 .f4-ul a{
		height: 186px;
	}
	.floor4 .f4-ul li:nth-child(odd) {
    padding-left: 2px;
    padding-right: 0;
	}
	.floor4 .f4-ul li span {
	    display: block;
	    position: relative;
	    width: 100%;
	    height: auto;
	    line-height: normal;
	    padding: 10px 8px 10px;
	    background: #fff !important;
	    color: #fc2236;
	    border-radius: 0;
	    right: 0;
	    bottom: 0;
	    font-size: 14px;
	}
	.f9 li img{
		width: 100%;
		height: 140px;
	}
	.foot-search{
		position: relative;
    height: 32px;
    margin: 10px 8px;
    overflow: hidden;
    border: 1px solid #c0c3c5;
    border-radius: 6px;
	}
	.foot-search input{
		position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 30px;
    padding-left: 50%;
    line-height: 30px;
    border: 0 none;
    border-radius: 6px;
    overflow: hidden;
    font-size: 14px;
    color: #494e52;
	}
	.foot-search label{
		display: inline-block;
		position: relative;
    left: 50%;
    z-index: 2;
    width: 16px;
    height: 16px;
    margin-top: 7px;
    margin-left: -18px;
    background: url("http://static.coopbuy.com/Content/PublicMob/images/icon-search-16-16.png") no-repeat;
	}
	.div{
		height: 500px;
	}
</style>