<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<!-- <b-button variant="primary" class="mb-3" @click="exibir=!exibir">Mostrar Mensagem</b-button> -->
		<!-- <transition name="fade" appear>
		<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="slide" type="transition" appear>
		<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>

		<transition
		enter-active-class="animate__animated animate__zoomIn"
		leave-active-class="animate__animated animate__zoomOut"
		>
		<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition> -->

<!-- <hr>
<b-select v-model="tipoAnimacao" class="mb-3">
	<option value="fade">Fade</option>
	<option value="slide">Slide</option>
</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{msg}}</b-alert>
		</transition>

<hr>
		<b-button variant="info" class="mb-3" @click="exibir2=!exibir2">Mostrar Caixa</b-button>
<transition
@before-enter="beforeEnter"
@enter="enter"
@enter-cancelled="enterCancelled"

@before-leave="beforeLeave"
@leave="leave"
@leave-cancelled="leaveCancelled"

:css="false"
>
	<div class="caixa" v-if="exibir2"></div>
</transition>

<hr>
		<b-button variant="info" class="mb-3 mx-3" @click="componenteSelecionado='AlertaInfo'">Alerta Info</b-button>
		<b-button variant="warning" class="mb-3" @click="componenteSelecionado='AlertaAdvertencia'">Alerta Advertência</b-button>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado" />
		</transition> -->
<b-button variant="primary" @click="adicionarAluno" class="mb-3">Adicionar Aluno</b-button>
<transition-group name="slide" tag="div">
	<b-list-group v-for="(aluno,i) in alunos" :key="aluno">
		<b-list-group-item @click="removerAluno(i)">{{aluno}}</b-list-group-item>
	</b-list-group>
</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";
export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data: () => ({
    alunos: ["Rafael", "Matheus", "Manuela", "Tatiane", "Pedro", "Gustavo"],
    msg: "Uma mensagem de informação!!!",
    exibir: false,
    exibir2: true,
    tipoAnimacao: "fade",
    larguraBase: 0,
    componenteSelecionado: "AlertaInfo",
  }),
  methods: {
    adicionarAluno() {
      const s = Math.random()
        .toString(36)
        .substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    enterCancelled() {},
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    leaveCancelled() {},
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 1s;
}

.slide-enter-active {
  animation: slide-in 1s ease;
  transition: opacity 1s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 1s ease;
  transition: opacity 1s;
}
.slide-leave-to,
.slide-enter {
  opacity: 0;
}
.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
