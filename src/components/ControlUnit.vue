<template>
  <div class="hello">
    <h1>Control Unit</h1>
    <div v-if="isBusEnabled" class="enabled">
      <span> Accediendo al Bus </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "ControlUnit",
  data() {
    return {};
  },
  computed: {
    ...mapState("processor", ["isBusEnabled"]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

.enabled {
  background-color: #6bbc97;
}
</style>
