<template>
<div>
  <h1 class="display-3 font-weight-light mb-4">Negocie e consulte suas ações</h1>
  <v-sheet elevation="4" class="pa-2 blue darken-3">
    <v-icon class="white--text mr-3">info</v-icon>
    <span class="headline white--text font-weight-light">Você pode Sarvar & Carregar os Dados</span>
  </v-sheet>
  <v-sheet elevation="4" class="pa-2 success darken-1 mt-3">
    <v-icon class="white--text mr-3">info</v-icon>
    <span class="headline white--text font-weight-light">Clique em "Finalizar Dia" para iniciar um novo dia!</span>
  </v-sheet>
  <v-divider class="my-4"></v-divider>
  <p class="display-1"><strong>Seu Saldo: </strong> {{funds | currency}}</p>
</div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>
