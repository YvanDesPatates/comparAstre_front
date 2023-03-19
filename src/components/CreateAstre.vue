<template>
  <div id="form">
    <b-form-group
        id="group"
        label="Création d'un nouvel astre"
        :invalid-feedback="invalidFeedback"
        :state="formOK"
    >

      <div class="titre"> image</div>
      <b-form-input size="sm"
                    class="input"
                    v-model="newAstre.image"
                    :state="imageOK ? null : false"
                    placeholder="entrez l'url d'une image"
                    trim></b-form-input>

      <div class="titre"> nom</div>
      <b-form-input
          size="sm"
          class="input"
          v-model="newAstre.nom"
          :state="nomOK ? null : false"
          trim></b-form-input>

      <div class="titre"> catégorie</div>
      <b-form-input size="sm"
                    class="input"
                    v-model="newAstre.categorie"
                    :state="categorieOK ? null : false"
                    placeholder="planète, galaxie, étoile..."
                    trim></b-form-input>

      <div class="titre"> type</div>
      <b-form-input size="sm"
                    class="input"
                    v-model="newAstre.type"
                    placeholder="télurique, spirale, naine..."
                    trim></b-form-input>

      <div class="titre"> taille</div>
      <b-form-input size="sm"
                    class="input"
                    v-model="newAstre.taille"
                    placeholder="taille en km"
                    type="number"
                    min="0"
                    :state="tailleOK ? null : false"
                    trim></b-form-input>

      <div class="titre"> distance Terre</div>
      <b-form-input size="sm"
                    class="input"
                    v-model="newAstre.type"
                    placeholder="son éloignement à la Terre en ua (unité astronomique)"
                    trim></b-form-input>

    </b-form-group>

    <b-button
        id="submit"
        variant="outline-success"
        @click="submitFrom"> créer </b-button>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "CreateAstre",

  computed: {
    nomOK() {
      return this.newAstre.nom !== ""
    },
    categorieOK() {
      return this.newAstre.categorie !== ""
    },
    imageOK(){
      return this.newAstre.image !== ""
    },
    tailleOK(){
      return this.newAstre.taille !== ""
    },
    formOK() {
      return this.nomOK && this.categorieOK && this.imageOK && this.tailleOK
    },
  },

  data() {
    return {
      invalidFeedback: 'les champs image, nom, categorie et taille sont obligatoire',
      newAstre: {
        image: "",
        auteur: "Anonyme", //le lier au nom de l'utilisateur connecté
        nom: "",
        categorie: "",
        type: null,
        taille: "null"
      }
    }
  },

  methods: {
    async submitFrom() {
      if (this.formOK) {
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

          return response.data.code === 201
        } catch (error) {
          console.log(error);
        }
        return true
      }

      return false;
    }
  }
}
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

#group {
  margin-left: 2%;
  margin-top: 2%;
  width: 40%;
}

#submit{
  margin: 2% 0;
  color: #ff8d00;
  border-color: #ff8d00;
}

.titre {
  margin-top: 5%;
  color: white;
  text-align: center;
}

label {
  color: white;
}
</style>