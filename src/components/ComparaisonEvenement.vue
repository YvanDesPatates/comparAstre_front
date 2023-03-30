<template>
  <div
      id="comparer"
      v-if="selected.length === 2">
    <router-link :to="{ name: 'comparAstre', params: { astreId1: selected[0], astreId2: selected[1] }}">
      <b-button variant="outline-warning" size="lg"> comparer </b-button>
    </router-link>
  </div>
</template>

<script>
import eventBus from "../EventBus";
export default {
  name: "ComparaisonEvenement",
  data() {
    return {
      selected: []
    }
  },
  mounted() {
    this.selected = this.$store.getters.selectedAstres

    eventBus.$on('selectAstres', astres => {
      this.selected = astres
      this.$store.commit('setSelectedAstres', astres)
    })
  }
}
</script>

<style>
#comparer{
  position: fixed;
  right: 42%;
  top: 1%;
}

</style>