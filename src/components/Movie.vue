<template>
  <div class="inner">
    <div class="image">
      <img :src="movie.poster_path" alt="affiche-film" height="350" />
    </div>
    <div class="title" @click="$emit('clicked-movie',movie.id)">
      <h5>{{ movie.title }}</h5>
    </div>
  </div>
</template>

<script>
//let img_url = "https://image.tmdb.org/t/p/w500"+ this.movie.poster_path;
export default {
  name: "Movie",
  props: {
    movie: Object,
  },
  methods: {
  },
  emits:["clicked-movie"],
};
</script>
<style scoped>
.title {
  text-align: center;
  padding-top: 5%;
}
.image {
  text-align: center;
  padding-top: 5%;
}
.inner {
  background-color: lightgrey;
  padding-bottom: 1%;
}
h5:hover{
cursor: pointer;
color:blue;
}
@media (max-width : 1200px) {
  .image img{
    width:100%
}
}

</style>