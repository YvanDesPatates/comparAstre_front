<template>
<div id="main">

  <h1>{{ user }}</h1>

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

  <b-form-group
        id="group"
        label="Connexion"
        invalid-feedback="Login ou mot de passe vide"
        :state="formOk"
    >

  <div class="titre">Login</div>
          <b-form-input
                        class="input"
                        v-model="login"
                        placeholder="Login"
                        trim></b-form-input>

  <div class="titre">Mot de passe</div>
          <b-form-input
                        class="input"
                        v-model="password"
                        placeholder="***"
                        trim></b-form-input>

  </b-form-group>
  <div id="boutons">
    <b-button
        id="submit"
        variant="outline-success"
        @click="signIn"> Créer un nouveau compte
    </b-button>

    <b-button
        id="submit"
        variant="outline-success"
        @click="logIn"> Se connecter
    </b-button>
  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginUser",
  computed: {
    formOk() {
      return this.login !== "" && this.password !== "";
    },
    user() {
      return this.$store.getters.getUser
    }
  },
  data() {
    return {
      login : "",
      password : "",
      dismissCountDown: 0,
      errorResponse: "erreur",
      detailResponse: "",
    }
  },

  methods: {
    async logIn() {
      if (this.formOk) {
        let config = {
          baseURL: 'http://localhost:3000',
          method: 'post',
          url: 'logIn',
          data: { login: this.login, mdp: this.password}
        }
        let response = await axios(config)
        if ('token' in response.data) {
           this.$store.commit('setUser', this.login, response.data.token )
         } else {
           this.dismissCountDown = 5
           this.errorResponse = "Erreur : "
           this.detailResponse =  + response.data.code + " : " + response.data.message
         }
      }
    },
    async signIn() {
      if (this.formOk) {
        let config = {
          baseURL: 'http://localhost:3000',
          method: 'post',
          url: 'signIn',
          data: { login: this.login, mdp: this.password}
        }
        let response = await axios(config)
        if (response.data.code === 201) {
          await this.logIn()
        } else {
          this.dismissCountDown = 5
          this.errorResponse = "Erreur : le compte n'a pas été créé."
          this.detailResponse =  + response.data.code + " : " + response.data.message
        }
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
  width: 40%;
  color: white;
  text-align: center;
  font-size: xx-large;
}

#boutons{
  width: 40%;
  display: flex;
  justify-content: space-between;
}

#alert{
  width: 20%;
}

.mess{
  padding: 0 2%;
}
</style>