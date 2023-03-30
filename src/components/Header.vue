<template>
  <div id="header">

    <nav class="links" style="--items: 4;">
      <router-link class="titre" :to="{ name: 'astresList'}"> <h3>Compar ' Astres</h3> </router-link>
      <div>
        <div id="logged" v-if="user">Bonjour {{ user.login }}</div>
      </div>
      <router-link  v-if="user" :to="{ name: 'createAstre' }">Ajouter</router-link>

      <b-button v-if="user" id="logout" variant="outline-success" @click="logOut">Déconnexion</b-button>
      <router-link v-if="!user" :to="{ name: 'connexionUser' }">Connexion</router-link>
      <span class="line"></span>
    </nav>

  </div>
</template>

<script>
export default {
  name: "header-vue",
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },

  methods: {
    async logOut() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sacramento&display=swap");

h3 {
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: "Sacramento",cursive;
  text-align: center;
  font-size: 40px;
}

/* test */
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Lato:300,400,700');
html, body, h1, h2, h3, h4, h5, h6, p, li, ol, ul, pre {
  margin: 0;
  padding: 0;
}

.content ul {
  margin: .5em 2em;
  padding: 0;
}

#logout{
  height: 50%;
}

#logged{
  color: rgba(255, 167, 0, 0.8);
  font-weight: bold;
}

a {
  color: #85c6f6;
  padding: 1em 0;
  text-decoration: none;
}

ul {
  display: flex;
  list-style: none;
  justify-content: center;
  font-size: 2em;
  font-weight: 300;
}
ul li {
  padding: 0 .5em;
}

/* Appearance */
.links {
  background-color: #123;
  background-image: linear-gradient(to bottom, #0003, transparent);
  border-bottom: 1px solid #0003;
  box-shadow: 0 0 32px #0003;
  font-size: 1em;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.links > a {
  color: #9ab;
  padding: .75em;
  text-align: center;
  text-decoration: none;
  transition: all .5s;
}
.links > a:hover {
  background: #ffffff06;
  color: #adf;
  font-size: 1.5em;
}
.links > .line {
  background: #68a;
  height: 1px;
  pointer-events: none;
}

/* The Magic */
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.links {
  grid-template-columns: repeat(var(--items), 1fr);
  position: relative;
}
.links > .line {
  opacity: 0;
  transition: all .5s;
  position: absolute;
  bottom: 0;
  left: var(--left, calc(100% / var(--items) * (var(--index) - 1)));
  width: var(--width, calc(100% / var(--items)));
  --index: 0;
}
.links > a:hover ~ .line {
  opacity: 1;
}

.links > a:nth-of-type(1):hover ~ .line { --index: 1; }
.links > a:nth-of-type(2):hover ~ .line { --index: 2; }
.links > a:nth-of-type(3):hover ~ .line { --index: 3; }
.links > a:nth-of-type(4):hover ~ .line { --index: 4; }
.links > a:nth-of-type(5):hover ~ .line { --index: 5; }

.links > a:last-of-type:hover ~ .line { --index: var(--items); }
</style>