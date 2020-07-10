<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{inverterNome()}}</strong></p>
        <p>Idade: <strong>{{idade}}</strong></p>
        <button @click="reiniciaNome">Reinicializar nome</button>
    </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: ["nome", "idade"],
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciaNome() {
      this.nome = "Rafael";
      this.$emit("nomeMudou", this.nome);
    },
  },
  created() {
    barramento.$on("idadeMudou", (idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
