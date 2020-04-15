<template>
  <div class="content">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Pokémon {{ generation.name }}</h1>
        <p class="lead text-muted">{{ generation.main_region.name }}</p>
      </div>
    </section>
    <div class="col-lg-12">
      <div class="container">
        <div class="row">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Espécie</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(specie, index) in generation.pokemon_species" :key="specie.name">
                <th scope="row">{{ index +1 }}</th>
                <td>{{ specie.name }}</td>
                <td>{{ specie.url }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../servives/api";
export default {
  data() {
    return {
      generation: {}
    };
  },
  methods: {
    fetchPokemon(param) {
      api.get(`generation/${param.id}`).then(response => {
        this.generation = response.data;
        console.log(response);
      });
    }
  },
  created() {
    this.param = this.$route.params;
    this.fetchPokemon(this.param);
  }
};
</script>

<style>
</style>