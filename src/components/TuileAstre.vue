<template>
  <div class="card" style="width: 18rem;">
    <img v-if="img" class="card-img-top" :src="img" alt="image de l'astre">
    <img v-else src="../assets/logoAstre.png" alt="image par défault, logo de compar'astre">
    <div class="card-body">
      <h5 class="card-title">{{ nom }}</h5>
      <p class="card-text">{{ system }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuileAstre",
  props: {
      nom: String,
      system: String,
      img: String
  }
}

</script>

<style scoped>
  img{
    max-width: 100%;
    flex-basis: 33.333%;
  }
</style>