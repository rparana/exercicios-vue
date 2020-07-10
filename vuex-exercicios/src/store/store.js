import Vue from "vue";
import Vuex from "vuex";

import carrinho from "./modules/carrinho";
import parametros from "./modules/parameters";

import * as getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nome: "Rafael",
    sobrenome: "Paraná",
  },
  getters,
  modules: { carrinho, parametros },
});
