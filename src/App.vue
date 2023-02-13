<template>
  <div id="app">
    <Header/>
    <router-view/>
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
</style>