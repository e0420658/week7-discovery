import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
	extends: Line,
	data: function () {
		return {
			datacollection: {
				labels: [],
				datasets: [
				{ 
					label: "west",
					data: [],
					backgroundColor: "red",
					borderColor :"red",
					fill: false
				},
				{
					label: "national",
					data: [],
					backgroundColor: "blue",
					borderColor : "blue",
					fill: false
				},
				{	label: "east",
					data: [],
					backgroundColor: "purple",
					borderColor :"purple",
					fill: false
				},
				{
					label: "central",
					data: [],
					backgroundColor: "teal",
					borderColor : "teal",
					fill: false
				},
				{
					label: "south",
					data: [],
					backgroundColor: "pink",
					borderColor : "pink",
					fill: false
				},
				{
					label: "north",
					data: [],
					backgroundColor: "green",
					borderColor :"green",
					fill: false
				}

			]
			},
			options: {
				legend: { display:true },
				title: {
					display: true,
					text: 'PSI Twenty Four Hourly (By Region)'
				},
				responsive: true,
				maintainAspectRatio: false
			}
		}
	},
	methods: {
		fetchItems: function () {

			axios.get('https://api.data.gov.sg/v1/environment/psi?date=2021-02-23').then(response=>{
				this.readings = response.data.items
				for (var i = 0; i < this.readings.length; i++) {
					var reading = this.readings[i];
					this.datacollection.labels.push(reading["timestamp"])
					this.datacollection.datasets[0].data.push(reading["readings"]["psi_twenty_four_hourly"]["west"])
					console.log(reading["readings"]["psi_twenty_four_hourly"]["west"])	
					this.datacollection.datasets[1].data.push(reading["readings"]["psi_twenty_four_hourly"]["national"])
					this.datacollection.datasets[2].data.push(reading["readings"]["psi_twenty_four_hourly"]["east"])
					this.datacollection.datasets[3].data.push(reading["readings"]["psi_twenty_four_hourly"]["central"])
					this.datacollection.datasets[4].data.push(reading["readings"]["psi_twenty_four_hourly"]["south"])
					this.datacollection.datasets[5].data.push(reading["readings"]["psi_twenty_four_hourly"]["north"])
				}	
				this.renderChart(this.datacollection, this.options)
				})
		}
	},
	created () {
		this.fetchItems()
	}
}
