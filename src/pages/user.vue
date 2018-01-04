<template>
	<div>
		<Login v-if="bool"></Login>
		<Users v-else></Users>
		<Footer v-show="!bool"></Footer>
	</div>
	
</template>
<script type="text/javascript">
	import Login from "../components/Login"
	import Users from "../components/Users"
	import Footer from "../components/Footer"
	export default {
		name:"user",
		data(){
			return {bool:true}
		},
		created(){
			let login=localStorage.getItem("user");
			if(login==null){
				return
			}else{
				this.bool=false
			}
		},
		components:{
			Login,
			Users,
			Footer
		}
	}
</script>
