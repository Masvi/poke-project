<template>
    <div class="content">
        <poke-detail
            v-if="show.form"
            :current="currentPokemon"
            @close="toggleForm"
        />
        <section class="jumbotron text-center">
            <div class="container">
                <h1
                    v-if="generation.name"
                    class="jumbotron-heading"
                >
                    Pokémon {{ generation.name }}
                </h1>
                <p
                    v-if="generation.name"
                    class="lead text-muted"
                >
                    {{ generation.main_region.name }}
                </p>
            </div>
        </section>
        <div class="col-lg-12">
            <div class="container">
                <div class="row"> 
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">
                                    #
                                </th>
                                <th scope="col">
                                    Espécie
                                </th>
                                <th scope="col">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(specie, index) in generation.pokemon_species"
                                :key="specie.name"
                            >
                                <th scope="row">
                                    {{ index +1 }}
                                </th>
                                <td>{{ specie.name }}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-sm"
                                        @click="showPokeSpecie(specie)"
                                    >
                                        Visualizar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PokeDetail from "./PokeDetail"
import api from "../servives/api"

export default {
    components: {
        PokeDetail
    },
    data() {
        return {
            currentPokemon: null,
            generation: {},
            show: {
                form: false
            }
        }
    },
    created() {
        this.param = this.$route.params
        this.fetchPokemon(this.param)
    },
    methods: {
        fetchPokemon(param) {
            api.get(`generation/${param.id}`).then(response => {
                this.generation = response.data
                console.log(response)
            })
        },
        showPokeSpecie({ name }) {
            api.get(`pokemon/${name}`).then(({ data }) => {
                this.currentPokemon = data
                if (this.currentPokemon) {
                    this.toggleForm()
                }
            })
        },
        toggleForm() {
            this.show.form = !this.show.form
        }
    }
}
</script>

<style>
</style>