<template>
     <div class="container">
    <div class="row col-4" id="centerdiv">
      <h2>{{movies[id].title}}</h2>
      <form>
        <div class="mb-3">
          <button>{{movies[id].link}}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name:"MovieModal",
    props: {
    movies: Array,
  },
}
</script>

<style scoped>
.centerdiv{
    margin: auto;
  border: solid 1px lightgrey;
  margin-top: 2%;
  padding: 2%;
  border-radius: 3%;
}

</style>