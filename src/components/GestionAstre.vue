<template>
  <div>
    <ComparaisonEvenement/>

    <b-alert
        id="alert"
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        fade
    >
      <p class="mess">{{ errorResponse }}</p>
      <p class="mess">{{ detailResponse }}</p>
    </b-alert>

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

          <div class="actions">
            <router-link :to="{ name: 'updateAstre', params: { astreIdToUpdate: astre.id }}">
              <p> update </p>
            </router-link>
          </div>

          <div class="actions">
            <b-button variant="outline-success" @click="deleteAstre(astre.id)"> supprimer </b-button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TuileAstre from "./TuileAstre.vue";
import axios from "axios";
import Loader from "@/components/Loader.vue";
import ComparaisonEvenement from "@/components/ComparaisonEvenement.vue";
import eventBus from "../EventBus";

export default {
  name: "GestionAstre",
  components: {
    ComparaisonEvenement,
    TuileAstre,
    Loader
  },

  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },

  data() {
    return {
      astres: [],
      isLoaded: false,
      selected: [],
      checkDisable: false,
      dismissCountDown: 0,
      errorResponse: "",
      detailResponse: "",
    }
  },

  async created() {
    this.selected = this.$store.getters.selectedAstres
    this.refreshDisableCheckBoxes()
    await this.loadPlanetes()
  },

  methods: {
    async loadPlanetes() {
      let url = this.$store.getters.base_URL_API + "astreByAuteur/" + this.user.login
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

    async deleteAstre(astreId) {
      let response
      let url = this.$store.getters.base_URL_API + "deleteAstre/" + astreId
      try {
        response = await axios.delete(url);
        this.dismissCountDown = 5
        this.detailResponse = "Suppression réussie"
        await this.loadPlanetes()
        console.log(response)
      } catch (error) {
        this.dismissCountDown = 5
        this.errorResponse = "Erreur : "
        this.detailResponse = response.status + " : " + response.statusText
      }
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

.actions * {
  color: #ffc107;
  text-decoration: none;
}

</style>