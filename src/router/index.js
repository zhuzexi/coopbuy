import Vue from 'vue'
import Router from 'vue-router'


//const App=r=>require.ensure([],()=>r(require("@/App.vue")),"apppage")
const Home=r=>require.ensure([],()=>r(require("@/pages/home.vue")),"home")
const Cart=r=>require.ensure([],()=>r(require("@/pages/cart.vue")),"cart")
const Classify=r=>require.ensure([],()=>r(require("@/pages/classify")),"classify")
const User=r=>require.ensure([],()=>r(require("@/pages/user")),"user")
const Vshop=r=>require.ensure([],()=>r(require("@/pages/vshop")),"vshop")
const Comment=r=>require.ensure([],()=>r(require("@/pages/comment")),"comment")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:"/cart",
    	name:"Cart",
    	component:Cart
    },
    {
    	path:"/classify",
    	name:"Classify",
    	component:Classify
    },
    {
    	path:"/user",
    	name:"User",
    	component:User
    },
    {
    	path:"/vshop",
    	name:"Vshop",
    	component:Vshop
    },
    {
    	path:"/comment",
    	name:"Comment",
    	component:Comment
    }
  ]
})
