<template>
  <div id="contenant">
    <router-link class="tuile" v-for="astre in astres"
                 :key="astre._id"
                 :to="{ name: 'astreDetail', params: { astreId: astre.id }}">
      <TuileAstre
                  :nom="astre.nom"
                  :categorie="astre.categorie"
                  :img="astre.image"
      ></TuileAstre>
    </router-link>
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
            categorie: astre.categorie,
            image: astre.image,
            id: astre._id
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
#contenant {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tuile{
  flex-basis: 20%;
  margin: 1%;
  text-decoration: none;
}

</style>