<template>
  <div class="pulldown-button">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: [],
});
</script>
<style lang="scss" scoped>
.pulldown-button {
  padding: 8px;
  height: 40px;
  background: hsla(0, 0, 100, 1);
  border: 1px solid rgba(0, 0, 0, 0.48);
  border-radius: 4px;
  font-size: 24px;
  cursor: pointer;
}
</style>
