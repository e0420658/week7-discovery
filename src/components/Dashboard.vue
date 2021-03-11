<template>
	<div id = "chart">
		<bar-chart></bar-chart>
		<line-chart></line-chart>
	</div>
</template>
<script>
import BarChart from '../components/charts/BarChart.vue'
import LineChart from '../components/charts/LineChart.vue'
export default {
	date() {
		return{

		}
	},
	components:{
		'BarChart':BarChart,
		'LineChart': LineChart
	}
}
</script>

<style>
#chart {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>