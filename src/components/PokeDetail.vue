<template>
  <poke-modal
    :value="true"
    :showCancelBtn="false"
    :title="this.pokemon.name"
    @input="$emit('close')"
  >
    <template slot="body">
      <div class="col-lg-2" v-if="pokemon.sprites.front_shiny">
        <img :src="pokemon.sprites.front_shiny" alt />
      </div>
    </template>
    <template slot="footer">
      <button class="btn btn-danger pull-left" @click="$emit('close')">
        <i class="fa fa-remove"></i> Fechar
      </button>
    </template>
  </poke-modal>
</template>

<script>
import PokeModal from "./Modal/PokeModal";

export default {
  components: {
    PokeModal
  },
  props: {
    current: null
  },
  data() {
    return {
      pokemon: {}
    };
  },
  created() {
    this.pokemon = Object.assign({}, this.current);
  },
  methods: {
    submitForm() {
      this.$emit("close");
    }
  }
};
</script>

<style>
</style>
