<template>
  <div class="main-view">
    <v-form class="form">
      <v-textarea
        v-model="data"
        class="text-field"
        label="Data"
        outlined
        no-resize
      ></v-textarea>
      <div class="options">
        <v-btn small @click="transferData"> Memory To Record </v-btn>
      </div>
    </v-form>
    <div class="processor">
      <div class="component">
        <ALU />
      </div>
      <div class="bus">
        <Bus></Bus>
      </div>
      <div class="component">
        <ControlUnit />
      </div>
      <div class="component memory-ram">
        <MemoryRam />
      </div>
    </div>

    <div class="component">
      <Records />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ControlUnit from "../components/ControlUnit.vue";
import ALU from "../components/ALU.vue";
import Bus from "../components/Bus.vue";
import MemoryRam from "@/components/MemoryRam.vue";
import Records from "../components/Records.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "MainView",
  components: {
    ControlUnit,
    ALU,
    Bus,
    MemoryRam,
    Records,
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    ...mapMutations("processor", ["transferDataMemoryToRecord"]),
    transferData() {
      this.transferDataMemoryToRecord(this.data);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-view {
  display: flex;
  justify-content: center;
  margin: 30px;
}

.processor {
  display: flex;
  justify-content: center;
  margin: 30px;
}

.component {
  border: 1px solid black;
  padding: 10px;
}

.memory-ram {
  width: 300px;
}

.text-field {
  padding: 10px;
}

.form {
  border: 1px solid black;
  padding: 30px;
}

.bus {
  border: 1px solid black;
  width: 150px;
  height: 75px;
}

.options {
  justify-content: center;
}
</style>
