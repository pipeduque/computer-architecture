<template>
  <div class="main-view">
    <v-form class="form">
      <v-text-field
        v-model="data"
        class="text-field"
        label="Data"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="input1"
        class="text-field"
        label="Entrada #1"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="input2"
        class="text-field"
        label="Entrada #2"
        outlined
      ></v-text-field>
      <div class="options">
        <v-btn small> Sumar </v-btn>
        <v-btn small> Restar </v-btn>
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ControlUnit from "../components/ControlUnit.vue";
import ALU from "../components/ALU.vue";
import Bus from "../components/Bus.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "MainView",
  components: {
    ControlUnit,
    ALU,
    Bus,
  },
  data() {
    return {
      data: null,
      input1: null,
      input2: null,
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
