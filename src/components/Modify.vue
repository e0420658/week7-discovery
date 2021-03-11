<template>
<div>
	<router-link to="/modify" exact></router-link>
	<ul id="orderDetails">
		<li v-for="d in datapacket" v-bind:key="d">
			Sambal KangKung: {{d[1].sambal}} <br> <br>
			<input id ='1' placeholder =0 type="number" and min="0"> <br> <br>
			Prawn omelette: {{d[1].prawn}} <br> <br>
			<input id = '2' placeholder =0 type="number" and min="0"> <br> <br>
			Dry Beef Hor Fun: {{d[1].beef}} <br> <br>
			<input id = '3' placeholder =0 type="number" and min="0"> <br> <br>
			Pork Fried Rice: {{d[1].pork}} <br> <br>
			<input id = '4' placeholder =0 type="number" and min="0"> <br> <br>
			Cereal Prawn : {{d[1].cereal}} <br> <br>
			<input id = '5' placeholder =0 type="number" and min="0"> <br> <br>
			Mapo Tofu : {{d[1].tofu}} <br> <br>
			<input id = '6' placeholder =0 type="number" and min="0"> <br> <br>
		</li>
		<button type= "button" v-bind:id= "this.$route.params.id" v-on:click = "updateOrder()" >Update Order</button>
	</ul>
</div>
</template>

<script>
import database from "../firebase.js"	
export default{
	data() {
		return {
			datapacket : []
		}
	},
	methods:{
		fetchItems: function(){
			let id = this.$route.params.id;
			console.log(id)
			console.log(database.collection('orders').doc(id).get())
			database.collection('orders').get().then(snapshot => {
				snapshot.docs.forEach(doc => {
					if (doc.id === id) {
						this.datapacket.push([id,doc.data()]);
					}
				});
			});
		},
		updateOrder: function() {
			let id = this.$route.params.id;
			var skk = document.getElementById('1').value;
			console.log(skk);
			var po = document.getElementById('2').value;
			var dbhf = document.getElementById('3').value;
			var pfr = document.getElementById('4').value;
			var cp = document.getElementById('5').value;
			var mt = document.getElementById('6').value;
			database.collection('orders').doc(id).update({
				sambal : skk,
				prawn: po,
				beef : dbhf,
				pork : pfr,
				cereal : cp,
				tofu : mt
			}).then(() => this.$router.push('orders'));
		}
	},
	created(){
		this.fetchItems();
	}
}
</script>

<style scoped>
#orderDetails {
  width: 50%;
  float: left;
  right: 5cm;
  max-width: 80%;
  margin: 10px;
  margin-top:10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 100px;
  text-align: left;
  padding: 5px;
  margin: 5px;
}
button {
  width: 100px;
  height: 40px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  text-align: center;
  position: relative;
  bottom: -480px;
  right: 600px;
}
</style>