<template>
  <div id="app">
    <Header/>
    <transition name="fade" v-bind="$attrs" v-on="$listeners">
      <router-view class="headermargin"/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return this.$route.params
  }
}

</script>

<style>
#app{
  background: rgba(0,0,0,0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.headermargin {
  margin-top: 100px;
}


</style>