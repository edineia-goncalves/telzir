<template>
  <div>
    <div class="columns">
      <div class="column is-3">
        <div class="control is-small">
          <label class="label">DDD de origem:</label>
          <multiselect
            v-model="form.dddOrigem"
            :options="opcoesDDDOrigem"
            placeholder="Selecione"
            :hide-selected="true"
            open-direction="bottom"
            select-label
          ></multiselect>
          <p class="help is-danger" v-show="!form.dddOrigem">obrigatório</p>
        </div>
      </div>
      <div class="column is-3">
        <div class="control is-small">
          <label class="label">DDD de destino:</label>
          <multiselect
            v-model="form.dddDestino"
            :options="opcoesDDDDestino"
            placeholder="Selecione"
            :hide-selected="true"
            open-direction="bottom"
            select-label
          ></multiselect>
          <p class="help is-danger" v-show="!form.dddDestino">obrigatório</p>
        </div>
      </div>
      <div class="column is-3">
        <div class="control">
          <label class="label">Tempo de ligação em minutos:</label>
          <input
            v-model="form.tempo"
            class="input"
            type="number"
            placeholder="ex: 30"
          />
          <p class="help is-danger" v-show="!form.tempo">obrigatório</p>
        </div>
      </div>
      <div class="column is-3">
        <div class="control is-small">
          <label class="label">Escolha o plano:</label>
          <multiselect
            v-model="form.plano"
            :options="opcoesPlanoFaleMais"
            track-by="name"
            placeholder="Selecione"
            label="name"
            :hide-selected="true"
            open-direction="bottom"
            select-label
          ></multiselect>
          <p class="help is-danger" v-show="!form.plano">obrigatório</p>
        </div>
      </div>
    </div>
    <button
      class="button is-success"
      @click="$emit('send')"
      :disabled="!validateForm"
    >
      Enviar
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Form",
  computed: {
    ...mapGetters([
      "form",
      "opcoesDDDOrigem",
      "opcoesDDDDestino",
      "opcoesPlanoFaleMais"
    ]),
    validateForm() {
      return (
        this.form.dddOrigem &&
        this.form.dddDestino &&
        this.form.tempo &&
        this.form.plano
      );
    }
  }
};
</script>
