<template>
<div id="app">
  <h1 class="store">Lee's Delicacies</h1>
  <NavBar></NavBar>
  <router-view></router-view>
</div>

</template>

<script>
import NavBar from './components/NavBar.vue'
export default{
	components:{
		'NavBar': NavBar
	}
}
</script>

<style scoped>
.store {
	color:rgb(46, 11, 80);
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	text-align: center;
	background-color: rgb(243, 182, 243);
	font-size: 55px;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
