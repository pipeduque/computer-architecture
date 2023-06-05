<template>
  <div class="hello">
    <h1>Memory Ram</h1>

    <div class="component instruction-content">
      <h2>Instrucciones</h2>
      <div
        class="component"
        v-for="[key, instruction] in getMemoryData"
        :key="key"
      >
        <div class="record">
          <div class="address">
            {{ key }}
          </div>
          <div class="divider"></div>
          <div class="record-data" :key="instruction.value">
            <div>{{ instruction.address }}</div>
            <div class="divider"></div>
            <div>{{ instruction.value }}</div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="component instruction-content">
      <h2>Datos</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapState } from "vuex";
export default Vue.extend({
  name: "MemoryRam",
  data() {
    return {};
  },
  computed: {
    ...mapState("processor", ["memoryData"]),
    ...mapGetters("processor", ["getMemoryData"]),
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

.component {
  border: 1px solid black;
}

.instruction-content {
  padding: 5px;
}

.record {
  display: flex;
}

.address {
  align-items: start;
}

.divider {
  border-right: 1px solid black;
  padding-left: 10px;
  padding-right: 10px;
}

.record-data {
  justify-content: center;
  display: flex;
}
</style>
