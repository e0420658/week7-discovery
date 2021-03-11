<template>
<div>
	<ul id="items">
		<li v-for="item in items" v-bind:key="item.name">
			{{item.name}} <br> <img v-bind:src = "item.imageURL" alt="zichar"> <br> ${{item.price}}
			<quan v-bind:item ="item" v-on:counter="onCounter"></quan>
		</li>
	</ul>
	<Basket v-bind:itemsSelected ="itemsSelected"></Basket>
</div>
</template>

<script>
import quan from './QuantityCounter.vue'
import Basket from './Basket.vue'
import database from "../firebase.js"
export default {
	data(){
		return {
			itemsSelected: [],
			items: []
		}
	},
	methods: {
		onCounter: function (item, count) {
           if (this.itemsSelected.length === 0 && count > 0) {
				console.log(this.itemsSelected);
           //If there is nothing in items selected, push the ORDER in
               this.itemsSelected.push([item.name, count, item.price]);
          } else {

        // Loop through everything to check what is not in the basket
            for (let i = 0; i < this.itemsSelected.length; i++) {
              const curr_item = this.itemsSelected[i];
              const item_name = curr_item[0];

          // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
              if (item_name === item.name && count>0) {
                  this.itemsSelected.splice(i, 1, [item.name, count, item.price]);
              } else if (item_name === item.name && count==0) {
                 // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.
                  this.itemsSelected.splice(i,1);
              } else if (item_name != item.name && i == (this.itemsSelected.length - 1)) {
          // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
                  this.itemsSelected.push([item.name, 1, item.price]);
              }
            }
          }
        },

		fetchItems: function() {
			database.collection('menu').get().then((querySnapshot) => {
				let item = {}
				querySnapshot.forEach(doc => {
					item = doc.data()
					item.show = false
					this.items.push(item)
				})
			});
		}
	},
	created() {
		this.fetchItems();
	},
	components: { 
		quan,
		Basket
	}
}
</script>

<style scoped>
#items {
  width: 80%;
  float: left;
  right: 5cm;
  max-width: 70%;
  margin: 50px;
  margin-top:10px;
  padding: 0 5px;
  box-sizing: border-box;
  background-color: rgb(225, 200, 231);
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
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}
</style>