<template>
  <form class="d-flex" @submit.prevent="searchMovies()">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="search"
    />
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</template>

<script>
import { ref } from 'vue';
const search = ref("");
console.log(search);
export default {
  name: "Searchbar",
  methods:{
    searchMovies(){
      if(search.value != ""){  
        let query = search.value;      
        this.$emit("search", query);
        //console.log(query);
      }
    },    
  },
  data(){
    return{
      search
    } 
    }
};
</script>