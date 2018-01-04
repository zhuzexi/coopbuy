import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import {HANDLELOGIN} from './mutation-types';

export default new Vuex.Store({
	state:{
		
		"classify-ul":["酒类","服饰内衣","个护化妆","运动户外","母婴","食品饮料","家居家装","礼品箱包","生活用品",
		"图书、钟表","珠宝首饰","厨具","玩具乐器","数码","电脑、办公","家用电器","营养保健","家具","家装建材","手机",
		"生鲜","农资农具","贵州特产","汽车整车","体彩充值","汽车用品","烟花爆竹","鞋靴","医药保健"],
		"classify-dl":{
			dt:"中外名酒",
			span:["白酒","黄酒养生酒","洋酒","葡萄酒","啤酒","果酒"]
		},
		"vshop-item":{
			item1:{
				h5:"微店推荐：贵农自营",
				div:[
					{
						src:"http://img.coopbuy.com//ShopAttachment/Shop/15/VShop/BackgroundImage.png",
						p:"",
						ul:[
							{
								img:"http://img13.360buyimg.com/n1/jfs/t3235/130/1251493375/159342/d4b13291/57c925bbN42e41c79.jpg",
								title:"富士施乐（Fuji Xerox）P115b/M115b/M115fs/P118w/M118w/M118z黑色墨粉筒 粉盒 碳粉 耗材",
								price:"￥149.0000"
							},
							{
								img:"http://img13.360buyimg.com/n1/jfs/t3148/151/312014090/52117/c3a1d5a9/57b127b6N3f8c90c8.jpg",
								title:"TP-LINK TL-R478 单WAN口企业级高速有线路由器",
								price:"￥369.0000"
							}
						]
					}
				],
				
			},
			item2:{
				h5:"热门微店",
				div:[
					{
						src:"http://img.coopbuy.com//ShopAttachment/Shop/3/VShop/Logo.png",
						p:"福田汽车店铺",
						ul:[
							{
								img:"http://img.coopbuy.com/p/g4/ip/7c3238fecb444f1db881037eebe658e20.jpg",
								title:"伽途T3单排冷藏车",
								price:"￥67800"
							},
							{
								img:"http://img.coopbuy.com/p/g4/ip/7c3238fecb444f1db881037eebe658e20.jpg",
								title:"伽途T3单排冷藏车",
								price:"￥67800"
							},
							]
					},
					{
						src:"http://img.coopbuy.com//ShopAttachment/Shop/2/VShop/Logo.png",
						p:"吉峰农机店铺",
						ul:[
							{
								img:"http://img.coopbuy.com/p/g4/ip/7c3238fecb444f1db881037eebe658e20.jpg",
								title:"伽途T3单排冷藏车",
								price:"￥67800"
							},
							{
								img:"http://img.coopbuy.com/p/g4/ip/7c3238fecb444f1db881037eebe658e20.jpg",
								title:"伽途T3单排冷藏车",
								price:"￥67800"
							},
							]
					}
					]
			}
		},
		"home-nav":["static/img/nav-1.png",
					"static/img/nav-2.png",
					"static/img/nav-3.png",
					"static/img/nav-4.png",
					"static/img/nav-5.png",
					"static/img/nav-6.png",
					"static/img/nav-7.png",
					"static/img/nav-8.png",
					],
		"swiper1":[{url:"static/img/swiper1-1.jpg"},{url:"static/img/swiper1-2.jpg"}],
		"swiper2":[{url:"static/img/swiper2-1.jpg"},{url:"static/img/swiper2-2.jpg"},{url:"static/img/swiper2-3.jpg"}],
		"floor1-img1":["static/img/floor1-1.jpg","static/img/floor1-2.jpg","static/img/floor1-3.jpg","static/img/floor1-4.jpg"],
		"floor1-img2":["static/img/floor1-5.jpg","static/img/floor1-6.jpg","static/img/floor1-7.jpg","static/img/floor1-8.jpg"],
		"floor2-img1":["static/img/floor2-1.jpg","static/img/floor2-2.jpg","static/img/floor2-3.jpg"],
		"floor2-img2":["static/img/floor2-4.jpg","static/img/floor2-5.jpg","static/img/floor2-6.jpg","static/img/floor2-7.jpg"],
		"floor3-img1":["static/img/floor3-1.jpg","static/img/floor3-2.jpg","static/img/floor3-3.jpg"],
		"floor3-img2":["static/img/floor3-4.jpg","static/img/floor3-5.jpg"],
		"floor3-img3":["static/img/floor3-6.jpg","static/img/floor3-7.jpg","static/img/floor3-8.jpg","static/img/floor3-9.jpg"],
		"floor3-img4":["static/img/floor3-10.jpg","static/img/floor3-11.jpg","static/img/floor3-12.jpg","static/img/floor3-13.jpg",
						"static/img/floor3-14.jpg","static/img/floor3-15.jpg","static/img/floor3-16.jpg","static/img/floor3-17.jpg"],
		"floor4":[
					{src:"static/img/floor4-1.jpg",price:"￥19.80"},
					{src:"static/img/floor4-2.jpg",price:"￥19.80"},
					{src:"static/img/floor4-3.jpg",price:"￥19.80"},
					{src:"static/img/floor4-4.jpg",price:"￥19.80"},
					{src:"static/img/floor4-5.jpg",price:"￥19.80"},
					{src:"static/img/floor4-6.jpg",price:"￥19.80"},
					{src:"static/img/floor4-7.png",price:"￥19.80"},
					{src:"static/img/floor4-8.jpg",price:"￥19.80"}
				]
	}
})
