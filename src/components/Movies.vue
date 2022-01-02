<template>
  <div class="container">
    <div class="row">
      <div :key="movie.id" v-for="movie in movies" class="movie col-3">
        <Movie @clicked-movie="$emit('clicked-movie',movie.id)" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>

import Movie from "./Movie";
export default {
  name: "Movies",
  components: {
    Movie,
  },
  props: {
    movies: Array,
  },
  emits:["clicked-movie"],
};
</script>
<style scoped>
.movie {
  padding: 1%;
}
@media (max-width : 850px) {
  .movie{
    width:50%
}
}
</style>
