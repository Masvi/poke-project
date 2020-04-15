<template>
  <transition name="fade">
    <div class="vue-modal" v-if="value">
      <transition appear name="drawer">
        <div
          class="modal inmodal"
          role="dialog"
          aria-hidden="true"
          style="display: block; padding-left: 6px;"
        >
          <div class="modal-dialog modal-lg" :style="styles" @click.stop.self.prevent>
            <div class="modal-content">
              <div class="modal-header">
                <button
                  @click="$emit('input', false)"
                  type="button"
                  class="close"
                  data-dismiss="modal"
                >
                  <span aria-hidden="true">×</span>
                  <span class="sr-only">Fechar</span>
                </button>
                <h4 class="modal-title">{{ title }}</h4>
                <slot name="header"></slot>
              </div>
              <div class="modal-body">
                <slot name="body"></slot>
              </div>
              <div v-if="!disableFooter" class="modal-footer">
                <button
                  v-if="showCancelBtn"
                  class="btn btn-large btn-white"
                  @click="$emit('input', false)"
                >Cancelar</button>
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="modal-backdrop fade in"></div>
    </div>
  </transition>
</template>

<script>
import { EventBus } from "@/plugins/event-bus";

export default {
  name: "PokeModal",
  props: {
    value: {
      required: true,
      type: Boolean
    },
    title: {
      type: String,
      default() {
        return "";
      }
    },
    disableFooter: {
      type: Boolean,
      default() {
        return false;
      }
    },
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      animateStart: false
    };
  },
  computed: {
    styles() {
      return {
        maxWidth: this.width !== null ? this.width + "px" : "30%"
      };
    }
  },
  watch: {
    value: function(val) {
      const body = document.getElementsByTagName("body")[0].classList;
      if (val) {
        body[0].classList.add("modal-open");
      } else {
        body[0].classList.remove("modal-open");
        EventBus.$emit("modalOpen", false);
      }
    }
  },
  mounted() {
    EventBus.$emit("modalOpen", this.value);
  },
  beforeDestroy() {
    EventBus.$emit("modalOpen", false);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: top 0.3s;
}

.drawer-enter,
.drawer-leave-to {
  top: -100px !important;
}

.drawer-enter-to,
.drawer-leave {
  top: 0;
}
</style>

<style scoped>
.vue-modal {
  color: #676a6c;
  position: relative;
  z-index: 100;
}
.vue-modal .inmodal .modal-title {
  font-size: 26px;
}
.vue-modal .inmodal .modal-header {
  padding: 15px;
  text-align: center;
}
.vue-modal .modal-header .close {
  margin-top: 8px;
  margin-right: 14px;
  position: absolute;
  top: 15px;
  right: 15px;
}
.vue-modal .inmodal .modal-body {
  background: #f8fafb;
  border-radius: 3px;
}
</style>