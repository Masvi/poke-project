<template>
    <poke-modal
        :value="true"
        :show-cancel-btn="false"
        :title="pokemon.name"
        @input="$emit('close')"
    >
        <template slot="body">
            <div class="row">
                <div
                    v-if="pokemon.sprites.front_shiny"
                    class="form-group col-md-4 box"
                >
                    <img
                        :src="pokemon.sprites.front_shiny"
                        alt
                    >
                </div>
                <div class="form-group col-md-8">
                    <div>
                        <strong>Abilities:</strong>
                        {{ pokemon.abilities.length }}
                    </div>
                    <div>
                        <strong>Base Experience:</strong>
                        {{ pokemon.base_experience }}
                    </div>
                    <div>
                        <strong>Height:</strong>
                        {{ pokemon.height }}
                    </div>
                    <div>
                        <strong>Held Items:</strong>
                        {{ pokemon.held_items.length }}
                    </div>
                    <div>
                        <strong>Moves:</strong>
                        {{ pokemon.moves.length }}
                    </div>
                    <div>
                        <strong>Weight:</strong>
                        {{ pokemon.weight }}
                    </div>
                </div>
            </div>
        </template>
        <template slot="footer">
            <button
                class="btn btn-danger pull-left"
                @click="$emit('close')"
            >
                <i class="fa fa-remove" /> Fechar
            </button>
        </template>
    </poke-modal>
</template>

<script>
import PokeModal from "./Modal/PokeModal"

export default {
    components: {
        PokeModal
    },
    props: {
        current: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            pokemon: {}
        }
    },
    created() {
        this.pokemon = Object.assign({}, this.current)
    },
    methods: {
        submitForm() {
            this.$emit("close")
        }
    }
}
</script>

<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  width: 100px;
  height: 100px;
}
</style>
