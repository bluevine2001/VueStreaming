<template>
  <div id="moviedetails">
    Détails {{ $route.params.id }}
  </div>
  <div id="backlink">
    <router-link to="/">retour</router-link>
  </div>
</template>

<script>


//console.log(id);
export default {
  name: "MovieDetails",
  // https://api.themoviedb.org/3/movie/{external_id}?api_key=c8eb38f71a620396f9fcd16374987cb0&language=fr-FR&external_source=imdb_id
  async mounted() {
    const id = this.$route.params.id;
    const api_key = "api_key=c8eb38f71a620396f9fcd16374987cb0";
    const base_url = "https://api.themoviedb.org/3/movie/";
    const api_url =
      base_url + id + "?" +
      api_key +"&language=fr-FR" +
       "&external_source=imdb_id";
    const data = await this.getMovies(api_url);
    console.log(data);
    const movieOverview = data.overview;
    const title = data.original_title;
    let posterPath = "https://image.tmdb.org/t/p/w500" + data.poster_path;
    console.log(title, movieOverview, posterPath);
  //movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    //this.displayMovie(id);

    document.getElementById("moviedetails").innerHTML = `<div id="wrapper"><h1>${title}</h1><br><img src="${posterPath}"><p>date de sortie : ${data.release_date} note: ${data.vote_average}</p><br><p>synopsis: ${movieOverview}</p></div>`;
        



  },

  methods: {
    async getMovies(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
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
  padding: 10px;
  text-align: center;
}
#backlink a {
  text-decoration: none;
  font-weight:bold;
  color: #fff;
  background-color: red;
  padding: 7px;
  border-radius: 5px;
}
#backlink a:hover {
  background-color: blue;
}
</style>
