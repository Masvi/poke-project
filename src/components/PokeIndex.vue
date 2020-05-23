<template>
    <div class="poke-index">
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">
                    Pokémon generation games
                </h1>
                <p class="lead text-muted" />
            </div>
        </section>
        <main role="main">
            <div class="album py-5 bg-dark">
                <div class="container">
                    <div class="row">
                        <div
                            v-for="opt in options"
                            :key="opt.url"
                            class="col-md-4"
                        >
                            <div class="card mb-4 shadow-sm">
                                <div class="card-body">
                                    <h4>{{ opt.name }}</h4>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-muted">{{ opt.url }}</small>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <router-link :to="{ path: '/generation/'+ opt.name, params: {params: opt } }">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Visualizar
                                            </button>
                                        </router-link>
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
import api from "@/servives/api"

export default {
    name: "PokerIndex",
    components: {},
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
        }
    },
    created() {
        this.fetchPokemon()
    },
    methods: {
        fetchPokemon() {
            api.get("generation").then(({ data }) => {
                this.options = data.results
            })
        }
    }
}
</script>
