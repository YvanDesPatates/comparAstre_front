import Vue from 'vue'
import VueRouter from 'vue-router'
import astres from '@/components/ListeAstres.vue'
import astre from '@/components/AstreDetail.vue'
import astreForm from "@/components/AstreForm.vue";
import connexion from "@/components/LoginUser.vue";
import comparAstre from "@/components/ComparaisonAstre.vue";
import gestionAstre from "@/components/GestionAstre.vue";


Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'astresList', component: astres},
    {path: '/astre/:astreId', name: 'astreDetail', component: astre},
    {path: '/create/astre', name: 'createAstre', component: astreForm},
    {path: '/update/astre/:astreIdToUpdate', name: 'updateAstre', component: astreForm},
    {path: '/connexion', name: 'connexionUser', component: connexion},
    {path: '/compare/:astreId1/:astreId2', name: 'comparAstre', component: comparAstre},
    {path: '/gestion/astre', name: 'gestionAstre', component: gestionAstre},
]

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes
})

export default router
