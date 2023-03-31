import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    user: null,
    base_URL_API:
        // "http://localhost:3000/",
        "https://compar-astre-back.vercel.app/",
    selectedAstres: []
  },
  mutations: {
    setUser (state, { login, token }) {
      state.user = { login, token }
    },
    logout (state) {
      state.user = null
    },
    setSelectedAstres (state, selected){
      state.selectedAstres = selected
    }
  },
  getters: {
    getUser: state => state.user,
    base_URL_API: state => state.base_URL_API,
    selectedAstres: state => state.selectedAstres
  }
})

store.subscribe((mutation, state) => {
  Cookies.set('store', JSON.stringify(state))
})

const cookieState = Cookies.get('store')
if (cookieState) {
  store.replaceState(JSON.parse(cookieState))
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  })
