<template>
<div id="header">

    <nav class="links" style="--items: 4;">
      <router-link class="titre" :to="{ name: 'astresList'}"> <h3>Compar ' Astres</h3> </router-link>
      <router-link to="#" href="#">Comparer</router-link>
      <router-link :to="{ name: 'createAstre' }">Ajouter</router-link>
      <router-link to="#">Connexion</router-link>
      <span class="line"></span>
    </nav>

</div>
</template>

<script>
export default {
  name: "header-vue"
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

.onglet {
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
}
.links > .onglet {
  color: #9ab;
  padding: .75em;
  text-align: center;
  text-decoration: none;
  transition: all .5s;
}
.links > .onglet:hover {
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
.links > .onglet:hover ~ .line {
  opacity: 1;
}

.links > .onglet:nth-of-type(1):hover ~ .line { --index: 1; }
.links > .onglet:nth-of-type(2):hover ~ .line { --index: 2; }
.links > .onglet:nth-of-type(3):hover ~ .line { --index: 3; }
.links > .onglet:nth-of-type(4):hover ~ .line { --index: 4; }
.links > .onglet:nth-of-type(5):hover ~ .line { --index: 5; }

.links > a:last-of-type:hover ~ .line { --index: var(--items); }
</style>