<template>
  <div :class="{ 'bus-container-enabled': isBusEnabled }">
    <span> Bus </span>
    <div v-if="isTransferingDataMemoryToRecord">
      <div>Data: {{ data }}</div>
      <span> Memory -> Record </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  name: "BUS",
  data() {
    return {};
  },
  computed: {
    ...mapState("processor", [
      "data",
      "isBusEnabled",
      "isTransferingDataMemoryToRecord",
    ]),
    ...mapGetters("processor", ["getInstance"]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bus-container-enabled {
  background-color: #6bbc97;
}
</style>
