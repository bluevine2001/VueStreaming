<template>
  <div id="moviedetails"></div>
  <div id="backlink">
    <router-link to="/">retour</router-link>
  </div>
</template>

<script>
let str = window.location.href;
let strid = str.split("=");
let id = strid[1];

//console.log(id);
export default {
  name: "MovieDetails",
  data() {
    return {
      moviesData: [],
      movieid: id,
    };
  },
  async mounted() {
    const api_key = "api_key=c8eb38f71a620396f9fcd16374987cb0";
    const base_url = "https://api.themoviedb.org/3";
    const api_url =
      base_url +
      "/discover/movie?sort_by=popularity.desc&" +
      api_key +
      "&language=fr-FR";
    const data = await this.getMovies(api_url);
    //console.log(data.results);
    this.moviesData = data.results;
    this.moviesData.forEach((movie) => {
      movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    });
    this.displayMovie(id);
    //console.log(this.movies);
  },

  methods: {
    async getMovies(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    displayMovie(id) {
      this.moviesData.map((movie) => {
        if (movie.id == id) {
          console.log(movie);
          document.getElementById(
            "moviedetails"
          ).innerHTML = `<div id="wrapper"><h1>${movie.title}</h1><br><img src="${movie.poster_path}"><p>date de sortie : ${movie.release_date} note: ${movie.vote_average}</p><br><p>synopsis: ${movie.overview}</p></div>
             `;
        }
      });
    },
  },
};
</script>

<style>
#moviedetails {
  text-align: center;
  width: 70%;
  margin: auto;
}
#backlink {
  width: 100%;
  height: 100px;
}
</style>
