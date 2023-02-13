<template>
  <div id="app">
    <Header/>
    <transition name="fade" v-bind="$attrs" v-on="$listeners">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

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
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>