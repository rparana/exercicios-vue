<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @onClick="clearMemory" />
    <Button label="/" operation @onClick="setOperation" />
    <Button label="7" @onClick="addDigit" />
    <Button label="8" @onClick="addDigit" />
    <Button label="9" @onClick="addDigit" />
    <Button label="*" operation @onClick="setOperation" />
    <Button label="4" @onClick="addDigit" />
    <Button label="5" @onClick="addDigit" />
    <Button label="6" @onClick="addDigit" />
    <Button label="-" operation @onClick="setOperation" />
    <Button label="1" @onClick="addDigit" />
    <Button label="2" @onClick="addDigit" />
    <Button label="3" @onClick="addDigit" />
    <Button label="+" operation @onClick="setOperation" />
    <Button label="0" @onClick="addDigit" double />
    <Button label="." @onClick="addDigit" />
    <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
  import Display from "@/components/Display.vue";
  import Button from "@/components/Button.vue";
  export default {
    data() {
      return {
        displayValue: "0",
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0,
        result: false,
      };
    },
    components: {
      Display,
      Button,
    },
    methods: {
      clearMemory() {
        Object.assign(this.$data, this.$options.data());
      },
      setOperation(operation) {
        if (this.current === 0) {
          this.operation = operation;
          this.current = 1;
          this.clearDisplay = true;
        } else {
          this.result = operation === "=";
          const currentOperation = this.operation;
          try {
            this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`);
          } catch (e) {
            this.$emit("onErro", e);
          }
          this.values[1] = 0;
          this.displayValue = this.values[0];
          this.operation = this.result ? null : operation;
          this.current = this.result ? 0 : 1;
          this.clearDisplay = !this.result;
        }
      },
      addDigit(n) {
        if (n === "." && this.displayValue.includes(".")) {
          return;
        }
        const clearDisplay = this.displayValue === "0" || this.clearDisplay || this.result;
        const currentValue = clearDisplay ? "" : this.displayValue;
        const displayValue = currentValue + n;
        this.displayValue = displayValue;
        this.clearDisplay = false;
        this.result = false;
        this.values[this.current] = displayValue;
        // if (n !== ".") {
        //   const i = this.current;
        //   const newValue = parseFloat(displayValue);
        // }
      },
    },
  };
</script>

<style>
  .calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr repeat(5, 48px);
    border: 1px solid black;
  }
</style>
