import VueRouter from "vue-router";
import FoodList from './pages/FoodList'
import Member from './pages/Member.vue'
import Cart from './pages/Cart.vue'

const routes = [
    // { path: '/', component: FoodList },
    { path: '/', component: FoodList },
    { path: '/member', component: Member },
    { path: '/cart', component: Cart },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router