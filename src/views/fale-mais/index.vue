<template>
  <div class="has-background-white-ter box is-shadowless">
    <Form @send="send(form)" />
    <grid :data="dataGrid" />
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
      dataGrid: []
    };
  },
  computed: {
    ...mapGetters(["tabelaPreDefinida", "form", "setGrid"])
  },
  methods: {
    ...mapMutations(["clear", "getForm"]),
    formatCurrency(value) {
      return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL"
      }).format(value);
    },
    send(form) {
      form && this.getForm(form);
      const setGrid = { ...this.setGrid };
      setGrid.semFaleMais =
        setGrid.semFaleMais === "-"
          ? setGrid.semFaleMais
          : this.formatCurrency(setGrid.semFaleMais);
      setGrid.comFaleMais =
        setGrid.comFaleMais === "-"
          ? setGrid.comFaleMais
          : this.formatCurrency(setGrid.comFaleMais);
      this.dataGrid.push(setGrid);
      this.clear();
    }
  }
};
</script>
