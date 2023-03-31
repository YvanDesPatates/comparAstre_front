<template>
  <div>
    <ComparaisonEvenement/>
    <SearchBox @search="(express) => filtre(express)"></SearchBox>
    <div id="contenant">
      <Loader v-if="!isLoaded"></loader>
      <div v-else
           class="tuile" v-for="astre in astres"
           :key="astre.id">
        <router-link :to="{ name: 'astreDetail', params: { astreId: astre.id }}">
          <TuileAstre
              :nom="astre.nom"
              :categorie="astre.categorie"
              :img="astre.image"
          ></TuileAstre>
        </router-link>

        <div class="options">

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

            <div class="actions" v-if="userCreatedThisAstre(astre.auteur)">
              <router-link :to="{ name: 'updateAstre', params: { astreIdToUpdate: astre.id }}">
                <p> update </p>
              </router-link>
          </div>

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
            id: astre._id,
            auteur: astre.auteur
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

    userCreatedThisAstre(auteur){
      return this.$store.getters.getUser && this.$store.getters.getUser.login === auteur
    }

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

.options {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: small;
}

.checkbox {
  color: white;
  text-align: center;
}

.actions *{
  color: #ffc107;
  text-decoration: none;
}

</style>