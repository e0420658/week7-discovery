import Vue from 'vue'
import App from './App.vue'
import QuantityCounter from './components/QuantityCounter.vue'
import PageContent from './components/PageContent.vue'
import Basket from'./components/Basket.vue'
import VueRouter from 'vue-router' // (Step 1)
import Routes from './routes.js'

Vue.config.productionTip = false
Vue.use(VueRouter) 
Vue.component('quan', QuantityCounter)
Vue.component('PageCont', PageContent)
Vue.component('Basket',Basket)

const myRouter = new VueRouter({
	routes:Routes,
	mode:'history',
	props: true
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')