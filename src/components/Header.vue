<template>
<div>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/">Comparer</router-link></li>
    <li><router-link to="/">Ajouter</router-link></li>
    <li><router-link to="/">Connexion</router-link></li>
  </ul>
  <img alt="Vue logo" src="../assets/logoAstre.png">
  <h1>Compar ' Astres</h1>
</div>
</template>

<script>
export default {
  name: "header-vue"
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sacramento&display=swap");

div {
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

ul {
  background-color: lightblue;
}
li {
  display: inline-block;
  margin: 0 10px;
}

img {
  max-width: 30%;
}

h1 {
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: "Sacramento",cursive;
  text-align: center;
}

</style>