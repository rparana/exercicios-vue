<template>
    <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title >Salvar dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="loadDataLocal">
            <v-list-tile-title>Carregar dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout class="align-center">
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: {{funds | currency}}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$http().then((res) => {
        if (res.data.length > 0) {
          this.updateData(res.data[0]["_id"], { funds, stockPortfolio, stocks });
        } else {
          this.insertData({ funds, stockPortfolio, stocks });
        }
      });
    },
    insertData(data) {
      this.$http.post("", data);
    },
    updateData(id, data) {
      this.$http.put(`/${id}/`, data);
    },
    loadDataLocal() {
      this.loadData();
    },
  },
};
</script>

<style>
</style>
