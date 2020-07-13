<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{stock.name}} 
          <small>(Preço: {{stock.price | currency}}) | Qtde: {{stock.quantity}}</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field v-model.number="quantity" label="Quantidade" type="number"
        :error="insuficientQuantity || !Number.isInteger(quantity)"></v-text-field>
        <v-btn class="blue darken-3 white--text" 
        @click="sellStock" 
        :disabled="insuficientQuantity||quantity<=0 || !Number.isInteger(quantity)"
        >{{insuficientQuantity? "Insuficiente": "Vender"}}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.sellStockAction(order);
      this.quantity = 0;
    },
  },
  computed: {
    insuficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
};
</script>

<style>
</style>
