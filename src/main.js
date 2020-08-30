import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Start from './components/Start.vue'
import Home from './components/Home.vue'
import Pcontent from './components/Pcontent.vue'
import Cart from './components/Cart.vue'
import Order from './components/Order.vue'

const routes = [
    { path: '/start', component: Start },
    { path: '/home', component: Home },
    { path: '/pcontent', component: Pcontent },
    { path: '/cart', component: Cart },
    { path: '/order', component: Order },
    { path: '*', redirect: '/start' },
]

const router = new VueRouter({
    routes
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
