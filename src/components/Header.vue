<template>
<div>
  <ul>
    <li><a href="https://vuejs.org" target="_blank" rel="noopener">Home</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Comparaison</a></li>
    <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Astres</a></li>
    <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Connexion</a></li>
  </ul>
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
</style>