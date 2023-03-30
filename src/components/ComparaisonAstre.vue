<template>
  <div id="main">
    <Loader v-if="!isLoaded"></loader>
    <div id="photos">
      <div class="img">
        <tuile-astre
          :img="astre1.image"
          :nom="nom1"/>
      </div>

      <div class="img">
        <tuile-astre
            :img="astre2.image"
            :nom="nom2"/>
      </div>

    </div>

      <div id="comparaisons">
        <div v-if="system">
          <h3> Système planétaire </h3>
          <div class="comparBlock">
            <p> {{astre1.nom}} : {{astre1.systemePlanetaire}}</p>
            <p> {{system}} </p>
            <p> {{astre2.nom}} : {{astre2.systemePlanetaire}}</p>
          </div>
        </div>

        <div v-if="taille">
          <h3> Diamètre </h3>
          <div class="comparBlock">
            <p> {{astre1.nom}} : {{astre1.taille}}km</p>
            <p> {{taille}} </p>
            <p> {{astre2.nom}} : {{astre2.taille}}km</p>
          </div>
        </div>

        <div v-if="temperature">
          <h3> Température Moyenne</h3>
          <div class="comparBlock">
            <p> {{astre1.nom}} : {{astre1.temperatureMoyenne}}°C</p>
            <p> {{temperature}} </p>
            <p> {{astre2.nom}} : {{astre2.temperatureMoyenne}}°C</p>
          </div>
        </div>

        <div v-if="pesanteur">
          <h3> Pesanteur </h3>
          <div class="comparBlock">
            <p> {{astre1.nom}} : {{astre1.pesanteur}}</p>
            <p> {{pesanteur}} </p>
            <p> {{astre2.nom}} : {{astre2.pesanteur}}</p>
          </div>
        </div>

        <div v-if="distanceTerre">
          <h3> Distance à la Terre </h3>
          <div class="comparBlock">
            <p> {{astre1.nom}} : {{astre1.distanceTerre}} ua</p>
            <p> {{distanceTerre}} </p>
            <p> {{astre2.nom}} : {{astre2.distanceTerre}} ua</p>
          </div>
        </div>

      </div>

  </div>
</template>

<script>

import axios from "axios";
import Loader from "@/components/Loader.vue";
import TuileAstre from "@/components/TuileAstre.vue";

export default {
  name: "ComparaisonAstre",
  components: {TuileAstre, Loader},

  async mounted() {
    await this.loadAstre(this.$route.params.astreId1, 1)
    await this.loadAstre(this.$route.params.astreId2, 2)
    this.isLoaded = true
  },

  computed: {
    system(){
      let system1 = this.astre1.systemePlanetaire
      let system2 = this.astre2.systemePlanetaire
      if (system1 && system2){
        if (system1 === system2){
          return "nos deux astres viennet du même système planétaire"
        }
        return "nos deux astres ne sont pas dans le même système planétaire"
      } else {
        return null
      }
    },

    taille() {
      let taille1 = this.astre1.taille
      let taille2 = this.astre2.taille
      if (taille1 && taille2){
        if (taille1 === taille2){
          return "ces astres font la même taille";
        } else {
          let prettyCoef = this.getPrettyCoef(taille1, taille2);
          return prettyCoef+" fois plus grand";
        }
      } else {
        return null
      }
    },
    temperature() {
      let temp1 = this.astre1.temperatureMoyenne
      let temp2 = this.astre2.temperatureMoyenne
      if (temp1 && temp2){
        if (temp1 === temp2){
          return "ces astres ont une température moyenne égal !";
        } else {
          let prettyCoef = this.getPrettyCoef(temp1, temp2);
          return "La température est multiplié par "+prettyCoef;
        }
      } else {
        return null
      }
    },
    pesanteur() {
      let pes1 = this.astre1.pesanteur
      let pes2 = this.astre2.pesanteur
      if (pes1 && pes2){
        if (pes1 === pes2){
          return "ces astres ont la même pesanteur !";
        } else {
          let prettyCoef = this.getPrettyCoef(pes1, pes2);
          return "La pesanteur est multiplié par "+prettyCoef+" d'un astre à l'autre";
        }
      } else {
        return null
      }
    },
    distanceTerre() {
      let distance1 = this.astre1.distanceTerre
      let distance2 = this.astre2.distanceTerre
      if (distance1 && distance2){
        if (distance1 === distance2){
          return "ces astres sont à égal distance de la Terre !";
        } else {
          let prettyCoef = this.getPrettyCoef(distance1, distance2);
          return "L'astre le plus éloigné de nous est "+prettyCoef+" fois plus loin";
        }
      } else {
        return null
      }
    },
  },

  data(){
    return {
      astre1: {},
      astre2: {},
      nom1: "",
      nom2: "",
      isLoaded: false
    }
  },

  methods: {
    async loadAstre(astreId, numAstre) {
      try {
        const response = await axios.get(
            this.$store.getters.base_URL_API + "astreByID/" + astreId
        );
        if (numAstre === 1) {
          this.astre1 = response.data
          this.nom1   = response.data.nom
        } else {
          this.astre2 = response.data
          this.nom2   = response.data.nom
        }
        this.isLoaded = true
      } catch (error) {
        console.log(error);
      }
    },
    getPrettyCoef(valeur1, valeur2) {
      let grandeValeur = Math.max(valeur1, valeur2)
      let petiteValeur = Math.min(valeur1, valeur2)
      let coef = Math.abs( parseInt(grandeValeur) / parseInt(petiteValeur) )
      coef = String(coef);

      // pretty coef : 1.5648 -> 1,56
      let prettyCoef = coef.split('.')[0]
      if (coef.split('.')[1]) {
        prettyCoef += ',' + coef.split('.')[1].substring(0, 2)
      }
      return prettyCoef;
    },
  }
}
</script>

<style scoped>
#photos{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.img{
  width: 30%;
}

#comparaisons{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
}

#comparaisons>div{
  width: 100%;
}

#comparaisons h3{
  margin-top: 2%;
}

.comparBlock{
  width: 100%;
  display: flex;
  justify-content: center;
}

.comparBlock>p{
  min-width: 22%;
  max-width: 30%;
  padding: 1%;
  border: solid white;
}

</style>