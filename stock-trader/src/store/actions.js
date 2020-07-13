import Vue from "vue";

export default {
  loadData({ commit }) {
    Vue.prototype.$http().then((res) => {
      const data = res.data[0];
      if (data) {
        commit("setStock", data.stocks);
        commit("setPortfolio", { funds: data.funds, stockPortfolio: data.stockPortfolio });
      }
    });
  },
};
