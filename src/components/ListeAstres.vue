<template>
  <div id="contenant">
    <TuileAstre class="tuile"
        v-for="planete in planetes"
        :key="planete._id"
        :nom="planete.nom"
        :system="planete.system"
        :img="planete.img"
    ></TuileAstre>
  </div>
</template>

<script>
import TuileAstre from "./TuileAstre.vue";

export default {
  name: "ListeAstres",
  components: {
    TuileAstre,
  },
  props:{
    planetes: Array
  }

}
</script>

<style scoped>
  #contenant{
    display: flex;
  }
</style>