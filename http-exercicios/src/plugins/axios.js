import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = "https://curso-vue-1746e.firebaseio.com/";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://curso-vue-1746e.firebaseio.com/",
      // headers: {
      //   // get:{
      //   //   "Authorization" : "abc123"
      //   // }
      //   Authorization: "abc123",
      // },
    });
    Vue.prototype.$http.interceptors.request.use(
      (req) => {
        // const array = [];
        // for (let chave in res.data) {
        //   array.push({ id: chave, ...res.data[chave] });
        // }
        // res.data = array;
        return req;
      },
      (error) => Promise.reject(error)
    );
    Vue.prototype.$http.interceptors.response.use(
      (res) => {
        // const array = [];
        // for (let chave in res.data) {
        //   array.push({ id: chave, ...res.data[chave] });
        // }
        // res.data = array;
        return res;
      },
      (error) => Promise.reject(error)
    );
  },
});
