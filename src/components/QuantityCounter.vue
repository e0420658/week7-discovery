<template>
<div id = "app" class="counter">
	<button class= "minus" v-on:click = "decrement">-</button>
	<span id = "demo">{{counter}}</span>
	<button class="plus" v-on:click = "increment">+</button>
</div>
</template>


<script>
export default {
  props:{
      item : {
		type: Object
      }
  },
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    increment(){
		if(this.counter == 10){
			alert("You cannot buy more than 10 items.");
		} else {
			this.counter++;
		}
		this.$emit('counter', this.item, this.counter);
	},
	decrement() {
		if(this.counter == 0){
			this.ticker;
		} else {
			this.counter--;
		}
		this.$emit('counter', this.item, this.counter);
	}
  }
}
</script>

<style scoped>
#app {
font-family: 'Avenir',
Helvetica, Arial, sans-serif;
color: #991893a8;
text-align:center;
font-size: 20px;
}
#demo{
	font-size:25px;
}
button {
	background-color: pink;
}
</style>
