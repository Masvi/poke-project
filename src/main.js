import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import PokeGeneration from "./components/PokeGeneration"
import PokerIndex from "./components/PokeIndex"
Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: PokerIndex
    },
    {
      path: '/generation/:id',
      name: 'generation',
      component: PokeGeneration
    }
  ]
})


new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
