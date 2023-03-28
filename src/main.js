import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";

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

console.log(store.getters.user);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  })
