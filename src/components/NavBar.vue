<template>
  <div class="navbar">
    <nav id="bar">
      <h1>{{ title }}</h1>
      <ul>
		<li>
		<router-link to="/pageCont" exact> Home </router-link>
		</li>
		<li>
		<router-link to='/orders' exact> Orders </router-link>
		</li>
		<li>
		<router-link to = '/dashboard' exact> Dashboard</router-link>
		</li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#bar {
  width: 80%;
  float: left;
  right: 5cm;
  max-width: 70%;
  margin: 30px;
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

</style>