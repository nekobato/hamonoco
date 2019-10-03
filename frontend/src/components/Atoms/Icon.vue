<template>
  <svg class="icon" :style="style" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <component :is="icon" fill="fill" />
  </svg>
</template>
<script lang="ts">
import Vue from 'vue';
import search from '@/components/Icons/SearchIcon.vue';
export default Vue.extend({
  components: {
    search,
  },
  props: ['size', 'icon', 'fill'],
  computed: {
    style() {
      return {
        width: this.size,
        height: this.size,
      };
    },
  },
});
</script>
