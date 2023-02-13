<template>
  <div id="contenant">
    <img v-if="astre.image" :src="astre.image" alt="une photo de l'astre">
    <img v-else src="../assets/logoAstre.png" alt="cet astre n'as pas d'image">
    <div id="description">
      <div id="entete">
        <h3>Nom : {{ astre.nom }}</h3>
        <h4 id="cat">Catégorie : {{ astre.categorie }}</h4>
      </div>
      <div>{{ astre.nom }} en détails :</div>
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
      <div v-if="astre.satellites !== []"> Les principaux satellites de {{ astre.nom }}</div>
      <ul>
        <li v-for="lune in astre.satellites" :key="lune"> {{ lune }}</li>
      </ul>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AstreDetail",

  data() {
    return {
      astre: {}
    }
  },

  created() {
    this.loadAstre();
  },

  methods: {
    async loadAstre() {
      let id = this.$route.params.astreId
      try {
        const response = await axios.get(
            "http://localhost:3000/astreByID/" + id
        );
        this.astre = response.data
      } catch (error) {
        console.log(error);
        this.astre = {
          nom: "not Found",
          categorie: "cet astre n'existe pas"
        }
      }
    }
  }
}
</script>

<style scoped>
#contenant {
  display: flex;
}

img {
  max-width: 55%;
}

#description {
  width: 40%;
  margin-left: 1%;
}

#entete {
  justify-content: left;
  border-bottom: 1px solid;
  margin-left: 2%;
}

#entete * {
  margin: 5px 1%;
}

#cat {
  padding-left: 4%;
}
</style>