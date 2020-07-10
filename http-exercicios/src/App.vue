<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
    <b-alert show dismissible v-for="mensagem in mensagens" 
    :key="mensagem.texto" 
    :variant="mensagem.tipo">{{mensagem.texto}}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-3">Obter Usuários</b-button>
		</b-card>
    <b-list-group class="my-3">
      <b-list-group-item v-for="(usuario,id) in usuarios" :key="id">
        <strong>Nome:</strong>{{ usuario.nome }} <br>
        <strong>Email:</strong>{{ usuario.email }}<br>
        <strong>ID:</strong>{{ id }}<br>

        <b-button @click="carregar(id)" size="lg" class="mx-2" variant="warning">Carregar</b-button>
        <b-button @click="excluir(id)" size="lg" class="mx-2" variant="danger">Excluir</b-button>
      </b-list-group-item>
    </b-list-group>
	</div>
</template>

<script>
export default {
  data: () => ({
    mensagens: [],
    usuarios: [],
    id: null,
    usuario: { nome: "", email: "" },
  }),
  methods: {
    limpar() {
      this.mensagens = [];
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
    },
    salvar() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";

      this.$http[metodo](`usuarios${finalUrl}`, this.usuario).then(() => {
        this.limpar();
        this.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: "success",
        });
      });
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    excluir(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then(() => {
          this.limpar();
          this.mensagens.push({
            texto: "Usuário excluido com sucesso!",
            tipo: "success",
          });
        })
        .catch(() => {
          this.mensagens.push({
            texto: "Erro ao excluir!",
            tipo: "danger",
          });
        });
    },
    obterUsuarios() {
      this.$http("usuarios.json").then((res) => {
        this.usuarios = res.data;
        this.$http.defaults.headers.common["Authorization"] = "abc321";
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
