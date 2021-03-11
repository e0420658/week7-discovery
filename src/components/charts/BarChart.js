import {Bar} from 'vue-chartjs'
import database from "../../firebase.js"

export default {
	extends: Bar,
	data: function () {
		return {
			datacollection: {
				labels: ["Sambal Kangkung", "Prawn Omelette", "Dry Beef Hor Fun" ,"Pork Fried Rice", "Cereal Prawn", "Mapo Tofu"],
				datasets: [{
					label: "Quantity",
					backgroundColor: ["red", "yellow", "blue", "grey", "green", "pink"],
					data: []
				}]
			},
			options: {
				legend: { display: false },
				title: {
					display: true,
					text: 'Quantity per food item ordered'
				},
				scales: {
					yAxes : [{
						ticks: { 
							min:0
						}
					}]
				},
				responsive: true,
				maintainAspectRatio: false	
			}
		}
	},
	methods: {
		fetchItems: function () {
			var total_skk = 0;
			var total_po = 0;
			var total_dbhf = 0;
			var total_pfr = 0;
			var total_cp = 0;
			var total_mt = 0;
			database.collection('orders').get().then(querySnapShot => {
				querySnapShot.forEach(doc => { 
				total_skk = parseInt(total_skk) + parseInt(doc.data().sambal);
				total_po = parseInt(total_po) + parseInt(doc.data().prawn);
				total_dbhf = parseInt(total_dbhf) + parseInt(doc.data().beef);
				total_pfr = parseInt(total_pfr) + parseInt(doc.data().pork);
				total_cp = parseInt(total_cp) +parseInt(doc.data().cereal);
				total_mt = parseInt(total_mt) + parseInt(doc.data().tofu);
			})
			this.datacollection.datasets[0].data.push(total_skk,total_po,total_dbhf, total_pfr, total_cp, total_mt);
			this.renderChart(this.datacollection, this.options)
		})
	}
	},
	created () {
		this.fetchItems()
	}
  }