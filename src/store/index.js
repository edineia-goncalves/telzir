import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      dddOrigem: "",
      dddDestino: "",
      tempo: "",
      plano: "",
      comFaleMais: "-",
      semFaleMais: "-"
    },
    opcoesDDDOrigem: ["011", "016", "017", "018"],
    opcoesDDDDestino: ["011", "016", "017", "018"],
    opcoesPlanoFaleMais: [
      { value: 30, name: "FaleMais 30" },
      { value: 60, name: "FaleMais 60" },
      { value: 120, name: "FaleMais 120" }
    ],
    tabelaPreDefinida: [
      {
        origem: "011",
        destino: "016",
        valorMinuto: "1.90"
      },
      {
        origem: "016",
        destino: "011",
        valorMinuto: "2.90"
      },
      {
        origem: "011",
        destino: "017",
        valorMinuto: "1.70"
      },
      {
        origem: "017",
        destino: "011",
        valorMinuto: "2.70"
      },
      {
        origem: "011",
        destino: "018",
        valorMinuto: "0.90"
      },
      {
        origem: "018",
        destino: "011",
        valorMinuto: "1.90"
      }
    ]
  },
  getters: {
    form: state => state.form,
    opcoesDDDOrigem: state => state.opcoesDDDOrigem,
    opcoesDDDDestino: state => state.opcoesDDDDestino,
    opcoesPlanoFaleMais: state => state.opcoesPlanoFaleMais,
    tabelaPreDefinida: state => state.tabelaPreDefinida
  },
  mutations: {},
  actions: {},
  modules: {}
});
