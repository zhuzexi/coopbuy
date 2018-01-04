<template>
  <div id="app" class="container">
    
    <!--<router-view/>-->
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
	import Header from "./components/Header"
	import Footer from "./components/Footer"
	export default {
	  name: 'app',
	  components:{
	  	Header,
	  	Footer
	  }
	}
</script>

<style>
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
</style>
