<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{stock.name}} <small>(Preço: {{stock.price | currency}})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field v-model.number="quantity" label="Quantidade" type="number"
        :error="insuficientFounds || !Number.isInteger(quantity)"></v-text-field>
        <v-btn class="green darken-3 white--text"         
        @click="buyStock" 
        :disabled="insuficientFounds||quantity<=0 || !Number.isInteger(quantity)"
        >{{insuficientFounds?"Insuficiente":"Comprar"}}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    quantity: 0,
  }),
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
  computed: {
    insuficientFounds() {
      return this.quantity * this.stock.price > this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>
