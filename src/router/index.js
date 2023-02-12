import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import astres from '../components/ListeAstres.vue'
import astre from '../components/AstreDetail.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/', name: 'astresList', component: astres
}, {
    path: '/astre/:astreId', name: 'astreDetail', component: astre
},]

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes
})

new Vue({
    router, render: h => h(App)
}).$mount('#app')

export default router
