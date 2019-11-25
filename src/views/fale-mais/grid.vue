<template>
  <div class="is-margin-table">
    <table
      class="table is-striped is-hoverable table is-fullwidth"
      v-if="data.length"
    >
      <thead>
        <tr>
          <th>Origem</th>
          <th>Destino</th>
          <th>Tempo</th>
          <th>Plano FaleMais</th>
          <th>Com FaleMais</th>
          <th>Sem FaleMais</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="`${index}-${row}`">
          <th>{{ row.dddOrigem }}</th>
          <th>{{ row.dddDestino }}</th>
          <th>{{ row.tempo }}</th>
          <th>{{ row.plano }}</th>
          <th>{{ row.comFaleMais }}</th>
          <th>{{ row.semFaleMais }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Grid",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style scoped>
.is-margin-table {
  margin-top: 10px;
}
</style>
