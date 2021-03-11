import Home from './components/Home.vue'
import Shop from './components/Shop.vue'
import Login from './components/Login.vue'
import Orders from './components/Orders.vue'
import PageCont from './components/PageContent.vue'
import modify from './components/Modify.vue'
import dashboard from './components/Dashboard.vue'

export default [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/login', component: Login },
  { path: '/orders', component: Orders},
  { path: '/pageCont', component: PageCont},
  { path: '/modify', name:'modify', component: modify},
  { path: '/dashboard', component: dashboard}
]
