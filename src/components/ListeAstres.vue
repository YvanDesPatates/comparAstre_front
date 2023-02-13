<template>
  <div id="contenant">
<!--    <span class="lds-grid" >loader</span>-->
    <div class="lds-grid" v-if="!isLoaded">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
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
      astres: [],
      isLoaded: false,
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
        this.isLoaded = true
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

.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

</style>