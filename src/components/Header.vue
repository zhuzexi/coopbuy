<template>
	<header class="Header">
	    <div class="search">
	        <input id="searchBox" type="text" name="" placeholder="搜索全部商品...">
	        <i class="glyphicon glyphicon-search" id="searchBtn"></i>
	    </div>
	</header>
</template>
<script type="text/javascript">
	export default {
		name:"Header"
	}
</script>
<style type="text/css">
.Header {
    margin-bottom: 10px;
	height: 56px;
    border-bottom: 1px solid #d7d7d7;
    padding: 10px 20px;	
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#fefefe), to(#ebebeb));
}
.Header .search {
    border-bottom: 1px solid #E4E6E9;
}
.Header .search {
    position: relative;
    width: 100%;
    height: 36px;
}
.Header .search input {
    height: 36px;
    border: 0;
    border-radius: 36px;
    width: 100%;
    padding-right: 40px;
    background-color: #ebebeb;
    outline: none;
    padding-left: 20px;
}
</style>