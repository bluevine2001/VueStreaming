<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd">
    <div class="container-fluid">
      <a class="navbar-brand">VueStreaming</a>
      <Searchbar @search="search" />
    </div>
  </nav>
</template>

<script>
import Searchbar from "./Searchbar.vue";
export default {
  name: "Header",
  data() {
    return {
    };
  },
  components: {
    Searchbar,
  },
  methods: {
    search(text){
      this.$emit("search", text);
      console.log(text);
    }
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>