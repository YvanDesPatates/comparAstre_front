<template>
  <div id="app">
    <Header/>
    <div class="body">
      <transition name="fade" v-bind="$attrs" v-on="$listeners">
        <router-view/>
      </transition>
    </div>
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
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.8);
}

.body {
  margin-top: 100px;
  margin-bottom: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>