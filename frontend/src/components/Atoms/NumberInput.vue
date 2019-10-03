<template>
  <input class="number-input" type="number" v-model="inputValue" :placeholder="placeholder" />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['value', 'placeholder'],
  computed: {
    inputValue: {
      get(): number {
        return this.value;
      },
      set(value: number): void {
        this.$emit('update', value);
      },
    },
  },
});
</script>
<style lang="scss" scoped>
.number-input {
  padding: 8px;
  width: 100%;
  height: 40px;
  background: hsla(0, 0, 100, 1);
  border: 1px solid rgba(0, 0, 0, 0.48);
  border-radius: 4px;
  font-size: 16px;
  text-align: right;
}
</style>
