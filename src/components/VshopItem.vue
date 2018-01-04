<template>
	<section class="vshop-section">
		<h5>{{item.h5}}</h5>
		<div class="vshop-item" v-for="list in item.div">
	        <div class="vshop-banner">
	            <a :class="{'v-logo':bool}">
	                <img :src="list.src"> 
	            
		            <p v-if="bool">{{list.p}}</p>
		            
	            </a>
	            <a class="btn">收 藏</a>
	        </div>
	        <ul class="v-goods clearfix">	
	            <li v-for="li in list.ul">
					<a class="p-img">
						<img :src="li.img" alt="">
					</a>
					<h3>
						<a>{{li.title}}</a>
					</h3>
					<p>
						<span>{{li.price}}</span>
					</p>
				</li>
	        </ul>
	    </div>
	    <!--{{item}}-->
	</section>
</template>
<script type="text/javascript">
	export default {
		name:"VshopItem",
		props: {
			item: null,
			bool:null
		}
	}
</script>
<style>
	.vshop-section .v-logo {
	    display: block;
	    position: relative;
	    height: 30px;
	    margin-bottom: 15px;
	    line-height: 30px;
	    margin-right: 75px;
	}

	.vshop-section .v-logo img {
	    width: 60px;
	    height: 30px;
	    float: left;
	    margin-right: 10px;
	}
	.vshop-section .v-logo p {
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    font-size: 14px;
	}
</style>