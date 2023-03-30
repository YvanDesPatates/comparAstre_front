<template>
  <div>
    <Loader v-if="!isLoaded"></loader>
    <div v-else class="contenant card" :style="{'background-image': 'url('+astre.image+')'}">
      <div class="inner">
        <div class="title">
          <h3>Nom : {{ astre.nom }}</h3>
          <h4 id="cat">Catégorie : {{ astre.categorie }}</h4>
        </div>
        <div class="subtitle">{{ astre.nom }} en détails :</div>
          <ul>
            <li v-if="astre.type"> type : {{ astre.type }}</li>
            <li v-if="astre.taille"> taille : {{ astre.taille }} km</li>
            <li v-if="astre.distanceTerre"> distance à la Terre : {{ astre.distanceTerre }} ua</li>
            <li v-if="astre.distanceEtoile"> distance à on étoile : {{ astre.distanceEtoile }} ua</li>
            <li v-if="astre.systemePlanetaire"> système planétaire : {{ astre.systemePlanetaire }}</li>
            <li v-if="astre.etoile"> étoile : {{ astre.etoile }}</li>
            <li v-if="astre.galaxie"> galaxie : {{ astre.galaxie }}</li>
            <li v-if="astre.pesanteur"> pesanteur : {{ astre.pesanteur }}</li>
            <li v-if="astre.temperatureMoyenne"> température moyenne : {{ astre.temperatureMoyenne }}</li>
          </ul>

          <div v-if=" astre.satellites && astre.satellites.length !== 0"> Les principaux satellites de {{ astre.nom }}</div>
          <ul>
            <li v-for="lune in astre.satellites" :key="lune"> {{ lune }}</li>
          </ul>

          <div v-if="rayonEnKm || volumeEnKm3"> calculé par notre site : </div>
          <ul>
            <li v-if="rayonEnKm"> rayon : {{rayonEnKm}} Km</li>
            <li v-if="volumeEnKm3"> volume : {{volumeEnKm3}} km3</li>
            <li v-if="densiteEnCm3"> densité : {{densiteEnCm3}} cm3</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";

export default {
  name: "AstreDetail",
  components: {
    Loader,
  },

  data() {
    return {
      astre: {},
      isLoaded: false,
    }
  },

  mounted() {
    this.loadAstre();
  },

  methods: {
    async loadAstre() {
      let id = this.$route.params.astreId
      try {
        const response = await axios.get(
            this.$store.getters.base_URL_API + "astreByID/" + id
        );
        this.astre = response.data
        this.isLoaded = true
      } catch (error) {
        console.log(error);
        this.astre = {
          nom: "not Found",
          categorie: "cet astre n'existe pas"
        }
      }
    }
  },

  computed: {
    rayonEnKm(){
      if (this.astre.taille){
        return this.astre.taille/2
      }
      return false
    },
    volumeEnKm3(){
      if (this.rayonEnKm) {
        return 4 / 3 * Math.PI * Math.pow(this.rayonEnKm, 3)
      }
      return false;
    },
    densiteEnCm3(){
      if(this.volumeEnKm3 && this.astre.masse){
        return (this.volumeEnKm3 / 100000) / this.astre.masse
      }
      return false
    }
  }
}
</script>

<style scoped>

.card {
  height: 100%;
  padding: 20px;
  display: flex;
  text-decoration: none;
  border: 4px solid #219fb0;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  /*background-position: 50px 0;*/
  background-color: black;
  background-size: contain;
  justify-content: flex-end;
}

.inner {
  margin-left: 60%;
  height: 50%;
  width: 30%;
  background: white;
  padding: 6%;
  margin-top: 3%;
  margin-bottom: 3%;
}

.title {
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  color: #181818;
  text-shadow: 0 2px 2px #a6f8d5;
  margin: 0 0 20px 0;

}

.subtitle {
  color: #219fb0;
  text-align: center;
}

</style>