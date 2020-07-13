<template>
  <div id="app">
    <h1>Problema de Mont Hall</h1>
    <div class="form">
      <div v-if="!started" class="form">
        <div>
          <label for="portsAmount">Quantas portas?</label>
          <input type="number" id="portsAmount" v-model.number="portsAmount" />
        </div>
        <div>
          <label for="selectedPort">Qual porta será a premiada?</label>
          <input type="number" id="selectedPort" size="3" v-model.number="selectedPort" />
        </div>
        <button @click="started = true">Iniciar</button>
      </div>
      <div v-else class="form">
        <div>
          <button @click="started = false">Reiniciar</button>
        </div>
        <div class="doors">
          <div v-for="i in portsAmount" :key="i">
            <door :hasGift="i === selectedPort" :number="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Door from "@/components/Door.vue";
  export default {
    components: {
      Door,
    },
    name: "App",
    data: () => ({
      started: false,
      portsAmount: 3,
      selectedPort: null,
    }),
  };
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }

  #app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form,
  .form input,
  .form button {
    margin-bottom: 10px;
    font-size: 2rem;
  }
  .form input {
    max-width: 80px;
  }
  .doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
