<template>
  <div>
    <span> Bus </span>
    <div v-if="isMovingToIR" class="enabled">
      <span> Moviendo al IR </span>
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
      "isMovingToIR",
      "isTransferingDataMemoryToRecord",
    ]),
    ...mapGetters("processor", ["getInstance"]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enabled {
  background-color: #6bbc97;
}
</style>
