<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <h1>kzkzkzk</h1>
    <ListeAstres
        :planetes="planetes"
    ></ListeAstres>
    <router-view/>
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
