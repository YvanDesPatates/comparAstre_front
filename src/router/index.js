import Vue from 'vue'
import VueRouter from 'vue-router'
import astres from '@/components/ListeAstres.vue'
import astre from '@/components/AstreDetail.vue'
import createAstre from "@/components/CreateAstre.vue";
import connexion from "@/components/LoginUser.vue";

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'astresList', component: astres},
    {path: '/astre/:astreId', name: 'astreDetail', component: astre},
    {path: '/create/astre', name: 'createAstre', component: createAstre},
    {path: '/connexion', name: 'connexionUser', component: connexion},
]

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes
})

export default router
