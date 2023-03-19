<template>
<footer class="links">

  <h4>©</h4><h3>Comparastre2023</h3>

</footer>
</template>

<script>
export default {
  name: "footer-vue"
}
</script>


<style scoped>

h3, h4 {
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: "Sacramento",cursive;
  font-size: 30px;
  margin-top: 30px;
}

h4 {
  font-size: 20px;
}

/* Appearance */
.links {
  background-color: #123;
  display: flex;
  justify-content: center;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
}
</style>