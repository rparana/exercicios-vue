<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<input v-model="texto" type="text" v-case="'upper'">
		<h1>{{texto}}</h1>
	</div>
</template>

<script>
export default {
  directives: {
    case: {
      bind(el, binding, vnode) {
        el.addEventListener("keyup", async (e) => {
          let v = binding.value.toLowerCase() == "upper" ? e.target.value.toUpperCase() : e.target.value.toLowerCase();
          e.target.value = v;
          //vnode.componentInstance.$emit("input", v);
        });
        //el.value = binding.value.toLowerCase() == "upper" ? el.value.toUpperCase() : el.value.toLowerCase();
      },
    },
  },
  data() {
    return {
      texto: "",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
