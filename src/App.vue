<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ListeAstres
    :planetes="planetes"
    >    </ListeAstres>
  </div>
</template>

<script>
import axios from 'axios';
import ListeAstres from "@/components/ListeAstres.vue";
export default {
  name: 'App',
  components: {
    ListeAstres
  },

  data() {
    return {
      planetes: []
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
        this.planetes = loadedPlanetes
      } catch (error) {
        console.log(error);
      }
    },
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
