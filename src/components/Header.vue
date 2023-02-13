<template>
<div id="header">
<!--  <h1>Compar ' Astres</h1>-->
<!--  <ul>-->
<!--    <li><router-link to="/">Home</router-link></li>-->
<!--    <li><router-link to="/">Comparer</router-link></li>-->
<!--    <li><router-link to="/">Ajouter</router-link></li>-->
<!--    <li><router-link to="/">Connexion</router-link></li>-->
<!--  </ul>-->


    <nav class="links" style="--items: 5;">
      <a class="titre" href="#">  <h3>Compar ' Astres</h3></a>
<!--      <a href="#">Link 2</a>-->
      <a href="#">Comparer</a>
      <a href="#">Ajouter</a>
      <a href="#">Connexion</a>
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

titre {
  flex-grow: 2;
}

a {
  flex-grow: 1;
}
/*div {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/

/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*  font-family: "Sacramento",cursive;*/
/*  text-align: center;*/
/*  font-size: 60px;*/
/*  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;*/
/*  color: #fff6a9;*/
/*}*/

/*img {*/
/*  max-width: 30%;*/
/*}*/

/*.header {*/
/*  position: fixed;*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  background-color: #219fb0;*/
/*  width: 100%;*/
/*}*/

/*h1 {*/
/*  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;*/
/*  color: #fff6a9;*/
/*  font-family: "Sacramento",cursive;*/
/*  text-align: center;*/
/*  font-size: 80px;*/
/*}*/

/* test */
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Lato:300,400,700');
html, body, h1, h2, h3, h4, h5, h6, p, li, ol, ul, pre {
  margin: 0;
  padding: 0;
}
html, body { min-height: 100%; }

body {
  background-color: #345;
  background-image: linear-gradient(to bottom, #0009, transparent);
  color: #eee;
  font-family: 'Lato', sans-serif;
  font-size: 62.5%;
  padding: 0 20px;
  box-sizing: border-box;
}
code {
  background: #fff1;
  font-family: 'Inconsolata', monospace;
  padding: .2em .4em;
}

.content {
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  color: #666;
  font-size: 1.6em;
  line-height: 1.4em;
  margin: 20px auto;
  margin-top: 80px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
}
.content ul {
  margin: .5em 2em;
  padding: 0;
}

#footer a {
  color: #85c6f6;
  padding: 1em 0;
  text-decoration: none;
}
#footer ul {
  display: flex;
  list-style: none;
  justify-content: center;
  font-size: 2em;
  font-weight: 300;
}
#footer ul li {
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