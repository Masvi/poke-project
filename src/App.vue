<template>
  <div id="app">
    <div>
      <header-component></header-component>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent";
export default {
  components: {
    HeaderComponent
  },
  name: "App"
};
</script>
<style lang="scss">
@import "./assets/styles/_varibales";
@import "./assets/styles/_bootstrap";
</style>