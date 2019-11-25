<template>
  <div class="has-background-white-ter box is-shadowless">
    <Form @send="send(form)" />
    <grid :data="setGrid" />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Form from "./form.vue";
import Grid from "./grid.vue";

export default {
  name: "faleMais",
  components: {
    Form,
    Grid
  },
  data() {
    return {
      setGrid: []
    };
  },
  computed: {
    ...mapGetters(["tabelaPreDefinida", "form"])
  },
  methods: {
    ...mapMutations(["clear"]),
    formatCurrency(value) {
      return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL"
      });
    },
    send(form) {
      const tabelaPreDefinida = this.tabelaPreDefinida.find(
        item =>
          item.origem === form.dddOrigem && item.destino === form.dddDestino
      );
      if (tabelaPreDefinida) {
        form.semFaleMais = tabelaPreDefinida.valorMinuto * form.tempo;
        if (form.tempo <= form.plano.value) {
          form.comFaleMais = 0;
        } else {
          const acrescimoExcedente =
            Number(0.1 * tabelaPreDefinida.valorMinuto) +
            Number(tabelaPreDefinida.valorMinuto);
          const minutosExcedentes = form.tempo - form.plano.value;
          form.comFaleMais = acrescimoExcedente * minutosExcedentes;
        }
      }
      this.setGrid.push({
        dddOrigem: form.dddOrigem && form.dddOrigem,
        dddDestino: form.dddDestino && form.dddDestino,
        tempo: form.tempo && form.tempo,
        plano: form.plano && form.plano.name,
        semFaleMais: form.semFaleMais && this.formatCurrency(form.semFaleMais),
        comFaleMais: this.formatCurrency(form.comFaleMais)
      });
      if (this.setGrid.length) {
        this.clear();
      }
    }
  }
};
</script>
