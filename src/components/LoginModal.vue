<template>
  <div class="container">
    <div class="row col-4" id="centerdiv">
      <h2>Connexion</h2>
      <form>
        <div class="mb-3">
          <label for="email1" class="form-label">Email</label>
          <input type="email" class="form-control" id="email1" />
        </div>
        <div class="mb-3">
          <label for="pswd" class="form-label">Mot de passe</label>
          <input type="password" class="form-control" id="pswd" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
};
</script>

<style scoped>
#centerdiv {
  margin: auto;
  border: solid 1px lightgrey;
  margin-top: 2%;
  padding: 2%;
  border-radius: 3%;
}
</style>