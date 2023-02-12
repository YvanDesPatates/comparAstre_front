<template>
<div>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/">Comparer</router-link></li>
    <li><router-link to="/">Ajouter</router-link></li>
    <li><router-link to="/">Connexion</router-link></li>
  </ul>
  <img alt="Vue logo" src="../assets/logoAstre.png">
  <h1>Compar'Astres</h1>
</div>
</template>

<script>
export default {
  name: "header-vue"
}
</script>

<style scoped>
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
</style>