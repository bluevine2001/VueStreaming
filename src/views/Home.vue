<template>
  <LoginModal v-show="!connected" />
  <Movies @clicked-movie="getInfo" :movies="movies" />
</template>

<script>
import LoginModal from "../components/LoginModal";
import Movies from "../components/Movies";
//import axios from 'axios';

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
    //   axios.get(api_url)
    //   .then((response) =>{this.movies=response.json();console.log(this.movies)});
    const data = await this.getMovies(api_url);
    console.log(data.results);
    this.movies = data.results;
    this.movies.forEach(movie =>{
        //const {id,title,poster_path,vote_average,overview} = movie;
        movie.poster_path= "https://image.tmdb.org/t/p/w500"+ movie.poster_path;
    })
    console.log(this.movies);
  },
  methods: {
    getInfo(id){
      //console.log('movie',id);
      this.$router.push({ path: 'moviedetails', query: { movie: id } });
    },
    async getMovies(url){
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
  },

  created() {
    // this.movies = [
    //   {
    //     id: 1,
    //     title: "Suicide Squad",
    //     img: "https://fr.web.img6.acsta.net/pictures/21/03/26/16/42/1810776.jpg",
    //   },
    //   {
    //     id: 2,
    //     title: "Suicide Squad",
    //     img: "https://fr.web.img6.acsta.net/pictures/21/03/26/16/42/1810776.jpg",
    //   },
    //   {
    //     id: 3,
    //     title: "Suicide Squad",
    //     img: "https://fr.web.img6.acsta.net/pictures/21/03/26/16/42/1810776.jpg",
    //   },
    //   {
    //     id: 4,
    //     title: "Suicide Squad",
    //     img: "https://fr.web.img6.acsta.net/pictures/21/03/26/16/42/1810776.jpg",
    //   },
    // ];
  },
};
</script>

<style>
</style>