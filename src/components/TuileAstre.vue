<template>
  <div class="conatiner">
    <div class="wrap">
      <div class="box one" :style="{'background-image': 'url('+imgUrl+')'}">
        <div class="date">
          <h4>{{ categorie }}</h4>
        </div>
        <h1>{{ nom }}</h1>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "TuileAstre",
  props: {
      nom: String,
      system: String,
      categorie: String,
      img: String
  },
  computed: {
    imgUrl() {
      if(!this.img) {
        return "https://cdn-icons-png.flaticon.com/512/116/116859.png"
      } else {
        return this.img
      }
    }
  }
}

</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  background: #fff;
}

.conatiner {
  width: 100%;
  height: 500px;
}
.wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.box {
  width: 100%;
  height: 490px;
  text-align: center;
  border-radius: 3px;
  -webkit-transition: 200ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.3);
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}
.box:hover {
  width: 85%;
  margin-bottom: -50px;
  -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.7);
  box-shadow: 0 0 5px rgba(0,0,0,0.7);
}
.box h1 {
  color: #fff;
  padding: 30px;
  text-align: center;
  font-weight: 100;
  font-size: 25px;
  background: rgba(0,0,0,0.8);
  -webkit-box-shadow: 0 0 30px rgba(0,0,0,0.7);
  box-shadow: 0 0 30px rgba(0,0,0,0.8);
}

.date h4 {
  color: #fff;
  font-weight: 300;
  text-align: center;
  letter-spacing: 7px;
  text-shadow: 0 0 3px rgba(0,0,0,0.9);
}

.one {
  background-color: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}



</style>