<template>
  <component :class="['heading', levelClass]" :is="headingElement">
    <slot />
  </component>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['level'],
  computed: {
    headingElement() {
      return `h${this.level}`;
    },
    levelClass() {
      return `level-${this.level}`;
    },
  },
});
</script>
<style lang="scss" scoped>
.heading {
  font-weight: bold;
  line-height: 1;
  text-align: left;
}
.level-1 {
  font-size: 24px;
  margin: 12px 0;
}
.level-2 {
  font-size: 20px;
  margin: 12px 0;
}
.level-3 {
  font-size: 16px;
  margin: 12px 0;
}
</style>
