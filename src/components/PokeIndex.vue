<template>
  <div class="poke-index">
    <h1>Gerações</h1>
    <div class="container">
      <ul>
        <li v-for="opt in options" :key="opt.url">{{opt.url}}</li>
      </ul>
    </div>
    <div>
      <poke-pagination :pagination="meta.pagination"></poke-pagination>
    </div>
  </div>
</template>

<script>
import api from "../servives/api";
import PokePagination from "../components/PokePagination";

export default {
  name: "PokeIndex",
  components: {
    PokePagination
  },
  props: {
    msg: String
  },
  data() {
    return {
      options: [],
      meta: {
        pagination: {},
        filters: [],
        sort: {
          sort: "name",
          desc: false
        }
      }
    };
  },
  methods: {
    fetchPokemon() {
      api.get("generation").then(response => {
        this.options = response.data.results;
      });
    }
  },
  created() {
    this.fetchPokemon();
  }
};
</script>


<style scoped>
</style>
