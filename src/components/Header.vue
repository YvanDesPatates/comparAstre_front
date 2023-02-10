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