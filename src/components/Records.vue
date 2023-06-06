<template>
  <div class="hello">
    <h1>Records</h1>
    <div class="component records">
      <span></span>
      <h2>Banco de registros</h2>
      <Record
        class="component"
        v-for="[recordType, data] in recordData"
        :key="recordType"
        :name="recordType"
        :recordData="data"
      />
    </div>
    <div class="component records">
      <h2>Registros del procesador</h2>
      <Record
        class="component"
        v-for="[recordType, recordData] in processorRecords"
        :key="recordType"
        :name="recordType"
        :recordData="recordData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Record from "./Record.vue";

export default Vue.extend({
  name: "Records",
  components: {
    Record,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("processor", ["recordData", "processorRecords"]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

h2 {
  font-size: small;
}

.records {
  padding: 10px;
}

.component {
  border: 1px solid black;
}
</style>
