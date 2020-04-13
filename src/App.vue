<template>
  <div id="app">
    <poke-index />
  </div>
</template>

<script>
import PokeIndex from "./components/PokeIndex";

export default {
  name: "App",
  components: {
    PokeIndex
  }
};
</script>
<style lang="scss">
@import "./assets/styles/_varibales";
@import "./assets/styles/_bootstrap";
</style>