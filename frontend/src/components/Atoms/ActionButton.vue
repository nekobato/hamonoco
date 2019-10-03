<template>
  <button :class="['button', type]" @click="onClick">
    <slot />
  </button>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['type'],
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/colors.scss';

.button {
  padding: 0 8px;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  line-height: 1;
  color: $white;
  &.positive {
    background: hsla(200, 80, 50, 1);
  }
  &.negative {
    background: hsla(350, 80, 50, 1);
  }
}
</style>
