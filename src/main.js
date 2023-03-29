import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser (state, login, token) {
      state.user = { login: login, token: token }
    },
    logout (state) {
      state.user = null
    }
  },
  getters: {
    getUser: state => state.user
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
