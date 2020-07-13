import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({ baseURL: "https://jsonbox.io/box_6fb6da88181368c9b37c" });
  },
});
