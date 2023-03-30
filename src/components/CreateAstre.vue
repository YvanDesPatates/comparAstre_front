<template>
  <div id="main">
    <ComparaisonEvenement/>

    <b-alert
        id="alert"
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        fade
    >
      {{ erreur }}
    </b-alert>

    <b-form-group
        id="group"
        label="Création d'un nouvel astre"
        :invalid-feedback="invalidFeedback"
        :state="formOK"
    >

      <div id="form">

        <div class="formCote">

          <div class="titre"> image</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.image"
                        :state="imageOK ? null : false"
                        placeholder="entrez l'url d'une image"
                        trim></b-form-input>

          <div class="titre"> nom</div>
          <b-form-input
              class="input"
              v-model="newAstre.nom"
              :state="nomOK ? null : false"
              trim></b-form-input>

          <div class="titre"> catégorie</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.categorie"
                        :state="categorieOK ? null : false"
                        placeholder="planète, galaxie, étoile..."
                        trim></b-form-input>

          <div class="titre"> type</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.type"
                        placeholder="télurique, spirale, naine..."
                        trim></b-form-input>

          <div class="titre"> diamètre en km</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.taille"
                        placeholder="taille en km"
                        type="number"
                        min="0"
                        :state="tailleOK ? null : false"
                        trim></b-form-input>

        </div>

        <div class="formCote">

          <div class="titre"> distance Terre en ua</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.distanceTerre"
                        placeholder="son éloignement à la Terre en ua (unité astronomique)"
                        type="number"
                        trim></b-form-input>

          <div class="titre"> systeme planétaire</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.systemePlanetaire"
                        placeholder="Solaire, Alpha Centauri, Liche..."
                        trim></b-form-input>

          <div class="titre"> galaxie</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.galaxie"
                        placeholder="Voie Lactée, Galaxie naine du Grand Chien..."
                        trim></b-form-input>

          <div class="titre"> température moyenne en °C</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.temperatureMoyenne"
                        placeholder="13.7, -63, 5504.85..."
                        type="number"
                        trim></b-form-input>

          <div class="titre"> pesanteur en N/kg</div>
          <b-form-input
                        class="input"
                        v-model="newAstre.pesanteur"
                        placeholder="9.8, 3.7, 10.44..."
                        type="number"
                        trim></b-form-input>


        </div>

      </div>

    </b-form-group>

    <b-button
        id="submit"
        variant="outline-success"
        @click="submitFrom"> créer
    </b-button>
  </div>

</template>

<script>
import axios from "axios";
import ComparaisonEvenement from "@/components/ComparaisonEvenement.vue";

export default {
  name: "CreateAstre",
  components: {ComparaisonEvenement},

  computed: {
    nomOK() {
      return this.newAstre.nom !== ""
    },
    categorieOK() {
      return this.newAstre.categorie !== ""
    },
    imageOK() {
      return this.newAstre.image !== ""
    },
    tailleOK() {
      return this.newAstre.taille !== ""
    },
    formOK() {
      return this.nomOK && this.categorieOK && this.imageOK && this.tailleOK
    },
  },

  data() {
    return {
      erreur: 'erreur',
      dismissCountDown: 0,
      invalidFeedback: 'remplir les champs obligatoires',
      newAstre: {
        image: "",
        auteur: "Anonyme", //le lier au nom de l'utilisateur connecté
        nom: "",
        categorie: "",
        type: null,
        taille: "",
        distanceTerre: null,
        systemePlanetaire: null,
        galaxie: null,
        temperatureMoyenne: null,
        pesanteur: null
      }
    }
  },

  methods: {
    async submitFrom() {
      if (this.formOK) {
        let config = {
          baseURL: this.$store.getters.base_URL_API,
          method: 'post',
          url: 'astre',
          data: this.newAstre
        }

        try {
          const response = await axios(config);

          if (response.data.code === 201){
            await this.$router.push({name: 'astresList'})
          } else {
            this.erreur = 'erreur base de donnée. réessayez plus tard'
            this.dismissCountDown = 5
          }
        } catch (error) {
          this.erreur = 'erreur serveur. réessayez plus tard'
          this.dismissCountDown = 5
          console.log(error);
        }
      } else {
        this.erreur = 'vérifiez que le formulaire soit correctement rempli'
        this.dismissCountDown = 5
      }
    }
  }
}
</script>

<style scoped>
#main{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#group{
  margin-top: 2%;
  width: 100%;
  color: white;
  text-align: center;
  font-size: xx-large;
}

#form {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2%;
  font-size: small;
}

.formCote {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
}

#submit {
  margin: 2% 0;
  color: #ff8d00;
  border-color: #ff8d00;
}

.titre {
  font-size: x-large;
  margin-top: 5%;
  color: white;
  text-align: center;
}

#alert{
  width: 40%;
}
</style>