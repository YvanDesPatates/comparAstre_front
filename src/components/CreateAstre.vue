<template>
  <form @submit.prevent="submitFrom">

    <div v-if="errors.length">
      <ul>
        <li class="error" v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>

    <p>
      <label for="nom">Nom</label>
      <input
          id="nom"
          v-model="newAstre.nom"
          type="text"
          name="nom"
      >
    </p>

    <p>
      <label for="categorie">Catégorie</label>
      <input
          id="categorie"
          v-model="newAstre.categorie"
          type="text"
          name="categorie"
      >
    </p>

    <p>
      <label for="type">Type</label>
      <input
          id="type"
          type="text"
          name="type"
          v-model="newAstre.type"
      >
    </p>

    <p>
      <label for="taille">Taille en km</label>
      <input
          id="taille"
          type="number"
          name="taille"
          min="0"
          v-model="newAstre.taille"
      >
    </p>

    <p>
      <input
          type="submit"
          value="Submit"
      >
    </p>

  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateAstre",

  data() {
    return {
      errors: [],
      newAstre: {
        auteur: "Anonyme", //le lier au nom de l'utilisateur connecté
        nom: null,
        categorie: null,
        type: null,
        taille: null
      }
    }
  },

  methods:{
    async submitFrom(){
      if (this.newAstre.nom && this.newAstre.categorie){
        let config = {
          baseURL: 'http://localhost:3000',
          method: 'post',
          url: 'astre',
          data: this.newAstre
        }
        console.log(config)

        try {
          console.log("avant appel")
          const response = await axios(config);
          console.log("apres appel")

          return  response.data.code === 201
        } catch (error) {
          console.log(error);
        }
        return true
      }

      this.errors = []
      if (!this.newAstre.nom){
        this.errors.push("Le champ nom est obligatoire")
      }

      if (!this.newAstre.categorie){
        this.errors.push("Le champ catégorie est obligatoire")
      }
      return false;
    }
}
}
</script>

<style scoped>
  .error{
    color: indianred;
  }

  label{
    color: white;
  }
</style>