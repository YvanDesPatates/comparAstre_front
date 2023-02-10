<template>
  <div id="contenant">
    <TuileAstre class="tuile"
        v-for="planete in astres"
        :key="planete._id"
        :nom="planete.nom"
        :system="planete.system"
        :img="planete.img"
    ></TuileAstre>
  </div>
</template>

<script>
import TuileAstre from "./TuileAstre.vue";
import axios from "axios";

export default {
  name: "ListeAstres",
  components: {
    TuileAstre,
  },

  data() {
    return {
      astres: []
    }
  },

  created() {
    this.loadPlanetes()
  },

  methods: {
    async loadPlanetes() {
      const loadedPlanetes = []
      try {
        const response = await axios.get(
            "http://localhost:3000/astres"
        );
        let astres = response.data

        for (let element in astres) {
          let astre = astres[element]
          loadedPlanetes.push({
            nom: astre.nom,
            system: astre.categorie,
            img: "https://cdn.pixabay.com/photo/2019/07/03/12/14/saturn-4314403_960_720.png"
          })
        }
        this.astres = loadedPlanetes
      } catch (error) {
        console.log(error);
      }
    },
  }

}
</script>

<style scoped>
  #contenant{
    display: flex;
  }
</style>