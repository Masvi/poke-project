<template>
  <div>
    <h1>generation tese</h1>
  </div>
</template>

<script>
import api from "../servives/api";
export default {
  methods: {
    fetchPokemon(param) {
      api.get(`generation/${param.id}`).then(response => {
        console.log(response);
      });
    }
  },
  created() {
    this.param = this.$route.params;
    this.fetchPokemon(this.param);
    console.log(this.param);
  }
};
</script>

<style>
</style>