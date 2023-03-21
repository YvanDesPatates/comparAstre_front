<template>
  <div class="container">
    <form class="well form-horizontal" action=" " method="post"  id="contact_form">

        <h2><b>Connexion</b></h2>

        <!-- Text input-->

        <div class="form-group">
          <label class="col-md-4 control-label">Username</label>
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input  name="user_name" placeholder="Username" class="form-control"  type="text">
            </div>
          </div>
        </div>

        <!-- Text input-->

        <div class="form-group">
          <label class="col-md-4 control-label" >Password</label>
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input name="user_password" placeholder="Password" class="form-control"  type="password">
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label"></label>
          <div class="col-md-4"><br>
            <button type="submit" class="btn btn-info" ><span class="glyphicon glyphicon-send"></span>Valider</button>
          </div>
        </div>


    </form>
  </div>

</template>

<script>
export default {
  name: "connexion-vue"
}
</script>

<style scoped>

</style>