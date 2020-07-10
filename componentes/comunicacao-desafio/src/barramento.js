import Vue from "vue";
export default new Vue({
  methods: {
    usuarioSelecionado(usuario) {
      this.$emit("usuarioFoiSelecionado", usuario);
    },
    quandoUsuarioForSelecionado(callback) {
      this.$on("usuarioFoiSelecionado", callback);
    },
  },
});
