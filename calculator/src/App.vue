<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator />
  </div>
</template>

<script>
  import Calculator from "@/main/Calculator.vue";
  export default {
    components: {
      Calculator,
    },
    name: "App",
  };
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: #f3904f; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #3b4371, #f3904f); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #3b4371, #f3904f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
