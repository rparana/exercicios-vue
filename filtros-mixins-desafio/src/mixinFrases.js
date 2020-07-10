export default {
  computed: {
    retornaValoresComVirgula() {
      return this.textoComEspaco.replace(/ /g, ",");
    },
    retornaValoresContandoLetras() {
      return this.textoComEspaco
        .split(" ")
        .map((p) => `${p} (${p.length})`)
        .join(" ");
    },
  },
};
