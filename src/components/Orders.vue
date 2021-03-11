<template>
<div>
	<ul id="orders">
		<li v-for="order in orders" v-bind:key="order">
			Sambal KangKung: {{order[1].sambal}} <br>
			Prawn omelette: {{order[1].prawn}} <br>
			Dry Beef Hor Fun: {{order[1].beef}} <br>
			Pork Fried Rice: {{order[1].pork}} <br>
			Cereal Prawn: {{order[1].cereal}} <br>
			Mapo Tofu: {{order[1].tofu}} <br>
			<button v-bind:id= "order[0]" v-on:click="deleteItem($event)" type="button">Delete</button>
			<button v-bind:id= "order[0]" v-on:click="route($event)" type ="button">Modify</button>
		</li>
	</ul>
</div>
</template>

<script>
import database from "../firebase.js"
export default {
	data(){
		return {
			orders: []
		}
	},
	methods: {
		fetchItems: function(){
			database.collection('orders').get().then(snapshot => {
				snapshot.docs.forEach(doc => {
					this.orders.push([doc.id,doc.data()]);
				});
			});
		},
		deleteItem(event) {
			let doc_id = event.target.getAttribute("id");
			console.log(doc_id);
			database.collection('orders').doc(doc_id).delete().then(()=> location.reload());
		},
		route(event) {
			let doc_id = event.target.getAttribute("id");
			//console.log(doc_id)
			this.$router.push({ 
				name: 'modify',
				params: { id: doc_id} 
			})
		}
	},
	created(){
		this.fetchItems();
	}
}
</script>

<style scoped>
#orders {
  width: 80%;
  float: left;
  right: 5cm;
  max-width: 70%;
  margin: 50px;
  margin-top:10px;
  padding: 0 5px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}

#quantity {
  font-size: 30px;
}

#orderName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}
</style>