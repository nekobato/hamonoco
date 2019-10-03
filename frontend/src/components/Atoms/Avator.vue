<template>
  <div class="avator" :style="style">
    <img class="avator-image" :src="src" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['src', 'size'],
  computed: {
    style() {
      return {
        width: (this.size || 48) + 'px',
        height: (this.size || 48) + 'px',
      };
    },
  },
});
</script>
<style lang="scss" scoped>
.avator {
  border: 1px solid hsla(200, 20, 80, 0.48);
  border-radius: 8px;
  overflow: hidden;
}
.avator-image {
  width: 100%;
  height: 100%;
}
</style>
