<template>
  <div class="record">
    <span>{{ name }}</span>
    <div class="component">
      <div class="record-data">
        <div class="divider"></div>
        <div>{{ recordData.value }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Record",
  data() {
    return {
      programCounter: 0,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    recordData: {
      type: Object as () => RecordData,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

.record {
  display: flex;
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
