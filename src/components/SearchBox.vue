<template>
<div class="content">
  <!-- links for fonts & font awesome icons -->
  <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" type="text/css">

  <!-- Search bar -->
  <div id="search-bar-box">
    <input id="input" type="text" placeholder="entrez un nom" @keydown.enter="$emit('search', searchInput)" v-model="searchInput">
    <img src="../assets/search.png" id="search-icon" @click="$emit('search', searchInput)" alt="loupe">
  </div>

</div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      searchInput: ""
    }
  }
}
</script>

<style scoped>

/* search bar container */
#search-bar-box {
  background-color: transparent;
  height: 35px;
  display: flex;
  align-items: center;
  margin-left: 35%;
}

/* style for text input field */
#input {
  width: 40%;
  outline: none;
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  font-size: 20px;
  font-family: "Questrial", sans-serif;
  color: white;
}

#input::-webkit-input-placeholder {
  color: white;
  opacity: 0.8;
}

/* style for search icon */
#search-icon {
  padding-top: 1%;
  width: 3%;
  float: left;
}

#search-icon:hover {
  cursor: pointer;
}
</style>