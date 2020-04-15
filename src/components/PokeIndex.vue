<template>
  <div class="poke-index">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Pokémon generation games</h1>
        <p class="lead text-muted" />
      </div>
    </section>
    <main role="main">
      <div class="album py-5 bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="opt in options" :key="opt.url">
              <div class="card mb-4 shadow-sm">
                <div class="card-body">
                  <router-link
                    :to="{ path: '/generation/'+ opt.name, params: {params: opt } }"
                  >more..</router-link>
                  <h4>{{opt.name}}</h4>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">{{opt.url}}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import api from "../servives/api";

export default {
  name: "PokerIndex",
  components: {},
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
        console.log("--------------");
        console.log(response);
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
