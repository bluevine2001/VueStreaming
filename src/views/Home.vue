<template>
  <LoginModal v-show="!connected" />
  <Movies @clicked-movie="getInfo" :movies="movies" />
</template>

<script>
import LoginModal from "../components/LoginModal";
import Movies from "../components/Movies";

export default {
  name: "Home",
  components: {
    LoginModal,
    Movies,
  },
  data() {
    return {
      connected: true,
      movies: null,
    };
  },
  async mounted(){
      const api_key = "api_key=c8eb38f71a620396f9fcd16374987cb0";
      const base_url = "https://api.themoviedb.org/3";
      const api_url = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key+"&language=fr-FR";
    const data = await this.getMovies(api_url);
    console.log(data.results);
    this.movies = data.results;
    this.movies.forEach(movie =>{
        movie.poster_path= "https://image.tmdb.org/t/p/w500"+ movie.poster_path;
    })
    console.log(this.movies);
  },
  methods: {
    getInfo(id){
      console.log(id);
      const movies = this.movies;
      console.log(movies);
      this.$router.push({ path: 'moviedetails', query: {id:id}});
    },
    async getMovies(url){
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
  },
};
</script>

<style>
</style>