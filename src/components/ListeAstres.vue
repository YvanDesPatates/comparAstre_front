<template>
  <div>
    <ComparaisonEvenement/>
    <SearchBox @search="(express) => filtre(express)"></SearchBox>
    <div id="contenant">
      <Loader v-if="!isLoaded"></loader>
      <div v-else
           class="tuile" v-for="astre in astres"
           :key="astre._id">
        <router-link :to="{ name: 'astreDetail', params: { astreId: astre.id }}">
          <TuileAstre
              :nom="astre.nom"
              :categorie="astre.categorie"
              :img="astre.image"
          ></TuileAstre>
        </router-link>
        <div class="checkbox">
          <b-form-checkbox
              @input="check(astre.id, ...arguments)"
              switch
              :disabled="checkDisable && !selected.includes(astre.id)"
              :checked="selected.includes(astre.id)"
              size="sm"
          > comparer
          </b-form-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TuileAstre from "./TuileAstre.vue";
import SearchBox from "@/components/SearchBox.vue";
import axios from "axios";
import Loader from "@/components/Loader.vue";
import ComparaisonEvenement from "@/components/ComparaisonEvenement.vue";
import eventBus from "../EventBus";

export default {
  name: "ListeAstres",
  components: {
    ComparaisonEvenement,
    TuileAstre,
    SearchBox,
    Loader
  },

  data() {
    return {
      astres: [],
      isLoaded: false,
      selected: [],
      checkDisable: false
    }
  },

  async created() {
    this.selected = this.$store.getters.selectedAstres
    this.refreshDisableCheckBoxes()
    await this.loadPlanetes(null)
  },

  methods: {
    async loadPlanetes(regex) {
      let url = this.$store.getters.base_URL_API
      url += regex ? "astreByField/nom/" + regex + "*" : "astres"
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
    filtre(entree) {
      this.loadPlanetes(entree)
    },

    check(astreId, checked) {
      if (checked) {
        if (this.selected.length <= 2) {
          this.selected.push(astreId)
        }
      } else {
        this.selected = this.selected.filter(item => item !== astreId)
      }
      eventBus.$emit('selectAstres', this.selected)
      this.refreshDisableCheckBoxes();
    },

    refreshDisableCheckBoxes() {
      let disableAll = this.selected.length >= 2
      this.checkDisable = disableAll
    },

  },

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

.checkbox {
  color: white;
  text-align: center;
  font-size: small;
}

</style>