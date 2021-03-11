<template>
<div id = "menu">
	<h2>Menu:</h2>
	<ul>
		<li v-for="food in itemsSelected" v-bind:key = "food">
			{{food[0]}} x {{food[1]}} 
		</li>
	</ul>
	<button id="calc" v-on:click = "findTotal(); sendOrder()" type="button">Calculate Total </button>
	<p id="stotal">	</p>
	<p v-show="clicked == true">{{grandtotal}}</p>
</div>
</template>

<script>
import database from '../firebase.js';
export default {
	data(){
		return {
			subtotal:0,
			clicked : false,
			num:0
		}
	},
    props: {
		itemsSelected: {
			type: Array
		},
	},
	methods:{
		findTotal(){
			this.clicked = true;
			this.num =1;
			for (let i = 0; i < this.itemsSelected.length; i++) {
				this.subtotal = this.subtotal + this.itemsSelected[i][1]*this.itemsSelected[i][2];
			}	
			document.getElementById("stotal").innerHTML = "Subtotal: $"+this.subtotal;
		},
		sendOrder(){
			var sambal_kangkung = 0;
			var prawn_omelette = 0;
			var dry_beef_hor_fun = 0;
			var pork_fried_rice = 0;
			var cereal_prawn = 0;
			var mapo_tofu = 0;
			for (let i = 0; i < this.itemsSelected.length; i++) {
				if (this.itemsSelected[i][0] === "Sambal KangKung") {
					sambal_kangkung = this.itemsSelected[i][1] ;
				} else if (this.itemsSelected[i][0] === "Prawn omelette") {
					prawn_omelette =  this.itemsSelected[i][1] ;
				} else if (this.itemsSelected[i][0] === "Dry Beef Hor Fun") {
					dry_beef_hor_fun = this.itemsSelected[i][1] ;
				} else if (this.itemsSelected[i][0] === "Pork Fried Rice") {
					pork_fried_rice = this.itemsSelected[i][1] ;
				} else if (this.itemsSelected[i][0] === "Cereal Prawn") {
					cereal_prawn = this.itemsSelected[i][1] ;
				} else if (this.itemsSelected[i][0] === "Mapo Tofu") {
					mapo_tofu = this.itemsSelected[i][1] ;
				}
			}
			database.collection('orders').add({
				sambal : sambal_kangkung,
				prawn: prawn_omelette,
				beef: dry_beef_hor_fun,
				pork: pork_fried_rice,
				cereal: cereal_prawn,
				tofu: mapo_tofu,
			}).then(location.reload());
		}
	},
	computed:{
		grandtotal: function(){
			var gt = this.subtotal*1.07
			return "Grand Total: $" + gt.toFixed(2);
		}
	}
}
</script>

<style scoped>
#menu {
	font-size:20px;
	text-align-last: auto;
}
#calc {
	background-color: rgb(243, 204, 243);
	border: none;
	padding: 5px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 2px 2px;
}
</style>