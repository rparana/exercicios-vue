import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("contaLetras", (value) => {
  const total = `${value}`
    .split(" ")
    .map((p) => `${p} (${p.length})`)
    .join(" ");
  return total;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
