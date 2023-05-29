<template>
  <div class="alu">
    <h2>ALU</h2>
    {{ operationCode }}
  </div>
</template>

<script lang="ts">
export default {
  name: "ALU",
  data() {
    return {
      operationOne: "",
      operationTwo: "",
      operationThree: "",
      operationCode: "operador",
      output: "",
    };
  },
  methods: {
    execute() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alu {
  border-radius: 5px;
  border: #42b983;
  border-color: black;
}

h1 {
  font-weight: normal;
}
</style>
