<template>
  <div>
    <SearchBox @search="(express) => filtre(express)"></SearchBox>
    <div id="contenant">
      <Loader v-if="!isLoaded"></loader>
      <router-link v-else class="tuile" v-for="astre in astres"
                   :key="astre._id"
                   :to="{ name: 'astreDetail', params: { astreId: astre.id }}">
        <TuileAstre
            :nom="astre.nom"
            :categorie="astre.categorie"
            :img="astre.image"
        ></TuileAstre>
      </router-link>
    </div>
  </div>
</template>

<script>
import TuileAstre from "./TuileAstre.vue";
import SearchBox from "@/components/SearchBox.vue";
import axios from "axios";
import Loader from "@/components/Loader.vue";

export default {
  name: "ListeAstres",
  components: {
    TuileAstre,
    SearchBox,
    Loader
  },

  data() {
    return {
      astres: [],
      isLoaded: false,
    }
  },

  created() {
    this.loadPlanetes(null)
  },

  methods: {
    async loadPlanetes(regex) {
      let url = regex ? "http://localhost:3000/astreByField/nom/"+regex+"*" : "http://localhost:3000/astres"
      const loadedPlanetes = []
      try {
        const response = await axios.get(url);
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
        this.isLoaded = true
      } catch (error) {
        console.log(error);
      }
    },
    filtre(entree){
      this.loadPlanetes(entree)
    }
  }

}
</script>

<style scoped>
#contenant {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tuile {
  flex-basis: 20%;
  margin: 1%;
  text-decoration: none;
}

</style>